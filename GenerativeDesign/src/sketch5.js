'use strict'

let img;
let colors = [];
let sortMode = null;

const image_URL = [
    "https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1756&q=80",
    "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1557474295-714ea5fc2557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
]

function preload() {
  loadImage(image_URL[0], setImage)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
}

function draw() {
  const tileCount = floor(width / max(mouseX, 5))
  const rectSizeW = width / tileCount
  const rectSizeH = height / tileCount

  img.loadPixels();
  colors = [];

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      const px = int(gridX * rectSizeW);
      const py = int(gridY * rectSizeH);
      const i = (py * img.width + px) * 4;
      const c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  gd.sortColors(colors, sortMode);

  let i = 0;
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSizeW, gridY * rectSizeH, rectSizeW, rectSizeH);
      i++;
    }
  }
}

function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '0') loadImage(image_URL[0], setImage)
  if (key == '1') loadImage(image_URL[1], setImage)
  if (key == '2') loadImage(image_URL[2], setImage)
  if (key == '3') loadImage(image_URL[3], setImage)
  if (key == '4') loadImage(image_URL[4], setImage)

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}

function setImage(loadedImageFile) {
  img = loadedImageFile
  img.resize(windowWidth, windowHeight)
}
