"use strict";

var stepX;
var stepY;

function setup() {
    createCanvas(1200, 800);
    noStroke();
    colorMode(HSB, width, height, 100);
}

function draw() {
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            fill(gridX, height - gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}
