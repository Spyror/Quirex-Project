import '../../App.css';
import { Link } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const TopNavBar = () => {
  return (
    <>
    <div className='topNav container-fluid'>
        <div className="contact">
          <div className="email">
            <span><MdOutlineMail /></span>a7409@gmail.com
          </div>
          <div className="location">
            <span><CiLocationOn /></span>Lucknow, Uttar Pradesh, India
          </div>
        </div>
        <div className="rightBox">
          <div className="socials">
        <div><Link to={"https://www.facebook.com/"}><FaFacebookF/></Link></div>
        <div><Link to={"https://x.com/AmanVer58935173"}><FaTwitter/></Link></div>
        <div><Link to={"https://www.instagram.com/aman___verma11/?hl=en"}><FaInstagram/></Link></div>
        <div><Link to={"https://wa.me/7905792557?text=Hi, I want to buy some new Property."}><FaWhatsapp/></Link></div>
        </div>
        <div className="addList">Add Listing</div>
        </div>
    </div>
    </>
  )
}

export default TopNavBar