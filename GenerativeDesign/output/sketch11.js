'use strict';var tileCount=20;var actRandomSeed=0;var circleAlpha=130;var circleColor=void 0;var setup=function setup(){createCanvas(windowWidth,windowHeight);noFill();circleColor=color(0,0,0,circleAlpha);};var draw=function draw(){translate(width/tileCount/2,height/tileCount/2);background(255);randomSeed(actRandomSeed);stroke(circleColor);strokeWeight(mouseY/100);for(var gridY=0;gridY<tileCount;gridY++){for(var gridX=0;gridX<tileCount;gridX++){var posX=width/tileCount*gridX;var posY=height/tileCount*gridY;var shiftX=random(-gridX,gridX)/2;var shiftY=random(-gridX,gridX)/2;ellipse(posX+shiftX,posY+shiftY,mouseY/15,mouseY/15);}}};var mousePressed=function mousePressed(){actRandomSeed=random(100000);};var keyReleased=function keyReleased(){if(key=='s'||key=='S')saveCanvas(gd.timestamp(),'png');};