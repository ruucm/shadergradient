const { execSync } = require('child_process')

// base from https://github.com/evanw/esbuild/issues/95#issuecomment-1059277711
exports.dtsPlugin = () => {
  return {
    name: 'TypeScriptDeclarationsPlugin',
    setup(build) {
      build.onEnd((result) => {
        if (result.errors.length > 0) return
        try {
          execSync('tsc --emitDeclarationOnly --outDir dist')
        } catch (error) {
          console.log('[tsc error]', error)
        }
      })
    },
  }
}
