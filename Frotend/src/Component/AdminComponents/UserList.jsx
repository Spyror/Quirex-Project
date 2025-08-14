import React from "react";
import Navbar from "../landingPage/Navbar";
import { useEffect, useState } from "react";
// import { RiDeleteBin5Fill } from "react-icons/ri";
// import Swal from "sweetalert2";
import axios from "axios";
const UserList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const UserData = JSON.parse(localStorage.getItem("userInfo"));
    const response = await axios.get(
      "http://localhost:9000/api/admin-user-list");
    if (response?.data?.code == 200) {
      setList(response?.data?.data);
    }
  }

  return (
    <>
      <Navbar />
      <div className='container-fluid service properties'>
        <div className='sHead'>Admin User List</div>
        <div>
          <h1>Admin Sold List</h1>
        </div>
      <div className='row'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10 w-100'>
          <table className='table'>
            <thead className='table table-dark'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>UserName</th>
                <th scope='col'>Email</th>
                <th scope='col'>Contact</th>
                <th scope='col'>Address</th>
                <th scope='col'>Profile</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item, index) => {
                console.log(item)
                return (
                  <>
                    <tr>
                      <th scope='row'>{index + 1}</th>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.contact}</td>
                      <td>{item?.address}</td>
                      <td>
                        <img
                          height='60'
                          width='100'
                          src={`http://localhost:9000/img/${item?.profile}`}
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

export default UserList;
