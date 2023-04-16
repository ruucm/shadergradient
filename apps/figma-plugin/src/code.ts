// import framerOnMessage from 'framer-sites-figma-plugin/lib/api'

figma.showUI(__html__, { width: 450, height: 630 })

run()
async function run() {
  const ONE_DAY_IN_SECONDS = 60 * 60 * 24
  const secondsSinceFirstRun = figma.payments.getUserFirstRanSecondsAgo()
  console.log('secondsSinceFirstRun', secondsSinceFirstRun)
  const daysSinceFirstRun = secondsSinceFirstRun / ONE_DAY_IN_SECONDS
  console.log('daysSinceFirstRun', daysSinceFirstRun)
  if (daysSinceFirstRun > 3) {
    await figma.payments.initiateCheckoutAsync({
      interstitial: 'TRIAL_ENDED',
    })
    if (figma.payments.status.type === 'UNPAID') {
      figma.notify('USER CANCELLED CHECKOUT')
    } else {
      figma.notify('USER JUST PAID')
    }
  } else {
    figma.notify('USER IS IN THREE DAY TRIAL PERIOD')
  }
}

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
    case 'SNAPSHOT':
      Promise.all(
        figma.currentPage.selection.map((selected) =>
          replaceToNewImage(selected, msg.bytes)
        )
      ).then(() => {
        console.log('complete')
      })
      break
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
