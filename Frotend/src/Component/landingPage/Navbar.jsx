import { useEffect, useState } from "react";
import "../../App.css";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUserData(user);
  }, []);

  const handleLogout = ()=>{
    localStorage.removeItem("userInfo");
    navigate('/signIn')
  }

  {
    if (userData?.userType == "admin") {
      return (
        <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
        <div className='container-fluid'>
          <div className='logo'>
            <div className='image'>
              <TiHomeOutline />
            </div>
            <h1>Quirex</h1>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse mx-5 h5' id='navbarNav'>
            <ul className='navbar-nav menuUl'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to={"/admin-add"}>
                  Add
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/admin-list"}>
                  List
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/admin-sold"}>
                  Sold
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/admin-user"}>
                  User List
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/admin-profile"}>
                  Profile
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/admin-contact"}>
                  Contact
                </Link>
              </li>
              <li className='nav-item' onClick={handleLogout}>
                <Link className='nav-link navLogin'>
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
      )
    }
    else if(userData?.userType == 'user'){
      return(
        <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
        <div className='container-fluid'>
          <div className='logo'>
            <div className='image'>
              <TiHomeOutline />
            </div>
            <h1>Quirex</h1>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse mx-5 h5' id='navbarNav'>
            <ul className='navbar-nav w-75 menuUl'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to={"/user-property"}>
                  Property
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/user-bought"}>
                  Bought
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/user-profile"}>
                  Profile
                </Link>
              </li>
              <li className='nav-item' onClick={handleLogout}>
                <Link className='nav-link navLogin'>
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
      )
    }
    else{
      return(
        <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
        <div className='container-fluid'>
          <div className='logo'>
            <div className='image'>
              <TiHomeOutline />
            </div>
            <h1>Quirex</h1>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse mx-5 h5' id='navbarNav'>
            <ul className='navbar-nav w-75 menuUl'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to={"/"}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/about"}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/services"}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/property"}>
                  Property
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={"/contact"}>
                  Contact Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link navLogin' to={"/signIn"}>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link navLogin' to={"/register"}>
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
      )
    }
  }
}

export default Navbar;
