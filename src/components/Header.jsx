import Logo from "../assets/icon.png"
import {PhoneOutlined} from "@ant-design/icons"


function Header() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left">
          <img src={Logo} alt="" />
        </div>
        <div className="middle">
          <ul>
            <li>Home</li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        <div className="right">
          <PhoneOutlined/>
          <span>+91 86992-25921</span>
        </div>
      </div>
    </div>
     
  )
}

export default Header