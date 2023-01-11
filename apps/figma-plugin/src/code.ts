// import framerOnMessage from 'framer-sites-figma-plugin/lib/api'

figma.showUI(__html__, { width: 450, height: 837 })

figma.ui.onmessage = (msg) => {
  // framerOnMessage(msg)
  const { type } = msg
  console.log('msg type', type)
  if (type === 'SNAPSHOT') {
    Promise.all(
      figma.currentPage.selection.map((selected) =>
        replaceToNewImage(selected, msg.bytes)
      )
    ).then(() => {
      console.log('complete')
    })
  }
}

async function invertPaint(paint, bytes) {
  if (paint.type === 'IMAGE') {
    const newPaint = JSON.parse(JSON.stringify(paint))
    newPaint.imageHash = figma.createImage(bytes).hash
    return newPaint
  } else {
    // overwrite other types of paint (eg. SOLID)
    const newPaint: ImagePaint = {
      type: 'IMAGE',
      scaleMode: 'FILL', // or FIT
      imageHash: figma.createImage(bytes).hash,
    }
    return newPaint
  }
}

async function replaceToNewImage(node, bytes) {
  const newFills = []
  for (const paint of node.fills) {
    newFills.push(await invertPaint(paint, bytes))
  }
  node.fills = newFills
}
