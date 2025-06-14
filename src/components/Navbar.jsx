import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import logo from "../assets/ydev.png"
import { FaSquareXTwitter, FaX, FaXTwitter } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si";
import header from "../assets/header.jpg"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 relative overflow-visible">
  {/* Background header image with absolute positioning and full screen width */}
  <div className="absolute z-0" style={{
    left: "50%", 
    right: "50%", 
    width: "100vw", 
    height: "100%",
    marginLeft: "-50vw", 
    marginRight: "-50vw"
  }}>
    {/* <img src={header} className="w-full h-full object-cover" alt="Background"/> */}
  </div>
  
  {/* Existing content with z-index to appear above the background */}
  <div className="relative z-10 flex items-center justify-between w-full">
    <div className="flex flex-shrink-0 items-center">
      <a href="/" aria-label="Home">
        <img src={logo} className="mx-2" width={100} height={33} alt="Logo"/>
      </a>
    </div>
    <div className="m-8 backdrop-blur-md p-1 md:p-3 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/yash-rajvanshi/" target="_blank" rel="noopener noreferrer" aria-label="LinnkedIn"><FaLinkedin/></a>
      <a href="https://github.com/yash-rajvanshi/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub/></a>
      <a href="https://www.instagram.com/yashraj1shi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram/></a>
      <a href="https://twitter.com/yashrajvanshi_?s=21&t=nTEE9CLSkiBUeizI3rD2FA" target="_blank" rel="noopener noreferrer" aria-label="X"><FaSquareXTwitter/></a>
      <a href="https://leetcode.com/u/yash-rajvanshi/" target="_blank" rel="noopener noreferrer" aria-label="X"><SiLeetcode /></a>
    </div>
  </div>
</nav>
  )
}

export default Navbar
