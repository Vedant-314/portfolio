import { Card, Col, Divider, Row } from "antd";
import { FaCode } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about">
        <Divider>
          <h1>ABOUT ME</h1>
        </Divider>
        <Row>
          <Col span={11} sm={24} xs={24} md={12} className="dividers">
            <Card className="cards">
              <Fade big>
                <div className="card-container">
                  <div className="card">
                    <FaCode size={35} /> 600+ Questions Solved
                  </div>
                  <div className="card">
                    <FaComputer size={35} /> 10+ Projects
                  </div>
                  <div className="card">
                    <RiGraduationCapLine size={35} /> 8.79 CGPA
                  </div>
                </div>
              </Fade>
            </Card>
          </Col>
          <Col
            span={11}
            sm={24}
            xs={24}
            md={12}
            className="dividers"
            offset={0}
          >
            <Card className="cards">
              <Fade big>
                <p>
                  I&apos;m in the penultimate year of my computer science and
                  engineering program at NIT Jalandhar, fueled by a fervor for
                  full-stack development and competitive programming
                </p>
                <br></br>
                <p>
                  My journey includes active involvement in various live
                  projects, where I&apos;ve harnessed the power of cutting-edge
                  technologies such as Next.js, Tailwind CSS, NodeJS, MongoDB
                  and many more.
                </p>
              </Fade>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutMe;
