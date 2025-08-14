import "../../App.css";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const validation = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(20),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validation),
  });
  const handleLogin = async (data) => {
    const response = await axios.post("http://localhost:9000/api/login", data);
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "success",
      });
      reset();
      localStorage.setItem("userInfo", JSON.stringify(response?.data?.data));
      if (response?.data?.data?.userType == "admin") {
        navigate("/admin-add");
      } else if (response?.data?.data?.userType == "user") {
        navigate("/user-property");
      }
    } else {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "error",
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className='container-fluid outer'>
        <h1>Sign In</h1>
        <div className='loginBox'>
          <form
            onSubmit={handleSubmit((d) => {
              handleLogin(d);
            })}
            className='form'
          >
            <label htmlFor='email'>Your Email</label>
            <div className='input-group flex-nowrap'>
              <span className='input-group-text' id='addon-wrapping'>
                <IoMdMail />
              </span>
              <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
                aria-label='Username'
                aria-describedby='addon-wrapping'
                id='email'
                {...register("email")}
              />
            </div>
            {errors?.email && (
              <p className='text-danger'>{errors?.email?.message}</p>
            )}
            <label htmlFor='password'>Password</label>
            <div className='input-group flex-nowrap'>
              <span className='input-group-text' id='addon-wrapping'>
                <FaKey />
              </span>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                aria-label='Username'
                aria-describedby='addon-wrapping'
                id='password'
                {...register("password")}
              />
            </div>
            {errors?.password && (
              <p className='text-danger'>{errors?.password?.message}</p>
            )}
            <input
              className='signInBtn registerBtn'
              type='submit'
              value={"Sign In"}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
