let segmentCount = 360
const radius = 300

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
    colorMode(HSB, 360, width, height)
    background(360, 0, height)

    const angleStep = 360/segmentCount

    beginShape(TRIANGLE_FAN)
    vertex(width/2, height/2)

    for (let angle=0; angle<=360; angle+=angleStep) {
        const vx = width/2 + cos(radians(angle)) * radius
        const vy = height/2 + sin(radians(angle)) * radius

        vertex(vx, vy)
        fill(angle, mouseX, mouseY)
    }
    endShape()
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    console.log(key)
    switch (key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 120;
      break;
    case '3':
      segmentCount = 60;
      break;
    case '4':
      segmentCount = 30;
      break;
    case '5':
      segmentCount = 24;
      break;
    case '6':
        segmentCount = 10
        break
    case '7':
        segmentCount = 6
        break
    case '8':
        segmentCount = 3
        break
    }
  }