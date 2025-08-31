import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import logo from "../assets/ydev.png"
import { FaSquareXTwitter, FaX, FaXTwitter } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/yash-rajvanshi/",
      icon: FaLinkedin,
      label: "LinkedIn Profile",
      ariaLabel: "Visit my LinkedIn profile"
    },
    {
      href: "https://github.com/yash-rajvanshi/",
      icon: FaGithub,
      label: "GitHub Profile",
      ariaLabel: "Visit my GitHub profile"
    },
    {
      href: "https://www.instagram.com/yashraj1shi/",
      icon: FaInstagram,
      label: "Instagram Profile",
      ariaLabel: "Visit my Instagram profile"
    },
    {
      href: "https://twitter.com/yashrajvanshi_?s=21&t=nTEE9CLSkiBUeizI3rD2FA",
      icon: FaSquareXTwitter,
      label: "X (Twitter) Profile",
      ariaLabel: "Visit my X (Twitter) profile"
    },
    {
      href: "https://leetcode.com/u/yash-rajvanshi/",
      icon: SiLeetcode,
      label: "LeetCode Profile",
      ariaLabel: "Visit my LeetCode profile"
    }
  ];

  return (
    <nav className="flex items-center justify-between py-6 relative overflow-visible" role="navigation" aria-label="Main navigation">
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
          <a href="/" aria-label="Home - Yash Rajvanshi Portfolio">
            <img src={logo} className="mx-2" width={100} height={33} alt="Yash Rajvanshi Logo"/>
          </a>
        </div>
        
        <div className="m-8 backdrop-blur-md p-1 md:p-3 flex items-center justify-center gap-4 text-2xl" role="list">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.ariaLabel}
                className="hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-full p-1"
                role="listitem"
              >
                <IconComponent aria-hidden="true" />
                <span className="sr-only">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
