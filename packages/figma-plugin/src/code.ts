/// <reference path="../../../node_modules/@figma/plugin-typings/index.d.ts" />

figma.showUI(__html__, { width: 453, height: 842 })

figma.ui.onmessage = (msg) => {
  const { type } = msg
  console.log('msg type', type)
  if (type === 'CANVAS_TO_IMAGE') {
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
