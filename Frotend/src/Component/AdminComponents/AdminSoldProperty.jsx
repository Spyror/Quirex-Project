import React from "react";
import Navbar from "../landingPage/Navbar";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

import Swal from "sweetalert2";
import axios from "axios";
const AdminSoldProperty = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const UserData = JSON.parse(localStorage.getItem("userInfo"));
    const response = await axios.get(
      "http://localhost:9000/api/admin-sold-list");
    if (response?.data?.code == 200) {
      setList(response?.data?.data);
    }
  }

    const handleDeleteProperty=(_id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
   const response =  await axios.post("http://localhost:9000/api/delete-sold-item",{_id});
   if(response?.data?.code == 200){
    Swal.fire({
      title: "Delete Property",
      text: response?.data?.message,
      icon: "success",
    })
    fetchData();
   }else{
    Swal.fire({
      title: "Delete Property",
      text: response?.data?.message,
      icon: "error",
    })
   }
  }
});
  }


  return (
    <>
      <Navbar />
      <div className='container-fluid service properties'>
        <div className='sHead'>Sold List</div>
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
                <th scope='col'>Title</th>
                <th scope='col'>Price</th>
                <th scope='col'>Area</th>
                <th scope='col'>Location</th>
                <th scope='col'>Media</th>
                <th scope='col'>Action</th>
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
                      <td>{item?.title}</td>
                      <td>{item?.price}</td>
                      <td>{item?.area}</td>
                      <td>{item?.location}</td>
                      <td>
                        <img
                          height='60'
                          width='100'
                          src={`http://localhost:9000/img/${item?.pic}`}
                        />
                      </td>
                      <td><div onClick={()=>{handleDeleteProperty(item?._id)}} className="btn btn-outline-danger">Delete <RiDeleteBin5Fill /></div></td>
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

export default AdminSoldProperty;
