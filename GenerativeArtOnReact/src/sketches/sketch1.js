import { log } from "util";

const sketch1 = (p) => {
    let rotation = 0;

    p.setup = function () {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      console.log(props.param)
      if (props.param.rotation){
        rotation = props.param.rotation * Math.PI / 180;
      }
    };

    p.draw = function () {
      p.background(100);
      p.normalMaterial();
      p.noStroke();
      p.push();
      p.rotateY(rotation);
      p.box(100);
      p.pop();
    }
  }

export default sketch1