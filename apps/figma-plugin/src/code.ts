// import framerOnMessage from 'framer-sites-figma-plugin/lib/api'

figma.showUI(__html__, { width: 400, height: 653 })

// restore previous size
figma.clientStorage
  .getAsync('size')
  .then((size) => {
    if (size) figma.ui.resize(size.w, size.h)
  })
  .catch((err) => {})

figma.ui.onmessage = (msg) => {
  switch (msg.type) {
    case 'resize':
      figma.ui.resize(msg.size.w, msg.size.h)
      figma.clientStorage.setAsync('size', msg.size).catch((err) => {
        console.log('err (setAsync)', err)
      }) // save size

      break
    case 'UI_READY':
      postMessageSelection()
      postMessageUserInfo()
      postMessageEditorType()
      break
    case 'SNAPSHOT':
      let selections = figma.currentPage.selection
      if (selections.length === 0) selections = [createRect()]
      console.log('selections (SNAPSHOT)', selections)
      Promise.all(
        selections.map((selected) => replaceToNewImage(selected, msg.bytes))
      ).then(() => {
        console.log('complete')
      })
      break
    case 'SNAPSHOT_GIF':
      console.log('figma.currentUser - SNAPSHOT_GIF', figma.currentUser)

      Promise.all(
        figma.currentPage.selection.map((selected) =>
          replaceToNewImage(selected, msg.bytes)
        )
      ).then(() => {
        console.log('complete')
      })
      break
    case 'SNAPSHOT_VIDEO':
      // Convert to Uint8Array if needed (postMessage may convert it to regular object)
      let bytes = msg.bytes
      if (!(bytes instanceof Uint8Array)) {
        bytes = new Uint8Array(Object.values(bytes))
      }

      // Video is supported on Slides and Buzz
      Promise.all(
        figma.currentPage.selection.map((selected) =>
          replaceToNewVideo(selected, bytes)
        )
      ).then(() => {
        console.log('Video added to canvas')
      })
      break
  }
}

figma.on('selectionchange', postMessageSelection)

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

async function replaceToNewVideo(node, bytes: Uint8Array) {
  // For Slides/Buzz, apply video as a fill to the selected node
  // Per Figma docs: "Video objects are not nodes. Frame backgrounds, or fills of shapes may contain videos."
  try {
    // Create video media from bytes (returns a Video object with hash)
    const video = await figma.createVideoAsync(bytes)

    // Apply video as a fill to the node (similar to image fills)
    if ('fills' in node) {
      const videoFill: VideoPaint = {
        type: 'VIDEO',
        scaleMode: 'FILL',
        videoHash: video.hash,
      }
      node.fills = [videoFill]
    } else {
      console.error('Node does not support fills:', node.type)
    }
  } catch (error) {
    console.error('Error creating video:', error)
  }
}

function postMessageSelection() {
  const selection = figma.currentPage.selection
  // Get dimensions of first selected node for export resolution
  let nodeWidth = 0
  let nodeHeight = 0
  if (selection.length > 0 && 'width' in selection[0]) {
    nodeWidth = selection[0].width
    nodeHeight = selection[0].height
  }
  figma.ui.postMessage({
    type: 'SELECTION',
    selection,
    nodeWidth,
    nodeHeight,
  })
}

function postMessageUserInfo() {
  const user = figma.currentUser
  figma.ui.postMessage({ type: 'USER_INFO', user })
}

function postMessageEditorType() {
  const editorType = figma.editorType
  figma.ui.postMessage({ type: 'EDITOR_TYPE', editorType })
}

function createRect() {
  // Create a Rectangle
  const rectangle = figma.createRectangle()
  rectangle.resize(300, 200)

  // Position the Rectangle at the Center of the Current Viewport
  const viewportCenter = figma.viewport.center
  rectangle.x = viewportCenter.x - rectangle.width / 2
  rectangle.y = viewportCenter.y - rectangle.height / 2

  return rectangle
}
