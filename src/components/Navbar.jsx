import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import logo from "../assets/iyr.png"
import { FaSquareXTwitter, FaX, FaXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/></a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/yash-rajvanshi/" target="_blank" rel="noopener noreferrer" aria-label="LinnkedIn"><FaLinkedin/></a>
            <a href="https://github.com/yash-rajvanshi/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub/></a>
            <a href="https://www.instagram.com/yashraj1shi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram/></a>
            <a href="https://twitter.com/yashrajvanshi_?s=21&t=nTEE9CLSkiBUeizI3rD2FA" target="_blank" rel="noopener noreferrer" aria-label="X"><FaSquareXTwitter/></a> 
        </div>
    </nav>
  )
}

export default Navbar
