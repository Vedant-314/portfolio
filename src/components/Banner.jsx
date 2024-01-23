import { FileOutlined, MailOutlined } from "@ant-design/icons";
import { SiCodechef, SiLeetcode } from "react-icons/si";

import Fade from "react-reveal/Fade";
import banner from "../assets/banner.png";
function Banner() {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-left">
          <Fade left>
            <a href="mailto:vedanttaak7@gmail.com">
              <MailOutlined /> vedanttaak7@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/1WNTcjYK04BMiQqKduxPzr3uNBNCKp498/view?usp=sharing">
              <FileOutlined /> Resume
            </a>
          </Fade>
        </div>
        <div className="banner-mid">
          <Fade>
            <img src={banner} alt="" />
          </Fade>
        </div>
        <div className="banner-right">
          <Fade right>
            <a href="https://www.codechef.com/users/vedant_taak">
              <SiCodechef size={25} /> 3* codechef
            </a>
            <a href="https://leetcode.com/vedanttaak/">
              <SiLeetcode size={25} /> 300+ Leetcode
            </a>
          </Fade>
        </div>
        <div className="banner-mini">
          <div className="mini-left">
            <Fade left>
              <a href="mailto:vedanttaak7@gmail.com">
                <MailOutlined /> vedanttaak7@gmail.com
              </a>
              <a
                href="https://drive.google.com/file/d/1WNTcjYK04BMiQqKduxPzr3uNBNCKp498/view?usp=sharing">
                <FileOutlined /> Resume
              </a>
            </Fade>
          </div>
          <div className="mini-right">
            <Fade right>
              <a href="https://www.codechef.com/users/vedant_taak">
                <SiCodechef size={25} /> 3* codechef
              </a>
              <a href="https://leetcode.com/vedanttaak/">
                <SiLeetcode size={25} /> 300+ Leetcode
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
