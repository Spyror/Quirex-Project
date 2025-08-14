import "../../App.css";
import { MdHome } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <>
      <div className='container-fluid slider'>
        <div className='row hero'>
          <div className='col-sm-6 txtBox'>
            <div>
              <div className='littleHead'>
                <span>
                  <MdHome />
                </span>
                <p>Real Estate Agency</p>
              </div>
              <h1 className='heroHead'>
                <Typewriter
                  options={{
                    strings: ["Find Your Dream House By Us"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <p className='desc'>
                 Find your perfect space with Quirex —  From cozy corners to luxury homes
              </p>
              <div className='btns'>
                <div className='enqBtn'><Link className="text-light" to={'/contact'}>Make An Enquiry</Link></div>
                <div className='playBtn'>
                  <FaPlay />
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 heroImg'>
            <img src='/img/slider.png' className='img-fluid' />
          </div>
        </div>
      </div>
      {/* <div className="row slider bg-secondary">
    <div className="col-sm-6 sliderdiv">
      <p>Real Estate Agency</p>
      <h1>Find your Dream </h1>
      <h1>House by Us</h1>
      <p className='sliderp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate <br />architecto, autem quidem porro ipsumab</p>
      <a className='btn btn-danger'>Make an Enquiry</a>
    </div>
    <div className="col-sm-6">
      <img src="/img/slider.png" className='img-fluid sliderImg w-75 pt-5'/>
    </div>
  </div> */}
    </>
  );
};

export default Slider;
