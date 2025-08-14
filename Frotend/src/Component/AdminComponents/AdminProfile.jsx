import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaKey, FaHome } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../landingPage/Navbar";
const AdminProfile = () => {

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    setValue('name',userData.name)
    setValue('password',userData.password)
    setValue('contact',userData.contact)
    setValue('address',userData.address)
    setValue('email',userData.email)
  },[]);

  const validation = yup.object().shape({
    name: yup.string().required().min(3).max(22),
    email: yup.string().required().email(),
    contact: yup.string().required(),
    password: yup.string().required(),
    address: yup.string().required(),
    profile: yup.mixed().required(),
  });


  const registerValidation = async (data) => {
    if(data?.profile?.length ==0){
      Swal.fire({
        title:"File Upload Error",
        text:"Please upload a valid file",
        icon:"error"
      })
      return
    }
    const formData = new FormData();
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    formData.append("userId",userData._id);
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("address", data?.address);
    formData.append("password", data?.password);
    formData.append("contact", data?.contact);
    formData.append("profile", data?.profile[0]);
    const response = await axios.put(
      "http://localhost:9000/api/user-update",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Update",
        text: response?.data?.message,
        icon: "success",
      });
      localStorage.setItem("userInfo",JSON.stringify(response?.data?.data))
    } else {
      Swal.fire({
        title: "Update",
        text: response?.data?.message,
        icon: "error",
      });
    }
    
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });
  return (
    <>
      <Navbar />
      <div className='container-fluid register'>
        <h1>Profile</h1>
        <div>
          <form
            onSubmit={handleSubmit((d) => {
              registerValidation(d);
            })}
            className='regsForm'
          >
            <div className='row'>
              <div className='input-group flex-nowrap inField'>
                <span className='input-group-text' id='addon-wrapping'>
                  <FaUser />
                </span>
                <input
                  id='username'
                  type='text'
                  className='form-control'
                  placeholder='Username'
                  aria-label='Username'
                  aria-describedby='addon-wrapping'
                  {...register("name")}
                />
              </div>
              {errors?.name && (
                <p className='text-danger'>{errors?.name?.message}</p>
              )}
              <div className='input-group flex-nowrap inField'>
                <span className='input-group-text' id='addon-wrapping'>
                  <MdEmail />
                </span>
                <input
                disabled
                  id='email'
                  type='email'
                  className='form-control'
                  placeholder='Enter your email'
                  aria-label='Username'
                  aria-describedby='addon-wrapping'
                  {...register("email")}
                />
              </div>
              {errors?.email && (
                <p className='text-danger'>{errors?.email?.message}</p>
              )}
            </div>
            <div className='row'>
              <div className='input-group flex-nowrap inField'>
                <span className='input-group-text' id='addon-wrapping'>
                  <FaPhone />
                </span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter phone number'
                  aria-label='Username'
                  aria-describedby='addon-wrapping'
                  {...register("contact")}
                />
              </div>
              {errors?.phone && (
                <p className='text-danger'>{errors?.phone?.message}</p>
              )}
              <div className='input-group flex-nowrap inField'>
                <span className='input-group-text' id='addon-wrapping'>
                  <FaKey />
                </span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Password'
                  aria-label='Username'
                  aria-describedby='addon-wrapping'
                  {...register("password")}
                />
              </div>
              {errors?.password && (
                <p className='text-danger'>{errors?.password?.message}</p>
              )}
            </div>
            <div className='row slc'>
              <div className='input-group flex-nowrap inField'>
                <span className='input-group-text' id='addon-wrapping'>
                  <FaHome />
                </span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your Address'
                  aria-label='address'
                  aria-describedby='addon-wrapping'
                  {...register("address")}
                />
              </div>
              {errors?.address && (
                <p className='text-danger'>{errors?.address?.message}</p>
              )}
              <div className='input-group mb-3 h-75 chooseFile'>
                <div className='btn btn-secondary'>
                  <IoMdImages />
                </div>
                <input
                  type='file'
                  {...register("profile")}
                  className='form-control'
                />
              </div>
              {errors?.profile && (
                <p className='text-danger'>{errors?.profile?.message}</p>
              )}
            </div>
            <input type='Submit' value='Update' className='registerBtn' />
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
