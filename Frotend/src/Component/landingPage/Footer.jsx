import "../../App.css";
import { TiHomeOutline } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className='container-fluid footer'>
        <div className='row'>
          <div className='col-sm-3 fLogo'>
            <div className='logo footerLogo'>
              <div className='image'>
                <TiHomeOutline />
                <h1>Quirex</h1>
              </div>
              <div className='fTxt'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat repellat repellendus dolore placeat beatae.
                </p>
                <div className='fLoc fIcons'>
                  <p>
                    <FaLocationDot />
                  </p>
                  Lucknow, Uttar Pradesh, India
                </div>
                <div className='phone fIcons'>
                  <p>
                    <FaPhoneAlt />
                  </p>
                  7905792558
                </div>
                <div className='email fIcons'>
                  <p>
                    <MdEmail />
                  </p>
                  vaman7409@gmail.com
                </div>
                <p></p>
                <div className='fSocail'>
                  <p>
                    <FaFacebookF />
                  </p>
                  <p>
                    <FaTwitter />
                  </p>
                  <p>
                    <FaLinkedin />
                  </p>
                  <p>
                    <FaGithub />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-2 fCompany'>
            <ul>
              <h5>Services</h5>
              <li>Order tracking</li>
              <li>Wish List</li>
              <li>Login</li>
              <li>My account</li>
              <li>Term & Condition</li>
              <li>Promotional Offers</li>
            </ul>
          </div>
          <div className='col-sm-2 fCompany'>
            <ul>
              <h5>Customer Care</h5>
              <li>Login</li>
              <li>My account</li>
              <li>Wish List</li>
              <li>Order tracking</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='col-sm-2 fCompany'>
            <ul>
              <h5>Company</h5>
              <li>About</li>
              <li>Blog</li>
              <li>All Products</li>
              <li>Location Map</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='col-sm-3 newsletter'>
            <h5>Newsletter</h5>
            <p>
              Subscribe to our weekly Newsletter and receive update via email.
            </p>
            <div className='input-group fEmail'>
              <input
                type='text'
                className='form-control'
                aria-label='Dollar amount (with dot and two decimal places)'
                placeholder='Email'
              />
              <span className='input-group-text sendBtn'>
                <FaTelegramPlane />
              </span>
            </div>
            <h5>We Accept</h5>
            <div className='payment'>
              <img src='/img/payment-4.png' />
            </div>
          </div>
        </div>
      </div>
      <div className='fLower'>
        <div>
          All Rights Reserved @ Company 2025
        </div>
        <div className="fTerms">
          <p>Terms & Conditions</p>
          <p>Claim</p>
          <p>Privacy & Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
