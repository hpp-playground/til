'use strict';

let colorCount = 20;
let hueValues = [];
let saturationValues = [];
let brightnessValues = [];
let actRandomSeed = 0;
let alphaValue = 75;

let setup = () => {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

let draw = () => {
  noLoop();
  background(0);
  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  for (let i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }


  let counter = 0;
  const rowCount = int(random(5, 30));
  const rowHeight = height / rowCount;

  // seperate each line in parts
  for (let i = rowCount; i >= 0; i--) {
    // how many fragments
    let partCount = i + 1;
    let parts = [];

    for (let j = 0; j < partCount; j++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        const fragments = int(random(2, 20));
        partCount += fragments;
        for (let k = 0; k < fragments; k++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    let sumPartsTotal = 0;
    for (let j = 0; j < partCount; j++) {
      sumPartsTotal += parts[j];
    }

    // draw rects
    let sumPartsNow = 0;
    for (let j = 0; j < parts.length; j++) {
      sumPartsNow += parts[j];

      const x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      const y = rowHeight * i;
      const w = -map(parts[j], 0, sumPartsTotal, 0, width);
      const h = rowHeight * 1.5;

      const index = counter % colorCount;
      const col1 = color(0);
      const col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
      gradient(x, y, w, h, col1, col2);

      counter++;
    }
  }
}

let gradient = (x, y, w, h, c1, c2) => {
  let ctx = drawingContext; // global canvas context p5.js let
  let grd = ctx.createLinearGradient(x, y, x, y + h);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
  ctx.fillStyle = grd;
  ctx.fillRect(x, y, w, h);
}

let mouseReleased = () => {
  actRandomSeed = random(100000);
  loop();
}

let keyPressed = () => {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    let colors = [];
    for (let i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}
