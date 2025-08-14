import React from 'react'
import Navbar from '../landingPage/Navbar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState,useEffect } from 'react';
import { data } from 'react-router-dom';
const AdminContactUsList = () => {
  const [list, setList] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:9000/api/admin-contact-list");
      if (response?.data?.code == 200) {
        setList(response?.data?.data);
      }
    }
    const show= (data)=>{
      Swal.fire({
        title:"Message",
        text:data,
        icon:"info"
      })
    }

  return (
    <>
    <Navbar/>
    <table className='table w-75 mx-auto'>
      <thead className='table-dark'>
        <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Subject</th>
        <th>Message</th>
      </tr>
      </thead>
      <tbody>
        {list?.map((item,index)=>{
          return(
            <>
          <tr>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
          <td>{item.subject}</td>
          <td onClick={()=>(show(item?.message))}>{item.message?.slice(0,50)}....</td>
        </tr>
            </>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default AdminContactUsList