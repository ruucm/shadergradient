// Source taken and modified from:
// https://github.com/indooorsman/esbuild-css-modules-plugin/blob/master/index.js

const crypto = require('crypto')
const path = require('path')
const util = require('util')
const fs = require('fs-extra')
const sass = require('node-sass')
const postcss = require('postcss')
const cssModules = require('postcss-modules')
const tmp = require('tmp')
const hash = crypto.createHash('sha256')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const ensureDir = util.promisify(fs.ensureDir)
const pluginNamespace = 'esbuild-css-modules-plugin-namespace'

const buildCssModulesJS = async (scssFullPath, options) => {
  const {
    localsConvention = 'camelCaseOnly',
    inject = true,
    generateScopedName,
  } = options

  const { css } = sass.renderSync({ file: scssFullPath })

  let cssModulesJSON = {}
  const result = await postcss([
    cssModules({
      localsConvention,
      generateScopedName,
      getJSON(cssSourceFile, json) {
        cssModulesJSON = { ...json }
        return cssModulesJSON
      },
    }),
  ]).process(css, {
    from: undefined,
    map: false,
  })

  const classNames = JSON.stringify(cssModulesJSON)
  hash.update(scssFullPath)
  const digest = hash.copy().digest('hex')
  return `
const digest = '${digest}';
const css = \`${result.css}\`;
${
  inject &&
  `
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement('style');
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
`
}
export default ${classNames};
export { css, digest };
  `
}

exports.cssPlugin = (options = {}) => {
  return {
    name: 'esbuild-css-modules-plugin',
    setup(build) {
      const rootDir = process.cwd()
      const tmpDirPath = tmp.dirSync().name
      const { outdir, bundle } = build.initialOptions

      build.onResolve(
        { filter: /\.modules?\.scss$/, namespace: 'file' },
        async (args) => {
          const sourceFullPath = path.resolve(args.resolveDir, args.path)

          const sourceExt = path.extname(sourceFullPath)
          const sourceBaseName = path.basename(sourceFullPath, sourceExt)
          const sourceDir = path.dirname(sourceFullPath)
          const sourceRelDir = path.relative(path.dirname(rootDir), sourceDir)

          const tmpDir = path.resolve(tmpDirPath, sourceRelDir)
          await ensureDir(tmpDir)
          const tmpFilePath = path.resolve(tmpDir, `${sourceBaseName}.css`)

          const jsContent = await buildCssModulesJS(sourceFullPath, options)

          await writeFile(`${tmpFilePath}.js`, jsContent)

          if (outdir && !bundle) {
            const isOutdirAbsolute = path.isAbsolute(outdir)
            const absoluteOutdir = isOutdirAbsolute
              ? outdir
              : path.resolve(args.resolveDir, outdir)
            const isEntryAbsolute = path.isAbsolute(args.path)
            const entryRelDir = isEntryAbsolute
              ? path.dirname(path.relative(args.resolveDir, args.path))
              : path.dirname(args.path)

            const targetSubpath =
              absoluteOutdir.indexOf(entryRelDir) === -1
                ? path.join(entryRelDir, `${sourceBaseName}.css.js`)
                : `${sourceBaseName}.css.js`
            const target = path.resolve(outdir, targetSubpath)

            fs.ensureDirSync(path.dirname(target))
            fs.copyFileSync(`${tmpFilePath}.js`, target)

            // console.log('[esbuild-css-modules-plugin]', path.relative(rootDir, sourceFullPath), '=>', path.relative(rootDir, target));
          }

          if (!bundle) {
            return { path: sourceFullPath, namespace: 'file' }
          }

          return {
            path: `${tmpFilePath}.js`,
            namespace: pluginNamespace,
            pluginData: {
              content: jsContent,
              resolveArgs: {
                path: args.path,
                importer: args.importer,
                namespace: args.namespace,
                resolveDir: args.resolveDir,
                kind: args.kind,
              },
            },
          }
        }
      )

      build.onLoad(
        { filter: /\.modules?\.css\.js$/, namespace: pluginNamespace },
        (args) => {
          // const { path: resolvePath, importer } = args.pluginData.resolveArgs;
          // const importerName = path.basename(importer);
          // console.log('[esbuild-css-modules-plugin]', `${resolvePath} => ${resolvePath}.js => ${importerName}`);
          return { contents: args.pluginData.content, loader: 'js' }
        }
      )
    },
  }
}
