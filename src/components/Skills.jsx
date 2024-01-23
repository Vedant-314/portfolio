import Slider from "react-infinite-logo-slider";
import cpp from "../assets/c++.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import bootstrap from "../assets/bootstrap.png";
import hjc from "../assets/hjc.png";
import { Divider } from "antd";

function Skills() {
  return (
    <div className="skills">
      <Divider>
        <h1>SKILLS</h1>
      </Divider>
      <Slider pauseOnHover={true} blurBorders={true}>
        <Slider.Slide>
          <img src={react} alt="" height={100} width={120} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={python} alt="" height={100} width={100} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={mongodb} height={100} width={100} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={github} height={100} width={150} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={cpp} height={100} width={100} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={nextjs} height={90} width={120} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={tailwind} height={110} width={150} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={nodejs} height={110} width={150} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={bootstrap} height={110} width={110} />
        </Slider.Slide>
        <Slider.Slide>
          <img src={hjc} height={110} width={150} />
        </Slider.Slide>
      </Slider>
    </div>
  );
}

export default Skills;
