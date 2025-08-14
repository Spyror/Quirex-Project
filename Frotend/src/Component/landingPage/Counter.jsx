import '../../App.css';
import { PiBuildingApartmentLight } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdFrontLoader } from "react-icons/md";
import { RiSofaLine } from "react-icons/ri";
import CountUp from 'react-countup';

const Counter=()=>{
  return (<>
  <div className="container-fluid count">
    <div className="row count">
      <div className="col-2"></div>
      <div className="col-8 countBox">
        <div className="counter">
          <div className="countIcon">
            <FaMapMarkedAlt />
          </div>
          <h3><CountUp start={50} end={560}duration={2}/>+</h3>
          <p>Total Area Sq</p>
        </div>
        <div className="counter">
          <div className="countIcon">
            <PiBuildingApartmentLight />
          </div>
          <h3><CountUp start={50} end={197}duration={2}/>K+</h3>
          <p>Apartment Sold</p>
        </div>
        <div className="counter">
          <div className="countIcon">
            <MdFrontLoader />
          </div>
          <h3><CountUp start={50} end={268}duration={2}/>+</h3>
          <p>Total Construction</p>
        </div>
        <div className="counter">
          <div className="countIcon">
            <RiSofaLine/>
          </div>
          <h3><CountUp start={50} end={340}duration={2}/>+</h3>
          <p>Apartio Rooms</p>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  </div>
  </>)
}

export default Counter;