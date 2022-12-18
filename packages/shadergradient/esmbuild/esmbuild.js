const fs = require("fs");
const http = require("http");
const https = require("https");
const { join, resolve } = require("path");
const esbuild = require("esbuild");
const { glsl } = require("esbuild-plugin-glsl");
const globby = require("globby");
const { Server: SocketIO } = require("socket.io");
const { cssPlugin } = require("./plugin.css");
const { esmPlugin } = require("./plugin.esm");

const color = (n, v) => `\x1b[${n}m${v}\x1b[0m`;
const defaultPath = join(process.cwd(), "src");
const defaultOutdir = join(process.cwd(), "dist");

async function getBuildOptions(path) {
  const entryPoints = await globby([`${path}/**/*.(t|j|cs)s*`]);

  console.log("entryPoints", entryPoints);

  return {
    // entryPoints,
    entryPoints: [`${defaultPath}/index.tsx`],
    minify: true,
    format: "esm",
    bundle: true,
    external: [
      "react",
      "react/jsx-runtime",
      "react-dom",
      "framer",
      "framer-motion",
    ],
    // plugins: [esmPlugin, cssPlugin({ inject: true }), glsl({ minify: true })],
  };
}

async function build(path = defaultPath, outdir = defaultOutdir) {
  outdir = resolve(outdir);
  await esbuild.build({
    outdir,
    ...(await getBuildOptions(path)),
  });
  console.log(`Build done at ${outdir}`);
}

async function serve(path = defaultPath, port = 8000) {
  function onRequest(info) {
    const status = color(
      info.status.toString().startsWith("2") ? 32 : 31,
      info.status
    );
    const line = color(
      37,
      `${info.method} ${status} ${info.path} [${info.timeInMS}ms]`
    );
    console.log(line);
  }

  const socketServer = http.createServer();
  const io = new SocketIO(socketServer, {
    cors: {
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE", "HEAD"],
    },
  });
  socketServer.listen(8002, "0.0.0.0");

  const result = await esbuild.serve(
    { port, onRequest },
    await getBuildOptions(path)
  );
  console.log("result", result);

  /**
   * onEnd isn't being triggered when serving (https://github.com/evanw/esbuild/issues/1384) so we need to setup a regular build to get a callback whenever a build is completed
   */
  await esbuild.build({
    outdir: resolve(defaultOutdir),
    ...(await getBuildOptions(path)),
    watch: {
      onRebuild(error, result) {
        io.emit("build");
      },
    },
  });

  // behavior customized by putting a proxy in front of esbuild (HTTPS supports)
  // https://esbuild.github.io/api/#customizing-server-behavior
  // https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/
  const options = {
    key: fs.readFileSync(resolve(__dirname, "key.pem")),
    cert: fs.readFileSync(resolve(__dirname, "cert.pem")),
  };

  https
    .createServer(options, function (req, res) {
      const options = {
        hostname: result.host,
        port: result.port,
        path: req.url,
        method: req.method,
        headers: req.headers,
      };

      // Forward each incoming request to esbuild
      const proxyReq = http.request(options, (proxyRes) => {
        // If esbuild returns "not found", send a custom 404 page
        if (proxyRes.statusCode === 404) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>No esbuil module found 404</h1>");
          return;
        }

        // Otherwise, forward the response from esbuild to the client
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      });

      // Forward the body of the request to esbuild
      req.pipe(proxyReq, { end: true });
    })
    .listen(port);

  console.log(`Server listening at https://localhost:${port}`);
  console.log(`Socket server listening at http://127.0.0.1:8002`);
}

let [a, b, command, path, option] = process.argv;

path = path && resolve(join(process.cwd(), path));

if (command === "serve") {
  console.log("path", path);
  serve(path, option && parseInt(option));
  // serve('/Users/ruucm/Desktop/lerna-next-js/packages', option && parseInt(option))
} else if (command === "build") {
  build(path, option && resolve(join(process.cwd(), option)));
} else {
  console.log(`Usage:\n  $ esbuild serve src 8000\n  $ esbuild build src dist`);
}
