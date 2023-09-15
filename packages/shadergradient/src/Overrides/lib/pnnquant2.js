// Modified from:
// https://github.com/mcychan/PnnQuant.js/blob/master/src/pnnquant.js

/* Fast pairwise nearest neighbor based algorithm for multilevel thresholding
Copyright (C) 2004-2019 Mark Tyler and Dmitry Groshev
Copyright (c) 2018-2021 Miller Cy Chan
* error measure; time used is proportional to number of bins squared - WJ */

import {
  rgb888_to_rgb565,
  rgb888_to_rgb444,
  rgba8888_to_rgba4444,
} from "./rgb-packing.js";

function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}

function sqr(value) {
  return value * value;
}

function find_nn(bins, idx, hasAlpha) {
  var nn = 0;
  var err = 1e100;

  const bin1 = bins[idx];
  const n1 = bin1.cnt;
  const wa = bin1.ac;
  const wr = bin1.rc;
  const wg = bin1.gc;
  const wb = bin1.bc;
  for (var i = bin1.fw; i != 0; i = bins[i].fw) {
    const bin = bins[i];
    const n2 = bin.cnt;
    const nerr2 = (n1 * n2) / (n1 + n2);
    if (nerr2 >= err) continue;

    var nerr = 0;
    if (hasAlpha) {
      nerr += nerr2 * sqr(bin.ac - wa);
      if (nerr >= err) continue;
    }

    nerr += nerr2 * sqr(bin.rc - wr);
    if (nerr >= err) continue;

    nerr += nerr2 * sqr(bin.gc - wg);
    if (nerr >= err) continue;

    nerr += nerr2 * sqr(bin.bc - wb);
    if (nerr >= err) continue;
    err = nerr;
    nn = i;
  }
  bin1.err = err;
  bin1.nn = nn;
}

function create_bin() {
  return {
    ac: 0,
    rc: 0,
    gc: 0,
    bc: 0,
    cnt: 0,
    nn: 0,
    fw: 0,
    bk: 0,
    tm: 0,
    mtm: 0,
    err: 0,
  };
}

function bin_add_rgb(bin, r, g, b) {
  bin.rc += r;
  bin.gc += g;
  bin.bc += b;
  bin.cnt++;
}

function create_bin_list(data, format) {
  const bincount = format === "rgb444" ? 4096 : 65536;
  const bins = new Array(bincount);
  const size = data.length;

  /* Build histogram */
  // Note: Instead of introducing branching/conditions
  // within a very hot per-pixel iteration, we just duplicate the code
  // for each new condition
  if (format === "rgba4444") {
    for (let i = 0; i < size; ++i) {
      const color = data[i];
      const a = (color >> 24) & 0xff;
      const b = (color >> 16) & 0xff;
      const g = (color >> 8) & 0xff;
      const r = color & 0xff;

      // reduce to rgb4444 16-bit uint
      const index = rgba8888_to_rgba4444(r, g, b, a);
      let bin = index in bins ? bins[index] : (bins[index] = create_bin());
      bin.rc += r;
      bin.gc += g;
      bin.bc += b;
      bin.ac += a;
      bin.cnt++;
    }
  }
  
  else if (format === "rgb444") {
    for (let i = 0; i < size; ++i) {
      const color = data[i];
      const b = (color >> 16) & 0xff;
      const g = (color >> 8) & 0xff;
      const r = color & 0xff;

      // reduce to rgb444 12-bit uint
      const index = rgb888_to_rgb444(r, g, b);
      let bin = index in bins ? bins[index] : (bins[index] = create_bin());
      bin.rc += r;
      bin.gc += g;
      bin.bc += b;
      bin.cnt++;
    }
  } else {
    for (let i = 0; i < size; ++i) {
      const color = data[i];
      const b = (color >> 16) & 0xff;
      const g = (color >> 8) & 0xff;
      const r = color & 0xff;

      // reduce to rgb565 16-bit uint
      const index = rgb888_to_rgb565(r, g, b);
      let bin = index in bins ? bins[index] : (bins[index] = create_bin());
      bin.rc += r;
      bin.gc += g;
      bin.bc += b;
      bin.cnt++;
    }
  }
  return bins;
}

