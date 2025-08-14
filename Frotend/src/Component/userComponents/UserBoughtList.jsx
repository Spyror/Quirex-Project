import React, { useEffect, useState } from "react";
import Navbar from "../landingPage/Navbar";
import axios from "axios";
import Swal from "sweetalert2"
const UserBoughtList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const UserData = JSON.parse(localStorage.getItem("userInfo"));
    const response = await axios.post(
      "http://localhost:9000/api/user-bought-list",
      {
        userId: UserData?._id,
      }
    );
    if (response?.data?.code == 200) {
      setList(response?.data?.data);
    }
  };


      const show= (data)=>{
        Swal.fire({
          title:"Message",
          text:data,
          icon:"info"
        })
      }

  return (
    <>
      <Navbar />
      <div className='container-fluid service properties'>
        <div className='sHead'>Bought List</div>
        <div>
          <h1>User Bought List</h1>
        </div>
      <div className='row'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10 w-100'>
          <table className='table'>
            <thead className='table table-dark'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Price</th>
                <th scope='col'>Area</th>
                <th scope='col'>Description</th>
                <th scope='col'>Location</th>
                <th scope='col'>Media</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <th scope='row'>{index + 1}</th>
                      <td>{item?.title}</td>
                      <td>{item?.price}</td>
                      <td>{item?.area}</td>
                      <td onClick={()=>(show(item?.description))}>{item?.description.slice(0,20)}....</td>
                      <td>{item?.location}</td>
                      <td>
                        <img
                          height='60'
                          width='100'
                          src={`http://localhost:9000/img/${item?.pic}`}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          {list?.length==0 && <h1 className="text-center">Record Not Found</h1> }

        </div>
        <div className='col-sm-1'></div>
      </div>

    </div>  
    </>
  );
};

export default UserBoughtList;
