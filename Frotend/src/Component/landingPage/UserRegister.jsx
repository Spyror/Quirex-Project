import "../../App.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaKey, FaHome } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const UserRegister = () => {
  const navigation  = useNavigate()


  const validation = yup.object().shape({
    name: yup.string().required().min(3).max(22),
    email: yup.string().required().email(),
    contact: yup.string().required(),
    password: yup.string().required(),
    address: yup.string().required(),
    profile: yup.mixed().required(),
  });
  const registerValidation = async (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    formData.append("address", data?.address);
    formData.append("contact", data?.contact);
    formData.append("profile", data?.profile[0]);
    const response = await axios.post(
      "http://localhost:9000/api/user-register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Registration",
        text: response?.data?.message,
        icon: "success",
      });
      reset();
      navigation('/signIn')
    } else {
      Swal.fire({
        title: "Registration",
        text: response?.data?.message,
        icon: "error",
      });
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  return (
    <>
      <Navbar />
      <div className='container-fluid register'>
        <h1>Register Here</h1>
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
              {/* {errors?.name && (
                <p className='text-danger'>{errors?.name?.message}</p>
              )} */}
              <div className='input-group flex-nowrap inField'>
                <span className='input-group-text' id='addon-wrapping'>
                  <MdEmail />
                </span>
                <input
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
                  type='password'
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
            <input type='Submit' value='Register' className='registerBtn' />
          </form>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
