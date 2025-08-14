import "../../App.css";
import { FaCar } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { PiSecurityCameraDuotone } from "react-icons/pi";
import { CiStethoscope } from "react-icons/ci";
import { IoLibrary } from "react-icons/io5";
import { MdKingBed } from "react-icons/md";
import { TbHomeHeart } from "react-icons/tb";
import { GiTreeSwing } from "react-icons/gi";
const OurAnimities = () => {
  return (
    <>
      <div className='container-fluid service'>
        <div className='sHead'>Our Aminities</div>
        <div>
          <h1>Building Aminities</h1>
        </div>
        <div className='aminiBox row'>
          <div className="col-3 aminiCard card" data-aos="flip-left" data-aos-duration="1000">
            <div className="aminiIcon">
              <FaCar />
            </div>
            <p>Parking Space</p>
          </div>
          <div className="col-3 aminiCard card" data-aos="flip-left" data-aos-duration="1000">
            <div className="aminiIcon">
              <LiaSwimmingPoolSolid />
            </div>
            <p>Swimming Pool</p>
          </div>
          <div className="col-3 aminiCard card" data-aos="flip-left" data-aos-duration="1000">
            <div className="aminiIcon">
              <PiSecurityCameraDuotone />
            </div>
            <p>Private Security</p>
          </div>
          <div className="col-3 aminiCard card" data-aos="flip-left" data-aos-duration="1000">
            <div className="aminiIcon">
              <CiStethoscope />
            </div>
            <p>Medical Center</p>
          </div>
        </div>
        <div className='aminiBox row'>
          <div className="col-3 aminiCard card" data-aos="flip-left" data-aos-duration="1000">
            <div className="aminiIcon">
              <IoLibrary />
            </div>
            <p>Library Area</p>
          </div>
          <div className="col-3 aminiCard card" data-aos="flip-left" data-aos-duration="1000">
            <div className="aminiIcon">
              <MdKingBed />
            </div>
            <p>King Size Beds</p>
          </div>
          <div className="col-3 aminiCard card" data-aos="flip-left" data-aos-duration="1000">
            <div className="aminiIcon">
              <TbHomeHeart />
            </div>
            <p>Smart Home</p>
          </div>
          <div className="col-3 aminiCard card" data-aos="flip-left" data-aos-duration="1000">
            <div className="aminiIcon">
              <GiTreeSwing />
            </div>
            <p>Flaticon-Slider</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAnimities;
