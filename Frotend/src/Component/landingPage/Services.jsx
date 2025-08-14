import "../../App.css";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  return (
    <>
      {location?.pathname !== "/" && <Navbar />}
      <div className='container-fluid service'>
        <div className='sHead'>Our Services</div>
        <div>
          <h1>Our Main Focus</h1>
        </div>
        <div className='cardBox row'>
          <div data-aos='fade-up' className='card'>
            <div className='cardImg'>
              <img src='/img/home.png' />
            </div>
            <div className='cardTxt'>
              <h3>Buy a home</h3>
              <p>
                Own your dream home with ease. Explore handpicked properties
                ready for you. Verified listings, trusted sellers, and seamless
                support.
              </p>
            </div>
            <div className='cardLink'>Find A Home —› </div>
          </div>
          <div data-aos='fade-up' className='card'>
            <div className='cardImg'>
              <img src='/img/22.png' />
            </div>
            <div className='cardTxt'>
              <h3>Rent a home</h3>
              <p>
                Find the perfect place, for the perfect time. Flexible rentals
                to fit your lifestyle. Short-term or long-term — we’ve got you
                covered.
              </p>
            </div>
            <div className='cardLink'>Find A Home —› </div>
          </div>
          <div data-aos='fade-up' className='card'>
            <div className='cardImg'>
              <img src='/img/23.png' />
            </div>
            <div className='cardTxt'>
              <h3>Sell a home</h3>
              <p>
                List your property, reach the right buyers. Selling made simple
                with Quirex. Instant visibility. Real buyers. Zero hassle.
                
              </p>
            </div>
            <div className='cardLink'>Find A Home —› </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
