import framerOnMessage from 'framer-sites-figma-plugin/lib/api'

figma.showUI(__html__, { width: 453, height: 832 })

figma.ui.onmessage = (msg) => {
  framerOnMessage(msg)
}
