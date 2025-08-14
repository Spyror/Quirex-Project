import React from 'react'
import Navbar from '../landingPage/Navbar'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProperty = () => {
    const addValidation = yup.object().shape({
      title: yup.string().required().min(2).max(25),
      price: yup.string().required(),
      area: yup.string().required().min(2).max(25),
      location: yup.string().required().min(2).max(25),
      description: yup.string().required().min(2).max(70),
      pic: yup.mixed(),
    });
    const addProperty = async(data) => {
      const formData = new FormData();
      formData.append("title", data?.title);
      formData.append("price", data?.price);
      formData.append("description", data?.description);
      formData.append("area", data?.area);
      formData.append("location", data?.location);
      formData.append("pic", data?.pic[0]);
      const response = await axios.post('http://localhost:9000/api/add-property',formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })

      if(response?.data?.code==200){
        Swal.fire({
          title:"Add Property",
          text:response?.data?.message,
          icon:'success'
        })
        reset();
      }else{
        Swal.fire({
          title:"Add Property",
          text:response?.data?.message,
          icon:'error'
        })
      }

    };
    const {
      register,
      handleSubmit,
      reset,
      formState:{errors}
    } = useForm({
      resolver: yupResolver(addValidation),
    });

  return (
    <>
    <Navbar/>
    <div className='container-fluid register'>
      <h1>Add Property</h1>
      <form className='regsForm contactForm' onSubmit={handleSubmit((d) => {addProperty(d);})}>
          <div className="row mb-2">
          <div className="col-sm-6 contactField">
            <label htmlFor="title" className='fw-bold'>Title</label>
              <input type="text" id='title' placeholder='Enter Title' {...register("title")} className='form-control'/>
              {errors?.title && <p className='text-danger'>{errors?.title?.message}</p>}
          </div>
          <div className="col-sm-6 contactField">
            <label htmlFor="price" className='fw-bold'>Price</label>
              <input type="text" id='price' placeholder='Enter price' {...register("price")} className='form-control'/>
              {errors?.price && <p className='text-danger'>{errors?.price?.message}</p>}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-6 contactField">
            <label htmlFor="photo" className='fw-bold'>Picture</label>
              <input type="file" id='photo' {...register("pic")} className='form-control'/>
              {errors?.pic && <p className='text-danger'>{errors?.pic?.message}</p>}
          </div>
          <div className="col-sm-6 contactField">
            <label htmlFor="area" className='fw-bold'>Area</label>
              <input type="text" id='area' placeholder='Area in Sq.Ft' {...register("area")} className='form-control'/>
              {errors?.area && <p className='text-danger'>{errors?.area?.message}</p>}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-6 contactField">
            <label htmlFor="loc" className='fw-bold'>Location</label>
              <input type="text" id='loc' placeholder='Address..' {...register("location")} className='form-control'/>
              {errors?.location && <p className='text-danger'>{errors?.location?.message}</p>}
          </div>
          <div className="col-sm-6 contactField">
            <label htmlFor="description" className='fw-bold'>Description</label>
            <textarea id="description" {...register("description")} className="p-3 form-control"></textarea>
            {errors?.description && <p className='text-danger'>{errors?.description?.message}</p>}
          </div>
        </div>
        <input type="Submit" value="Add Property" className="registerBtn"/>
      </form>
      </div>
    </>
  )
}

export default AddProperty