import { FaGithub, FaLinkedin, FaMobile, FaRegUser, FaSchool } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";




function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="fleft">
        <div className="title">Contact Details</div>
        <div className="content">
          <ul>
            <li><FaRegUser/> Vedant Taak</li>
            <li><FaMobile/> +91 86992-25921</li>
            <li><MdOutlineMailOutline/><a href="mailto:vedanttaak7@gmail.com" target="_blank" rel="noreferrer"> vedanttaak7@gmail.com</a></li>
            <li><FaLinkedin/> <a href="https://www.linkedin.com/in/vedanttaak/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><FaGithub/> <a href="https://github.com/Vedant-314/" target="_blank" rel="noreferrer" >Github</a></li>
          </ul>
        </div>
      </div>
      <div className="fmid">
        <div className="title">College Details</div>
        <div className="content">
          <ul>
            <li><FaSchool/> DR B.R. Ambedkar National Institute of Technology, Jalandhar</li>
            <li><SlCalender/> Bachelors in Computer Science and Engineering (2021 - 25)</li>
            <li><GrScorecard/> CGPA: 8.79</li>
          </ul>
        </div>
      </div>
      <div className="fright">
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6443287364405!2d75.53240517533085!3d31.39636922427099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1705743166784!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Footer