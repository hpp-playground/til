'use strict';var colorCount=20;var hueValues=[];var saturationValues=[];var brightnessValues=[];var actRandomSeed=0;var alphaValue=75;var setup=function setup(){createCanvas(windowWidth,windowHeight);colorMode(HSB,360,100,100,100);noStroke();};var draw=function draw(){noLoop();background(0);randomSeed(actRandomSeed);// ------ colors ------
// create palette
for(var i=0;i<colorCount;i++){if(i%2==0){hueValues[i]=random(360);saturationValues[i]=100;brightnessValues[i]=random(100);}else{hueValues[i]=195;saturationValues[i]=random(100);brightnessValues[i]=100;}}var counter=0;var rowCount=int(random(5,30));var rowHeight=height/rowCount;// seperate each line in parts
for(var _i=rowCount;_i>=0;_i--){// how many fragments
var partCount=_i+1;var parts=[];for(var j=0;j<partCount;j++){// sub fragments or not?
if(random()<0.075){// take care of big values
var fragments=int(random(2,20));partCount+=fragments;for(var k=0;k<fragments;k++){parts.push(random(2));}}else{parts.push(random(2,20));}}// add all subparts
var sumPartsTotal=0;for(var _j=0;_j<partCount;_j++){sumPartsTotal+=parts[_j];}// draw rects
var sumPartsNow=0;for(var _j2=0;_j2<parts.length;_j2++){sumPartsNow+=parts[_j2];var x=map(sumPartsNow,0,sumPartsTotal,0,width);var y=rowHeight*_i;var w=-map(parts[_j2],0,sumPartsTotal,0,width);var h=rowHeight*1.5;var index=counter%colorCount;var col1=color(0);var col2=color(hueValues[index],saturationValues[index],brightnessValues[index],alphaValue);gradient(x,y,w,h,col1,col2);counter++;}}};var gradient=function gradient(x,y,w,h,c1,c2){var ctx=drawingContext;// global canvas context p5.js let
var grd=ctx.createLinearGradient(x,y,x,y+h);grd.addColorStop(0,c1.toString());grd.addColorStop(1,c2.toString());ctx.fillStyle=grd;ctx.fillRect(x,y,w,h);};var mouseReleased=function mouseReleased(){actRandomSeed=random(100000);loop();};var keyPressed=function keyPressed(){if(key=='s'||key=='S')saveCanvas(gd.timestamp(),'png');if(key=='c'||key=='C'){// -- save an ase file (adobe swatch export) --
var colors=[];for(var i=0;i<hueValues.length;i++){colors.push(color(hueValues[i],saturationValues[i],brightnessValues[i]));}writeFile([gd.ase.encode(colors)],gd.timestamp(),'ase');}};