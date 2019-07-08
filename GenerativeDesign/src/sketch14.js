
'use strict'

let img
let img1
let img2
let img3
let slider
let cols = 25
let rows = 25
let boxes
let boxHolder

// preload the images to be used for the checkboxes
const preload = () => {
  img1 = loadImage('https://images.unsplash.com/photo-1517916358207-1e49f666e851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
  img2 = loadImage('https://images.unsplash.com/photo-1496203695688-3b8985780d6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')
  img3 = loadImage('https://images.unsplash.com/photo-1553194151-f90c18c1d322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')
}

const setup = () => {
  noCanvas()
  pixelDensity(1)
  boxHolder = createDiv('')
  boxHolder.id('mirror')

  boxes = []

  img = img1
  img.resize(cols, rows)
  img.loadPixels()

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const box = createCheckbox()
      box.style('display', 'inline')
      box.parent('mirror')
      boxes.push(box)
    }
    const linebreak = createSpan('<br/>')
    linebreak.parent('mirror')
  }

  slider = createSlider(0, 255, 0)
}

const draw = () => {
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.height; x++) {
      const c = color(img.get(x, y))
      const bright = (red(c) + green(c) + blue(c)) / 3

      // get the threshold from the slider
      const threshold = slider.value()

      const checkIndex = x + y * cols

      if (bright > threshold) {
        boxes[checkIndex].checked(false)
      } else {
        boxes[checkIndex].checked(true)
      }
    }
  }
}

const keyPressed = () => {
  if (key == '1') img = img1
  if (key == '2') img = img2
  if (key == '3') img = img3

  img.resize(cols, rows)
  img.loadPixels()
}
