import "../../App.css";
import { IoIosBed } from "react-icons/io";
import { MdBathtub } from "react-icons/md";
import { GiTreasureMap } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  return (
    <>
    {location?.pathname != '/' && <Navbar/>}
    <div className="container-fluid service about">
      <div className='sHead'>About</div>
      <div className="row">
        <div className="col-sm-7 mt-4">
          <h1 className='w-100 mb-4'>Today Sells Properties</h1>
          <p className="w-75">Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
          <div className="aProp">
            <p><span className='hyphen'>—</span> Live Music Concerts at Luviana</p>
            <p><span className='hyphen'>—</span> Our SecretisLand Boat Tour is Just for You</p>
            <p><span className='hyphen'>—</span> Live Music Concerts at Luviana</p>
            <p><span className='hyphen'>—</span> Live Music Concerts at Luviana</p>
          </div>
          <div className="bhk aBhk">
            <div className="bedroom ">
              3 <IoIosBed />
              <p>Bedrooms</p>
            </div>
            <div className="bathroom">
              2 <MdBathtub />
              <p>Bathrooms</p>
            </div>
            <div className="bathroom">
              2 <FaCar />
              <p>Bathrooms</p>
            </div>
            <div className="area">
              3450 <GiTreasureMap />
              <p>square Ft</p>
            </div>
          </div>
          <div className="aPropImg w-100">
            <img src="/img/8.png" className="img-fluid"/>
            <img src="/img/11.jpg.jpeg" className="img-fluid"/>
            <img src="/img/13.jpg.jpeg" className="img-fluid"/>
          </div>
        </div>
        <div className="col-sm-5">
          <img src="/img/9.png" className="w-100 aImg"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default About