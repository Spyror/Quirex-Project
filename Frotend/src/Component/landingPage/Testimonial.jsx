import "../../App.css";
import { FaQuoteLeft } from "react-icons/fa6";
const Testimonial = () => {
  return (
    <>
      <div className='container-fluid service testimonial'>
        <div className="testHead">
          <div className='sHead testPre'>Our Testimonial</div>
        <div>
          <h1>Clients Feedback</h1>
        </div>
        </div>
        <div className='cardBox row'>
          <div className='card fcard 'data-aos="fade-up">
            <div className='cardTxt test'>
              <div className="quoteIcon">
                <FaQuoteLeft />
              </div>
              <p>
                Precious Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla qui, corrupti dolores deleniti quia obcaecati voluptates, distinctio a maiores, praesentium excepturi incidunt ducimus 
              </p>
            </div>
            <div className="clientInfo">
              <div className="cImg">
                <img src="/img/1.jpg_1.jpeg"/>
              </div>
              <div className="cName">
                <h6>Jacob William</h6>
                <p>SELLING AGENTS</p>
              </div>
            </div>
          </div>
          <div className='card fcard 'data-aos="fade-up">
            <div className='cardTxt test'>
              <div className="quoteIcon">
                <FaQuoteLeft />
              </div>
              <p>
                Precious Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla qui, corrupti dolores deleniti quia obcaecati voluptates, distinctio a maiores, praesentium excepturi incidunt ducimus 
              </p>
            </div>
            <div className="clientInfo">
              <div className="cImg">
                <img src="/img/2.jpg_1.jpeg"/>
              </div>
              <div className="cName">
                <h6>Kelian Aderson</h6>
                <p>SELLING AGENTS</p>
              </div>
            </div>
          </div>
          <div className='card fcard 'data-aos="fade-up">
            <div className='cardTxt test'>
              <div className="quoteIcon">
                <FaQuoteLeft />
              </div>
              <p>
                Precious Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla qui, corrupti dolores deleniti quia obcaecati voluptates, distinctio a maiores, praesentium excepturi incidunt ducimus 
              </p>
            </div>
            <div className="clientInfo">
              <div className="cImg">
                <img src="/img/3.jpg_2.jpeg"/>
              </div>
              <div className="cName">
                <h6>Adam Joseph</h6>
                <p>SELLING AGENTS</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Testimonial;
