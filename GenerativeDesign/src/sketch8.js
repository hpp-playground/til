'use strict';

const setup = () => {
  createCanvas(windowWidth, windowHeight);
  strokeCap(SQUARE);
}

const draw = () => {
    background(255)
    translate(width/2, height/2)

    const circleResolution = map(mouseY, 0, height, 2, 80)
    const radius = mouseX - width/2 + 0.5
    const angle = TWO_PI / circleResolution

    strokeWeight(mouseY/60)

    beginShape()

    for (let i=0; i <= circleResolution; i++) {
        const x = cos(angle*i) * radius
        const y = sin(angle*i) * radius

        line(0, 0, x, y)
        line(windowWidth/2, windowHeight/2, x, y)
        line(-windowWidth/2, -windowHeight/2, x, y)
        //vertex(x,y)
    }

    endShape(CLOSE)
}