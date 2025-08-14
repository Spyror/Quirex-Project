import React from "react";
import Navbar from "./Component/landingPage/Navbar";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className='notFound'>
        <div>
          <h1 className='text-center'>Not Found</h1>
          <p className='text-center'>
            The resource request could not be found on the server
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
