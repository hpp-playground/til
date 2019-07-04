'use strict';

var tileCountX = 50;
var tileCountY = 10;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  // init with random values
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  // white back
  background(0, 0, 100);

  // limit mouse coordinates to canvas
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  // tile counter
  var counter = 0;

  // map mouse to grid resolution
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;

      // get component color values
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }

  if (key == '1') {
    for (var _i = 0; _i < tileCountX; _i++) {
      hueValues[_i] = random(360);
      saturationValues[_i] = random(100);
      brightnessValues[_i] = random(100);
    }
  }

  if (key == '2') {
    for (var _i2 = 0; _i2 < tileCountX; _i2++) {
      hueValues[_i2] = random(360);
      saturationValues[_i2] = random(100);
      brightnessValues[_i2] = 100;
    }
  }

  if (key == '3') {
    for (var _i3 = 0; _i3 < tileCountX; _i3++) {
      hueValues[_i3] = random(360);
      saturationValues[_i3] = 100;
      brightnessValues[_i3] = random(100);
    }
  }

  if (key == '4') {
    for (var _i4 = 0; _i4 < tileCountX; _i4++) {
      hueValues[_i4] = 0;
      saturationValues[_i4] = 0;
      brightnessValues[_i4] = random(100);
    }
  }

  if (key == '5') {
    for (var _i5 = 0; _i5 < tileCountX; _i5++) {
      hueValues[_i5] = 195;
      saturationValues[_i5] = 100;
      brightnessValues[_i5] = random(100);
    }
  }

  if (key == '6') {
    for (var _i6 = 0; _i6 < tileCountX; _i6++) {
      hueValues[_i6] = 195;
      saturationValues[_i6] = random(100);
      brightnessValues[_i6] = 100;
    }
  }

  if (key == '7') {
    for (var _i7 = 0; _i7 < tileCountX; _i7++) {
      hueValues[_i7] = random(180);
      saturationValues[_i7] = random(80, 100);
      brightnessValues[_i7] = random(50, 90);
    }
  }

  if (key == '8') {
    for (var _i8 = 0; _i8 < tileCountX; _i8++) {
      hueValues[_i8] = random(180, 360);
      saturationValues[_i8] = random(80, 100);
      brightnessValues[_i8] = random(50, 90);
    }
  }

  if (key == '9') {
    for (var _i9 = 0; _i9 < tileCountX; _i9++) {
      if (_i9 % 2 == 0) {
        hueValues[_i9] = random(360);
        saturationValues[_i9] = 100;
        brightnessValues[_i9] = random(100);
      } else {
        hueValues[_i9] = 195;
        saturationValues[_i9] = random(100);
        brightnessValues[_i9] = 100;
      }
    }
  }

  if (key == '0') {
    for (var _i10 = 0; _i10 < tileCountX; _i10++) {
      if (_i10 % 2 == 0) {
        hueValues[_i10] = 140;
        saturationValues[_i10] = random(30, 100);
        brightnessValues[_i10] = random(40, 100);
      } else {
        hueValues[_i10] = 210;
        saturationValues[_i10] = random(40, 100);
        brightnessValues[_i10] = random(50, 100);
      }
    }
  }
}
