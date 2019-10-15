'use strict'

let tileCount = 20
let actRandomSeed = 0

let circleAlpha = 130
let circleColor

const setup = () => {
  createCanvas(windowWidth, windowHeight)
  noFill()
  circleColor = color(0, 0, 0, circleAlpha)
}

const draw = () => {
  translate(width/tileCount/2, height/tileCount/2)

  background(255)
  randomSeed(actRandomSeed)

  stroke(circleColor)
  strokeWeight(mouseY/100)

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {

      const posX = width / tileCount * gridX
      const posY = height / tileCount * gridY

      const shiftX = random(-gridX, gridX) / 2
      const shiftY = random(-gridX, gridX) / 2

      ellipse(posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15)
    }
  }
}

const mousePressed = () => {
  actRandomSeed = random(100000)
}

const keyReleased = () => {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png')
}
