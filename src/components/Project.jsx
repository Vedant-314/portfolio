import { Card, Col, Divider, Row } from "antd";
import snapwell from "../assets/snapwell.png";
import zeal from "../assets/zeal.png";
import tedx from "../assets/tedx.png";
import instagram from "../assets/instagram.png";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Project() {
  return (
    <div className="project-container" id="projects">
      <div className="project">
        <Divider>
          <h1>PROJECTS</h1>
        </Divider>
        <Row
          gutter={[
            {
              xs: 0,
              sm: 16,
              md: 24,
              lg: 32,
            },
            10,
          ]}
          wrap={true}
        >
          <Col span={6} xs={24} md={12} xl={6}>
            <Card
              title="Doctor Appointment App"
              bordered={false}
              hoverable
              cover={<img src={snapwell} />}
            >
              <div className="links">
                <div className="link">
                  <MdOutlinePhonelink size={20} />
                  <span>
                    <a
                      href="https://snapwell.onrender.com/login"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website Link
                    </a>{" "}
                  </span>
                  <FaExternalLinkAlt />
                </div>
                <div className="link">
                  <FaGithub size={20} />
                  <span>
                    <a
                      href="https://github.com/Vedant-314/SnapWell"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Link
                    </a>
                  </span>{" "}
                  <FaExternalLinkAlt />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} xs={24} md={12} xl={6}>
            <Card
              title="Instagram Clone"
              bordered={false}
              hoverable
              cover={<img src={instagram} />}
            >
              <div className="links">
                <div className="link">
                  <MdOutlinePhonelink size={20} />
                  <span>
                    <a
                      href="https://insta-clone-sepia.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website Link
                    </a>{" "}
                  </span>
                  <FaExternalLinkAlt />
                </div>
                <div className="link">
                  <FaGithub size={20} />
                  <span>
                    <a
                      href="https://github.com/Vedant-314/insta-clone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Link
                    </a>
                  </span>{" "}
                  <FaExternalLinkAlt />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} xs={24} md={12} xl={6}>
            <Card
              title="Zeal Website"
              bordered={false}
              hoverable
              cover={<img src={zeal} />}
            >
              <div className="links">
                <div className="link">
                  <MdOutlinePhonelink size={20} />
                  <span>
                    <a
                      href="https://zeal-society.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website Link
                    </a>{" "}
                  </span>
                  <FaExternalLinkAlt />
                </div>
                <div className="link">
                  <FaGithub size={20} />
                  <span>
                    <a
                      href="https://github.com/Vedant-314/nitj_zeal_site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Link
                    </a>
                  </span>{" "}
                  <FaExternalLinkAlt />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} xs={24} md={12} xl={6}>
            <Card
              title="TedX Website"
              bordered={false}
              hoverable
              cover={<img src={tedx} />}
            >
              <div className="links">
                <div className="link">
                  <MdOutlinePhonelink size={20} />
                  <span>
                    <a
                      href="https://www.tedxnitjalandhar.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website Link
                    </a>{" "}
                  </span>
                  <FaExternalLinkAlt />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="text">And Many More . . .</div>
    </div>
  );
}

export default Project;