export default function quantize(rgba, maxColors, opts = {}) {
  const {
    format = "rgb565",
    clearAlpha = true,
    clearAlphaColor = 0x00,
    clearAlphaThreshold = 0,
    oneBitAlpha = false,
  } = opts;

  if (!rgba || !rgba.buffer) {
    throw new Error('quantize() expected RGBA Uint8Array data');
  }
  if (!(rgba instanceof Uint8Array) && !(rgba instanceof Uint8ClampedArray)) {
    throw new Error('quantize() expected RGBA Uint8Array data');
  }
  
  const data = new Uint32Array(rgba.buffer);

  let useSqrt = opts.useSqrt !== false;

  // format can be:
  // rgb565 (default)
  // rgb444
  // rgba4444

  const hasAlpha = format === "rgba4444";
  const bins = create_bin_list(data, format);
  const bincount = bins.length;
  const bincountMinusOne = bincount - 1;
  const heap = new Uint32Array(bincount + 1);

  /* Cluster nonempty bins at one end of array */
  var maxbins = 0;
  for (var i = 0; i < bincount; ++i) {
    const bin = bins[i];
    if (bin != null) {
      var d = 1.0 / bin.cnt;
      if (hasAlpha) bin.ac *= d;
      bin.rc *= d;
      bin.gc *= d;
      bin.bc *= d;
      bins[maxbins++] = bin;
    }
  }

  if (sqr(maxColors) / maxbins < 0.022) {
    useSqrt = false;
  }

  var i = 0;
  for (; i < maxbins - 1; ++i) {
    bins[i].fw = i + 1;
    bins[i + 1].bk = i;
    if (useSqrt) bins[i].cnt = Math.sqrt(bins[i].cnt);
  }
  if (useSqrt) bins[i].cnt = Math.sqrt(bins[i].cnt);

  var h, l, l2;
  /* Initialize nearest neighbors and build heap of them */
  for (i = 0; i < maxbins; ++i) {
    find_nn(bins, i, false);
    /* Push slot on heap */
    var err = bins[i].err;
    for (l = ++heap[0]; l > 1; l = l2) {
      l2 = l >> 1;
      if (bins[(h = heap[l2])].err <= err) break;
      heap[l] = h;
    }
    heap[l] = i;
  }

  /* Merge bins which increase error the least */
  var extbins = maxbins - maxColors;
  for (i = 0; i < extbins; ) {
    var tb;
    /* Use heap to find which bins to merge */
    for (;;) {
      var b1 = heap[1];
      tb = bins[b1]; /* One with least error */
      /* Is stored error up to date? */
      if (tb.tm >= tb.mtm && bins[tb.nn].mtm <= tb.tm) break;
      if (tb.mtm == bincountMinusOne)
        /* Deleted node */ b1 = heap[1] = heap[heap[0]--];
      /* Too old error value */ else {
        find_nn(bins, b1, false);
        tb.tm = i;
      }
      /* Push slot down */
      var err = bins[b1].err;
      for (l = 1; (l2 = l + l) <= heap[0]; l = l2) {
        if (l2 < heap[0] && bins[heap[l2]].err > bins[heap[l2 + 1]].err) l2++;
        if (err <= bins[(h = heap[l2])].err) break;
        heap[l] = h;
      }
      heap[l] = b1;
    }

    /* Do a merge */
    var nb = bins[tb.nn];
    var n1 = tb.cnt;
    var n2 = nb.cnt;
    var d = 1.0 / (n1 + n2);
    if (hasAlpha) tb.ac = d * (n1 * tb.ac + n2 * nb.ac);
    tb.rc = d * (n1 * tb.rc + n2 * nb.rc);
    tb.gc = d * (n1 * tb.gc + n2 * nb.gc);
    tb.bc = d * (n1 * tb.bc + n2 * nb.bc);
    tb.cnt += nb.cnt;
    tb.mtm = ++i;

    /* Unchain deleted bin */
    bins[nb.bk].fw = nb.fw;
    bins[nb.fw].bk = nb.bk;
    nb.mtm = bincountMinusOne;
  }

  // let palette = new Uint32Array(maxColors);
  let palette = [];

  /* Fill palette */
  var k = 0;
  for (i = 0; ; ++k) {
    let r = clamp(Math.round(bins[i].rc), 0, 0xff);
    let g = clamp(Math.round(bins[i].gc), 0, 0xff);
    let b = clamp(Math.round(bins[i].bc), 0, 0xff);

    let a = 0xff;
    if (hasAlpha) {
      a = clamp(Math.round(bins[i].ac), 0, 0xff);
      if (oneBitAlpha) {
        const threshold = typeof oneBitAlpha === "number" ? oneBitAlpha : 127;
        a = a <= threshold ? 0x00 : 0xff;
      }
      if (clearAlpha && a <= clearAlphaThreshold) {
        r = g = b = clearAlphaColor;
        a = 0x00;
      }
    }

    const color = hasAlpha ? [r, g, b, a] : [r, g, b];
    const exists = existsInPalette(palette, color);
    if (!exists) palette.push(color);
    if ((i = bins[i].fw) == 0) break;
  }

  return palette;
}

function existsInPalette(palette, color) {
  for (let i = 0; i < palette.length; i++) {
    const p = palette[i];
    let matchesRGB =
      p[0] === color[0] && p[1] === color[1] && p[2] === color[2];
    let matchesAlpha =
      p.length >= 4 && color.length >= 4 ? p[3] === color[3] : true;
    if (matchesRGB && matchesAlpha) return true;
  }
  return false;
}

// TODO: Further 'clean' palette by merging nearly-identical colors?
