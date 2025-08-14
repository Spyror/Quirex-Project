import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { useLocation,Routes, Route } from "react-router-dom";
import TopNavBar from "./Component/landingPage/TopNavBar";
import Home from "./Component/landingPage/Home";
import About from "./Component/landingPage/About";
import Services from "./Component/landingPage/Services";
import Property from "./Component/landingPage/Property";
import UserRegister from "./Component/landingPage/UserRegister";
import SignIn from "./Component/landingPage/SignIn";
import AddProperty from "./Component/AdminComponents/AddProperty";
import AdminPropertyList from "./Component/AdminComponents/AdminPropertyList";
import AdminSoldProperty from "./Component/AdminComponents/AdminSoldProperty";
import UserList from "./Component/AdminComponents/UserList";
import AdminProfile from "./Component/AdminComponents/AdminProfile";
import AdminContactUsList from "./Component/AdminComponents/AdminContactUsList";
import UserBoughtList from "./Component/userComponents/UserBoughtList";
import UserProfile from "./Component/userComponents/UserProfile";
import ContactUs from "./Component/landingPage/ContactUs";
import Footer from "./Component/landingPage/Footer";
import NotFound from "./NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
function App() {
  const location = useLocation();

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUserData(user);
  }, [location?.pathname]);


  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <>
      <TopNavBar />
      <Routes>
        {/* landing page router */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/property' element={<Property />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/contact' element={<ContactUs />} />
        {/* admin Section  */}
        {userData?.userType == "admin" && (
          <>
            <Route path='/admin-add' element={<AddProperty />} />
            <Route path='/admin-list' element={<AdminPropertyList />} />
            <Route path='/admin-sold' element={<AdminSoldProperty />} />
            <Route path='/admin-user' element={<UserList />} />
            <Route path='/admin-profile' element={<AdminProfile />} />
            <Route path='/admin-contact' element={<AdminContactUsList />} />
          </>
        )}
        {/* User Route */}
        {userData?.userType == "user" && (
          <>
            <Route path='/user-property' element={<Property />} />
            <Route path='/user-bought' element={<UserBoughtList />} />
            <Route path='/user-profile' element={<UserProfile />} />
          </>
        )}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
