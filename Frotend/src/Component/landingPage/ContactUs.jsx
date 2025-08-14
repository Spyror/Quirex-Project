import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
const ContactUs = () => {
  const validation = yup.object().shape({
    email: yup.string().required().email(),
    name: yup.string().required().min(3).max(22),
    contact: yup.number().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  });
  const { register, handleSubmit,reset } = useForm({
    resolver: yupResolver(validation),
  });
  const userValidation = async (data) => {
    console.log(data);
    const response = await axios.post(
      "http://localhost:9000/api/contact-list",
      {
        email: data.email,
        name: data.name,
        contact: data.contact, 
        subject: data.subject, 
        message: data.message,
      }
    );
    if (response?.data.code == 200) {
      Swal.fire({
        title: "Sent",
        text: response?.data?.message,
        icon: "success",
      });
      reset();
    } else{
      Swal.fire({
        title: "Sent",
        text: response?.data?.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className='container-fluid register'>
        <h1>Contact Us!</h1>
        <form
          className='regsForm contactForm'
          onSubmit={handleSubmit((d) => {
            userValidation(d);
          })}
        >
          <div className='row'>
            <div className='col-sm-6 contactField'>
              <label htmlFor='name' className='fw-bold'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                placeholder='Enter your name'
                {...register("name")}
              />
            </div>
            <div className='col-sm-6 contactField'>
              <label htmlFor='email' className='fw-bold'>
                Your Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Enter your email'
                {...register("email")}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 contactField'>
              <label htmlFor='phone' className='fw-bold'>
                Phone Number
              </label>
              <input
                type='text'
                id='phone'
                placeholder='Enter phone number'
                {...register("contact")}
              />
            </div>
            <div className='col-sm-6 contactField'>
              <label htmlFor='subject' className='fw-bold'>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                placeholder='Subject'
                {...register("subject")}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 contactField'>
              <label htmlFor='msg' className='fw-bold'>
                Message
              </label>
              <textarea
                id='msg'
                {...register("message")}
                className='p-3'
              ></textarea>
            </div>
          </div>
          <input type='submit' value='Send' className='registerBtn' />
        </form>
      </div>
    </>
  );
};

export default ContactUs;
