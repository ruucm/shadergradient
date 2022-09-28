const { extname } = require('path')

exports.esmPlugin = {
  name: 'esm',
  setup(build) {
    build.onResolve({ filter: /.*/ }, (args) => {
      const hasExtension = extname(args.path)
      const isNode = args.importer.includes('node_modules')
      const isLocal = args.path.startsWith('./') || args.path.startsWith('../')

      // Rewrite all imports that don't have an extension (we assume it's code)
      if (
        args.importer &&
        // This should not be a local node_modules import
        !isNode &&
        // This should be a local path (starting with ./ or ../)
        isLocal &&
        // This should be an import without an extension ("./file")
        !hasExtension
      ) {
        // Rewrite the imports to include the extension and make external to avoid bundling
        return { path: `${args.path}.js`, external: true }
      }
    })
  },
}
