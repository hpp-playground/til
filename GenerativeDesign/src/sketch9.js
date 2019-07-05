'use strict'


let tileCount = 20
let actRandomSeed = 0

let actStrokeCap

const circleResolution = 360
let angle = 0
let d = 6.28 / circleResolution

const setup = () => {
  createCanvas(windowWidth, windowHeight)
  actStrokeCap = ROUND
}

const draw = () => {
  clear()
  strokeCap(actStrokeCap)
  randomSeed(actRandomSeed)

  if (angle > PI || angle < 0) {
      d *= -1
  }
  angle += d

  console.log(angle)

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {

      const posX = width / tileCount * gridX;
      const posY = height / tileCount * gridY;

      const toggle = int(random(0, 2));

      if (!toggle) {
        strokeWeight((windowWidth/2)*sin(angle) / 20);
        line(posX, posY, posX + width / tileCount, posY + height / tileCount);
      }
      if (toggle) {
        strokeWeight((windowHeight/2)*sin(angle) / 20);
        line(posX, posY + width / tileCount, posX + height / tileCount, posY);
      }
    }
  }
}

const mousePressed = () => {
  actRandomSeed = random(100000);
}

const keyReleased = () => {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}
