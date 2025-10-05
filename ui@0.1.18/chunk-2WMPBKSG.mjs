// src/overrides/FigmaPlugin/lib/stream.js
function createStream(initialCapacity = 256) {
  let cursor = 0;
  let contents = new Uint8Array(initialCapacity);
  return {
    get buffer() {
      return contents.buffer;
    },
    reset() {
      cursor = 0;
    },
    bytesView() {
      return contents.subarray(0, cursor);
    },
    bytes() {
      return contents.slice(0, cursor);
    },
    writeByte(byte) {
      expand(cursor + 1);
      contents[cursor] = byte;
      cursor++;
    },
    writeBytes(data, offset = 0, byteLength = data.length) {
      expand(cursor + byteLength);
      for (let i = 0; i < byteLength; i++) {
        contents[cursor++] = data[i + offset];
      }
    },
    writeBytesView(data, offset = 0, byteLength = data.byteLength) {
      expand(cursor + byteLength);
      contents.set(data.subarray(offset, offset + byteLength), cursor);
      cursor += byteLength;
    }
  };
  function expand(newCapacity) {
    var prevCapacity = contents.length;
    if (prevCapacity >= newCapacity) return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(
      newCapacity,
      prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0
    );
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    const oldContents = contents;
    contents = new Uint8Array(newCapacity);
    if (cursor > 0) contents.set(oldContents.subarray(0, cursor), 0);
  }
}

export {
  createStream
};
