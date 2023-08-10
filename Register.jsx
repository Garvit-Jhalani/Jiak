import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try {
      const res = await axios
        .post("http://localhost:3000/app/register", data)
        .then((res) => {
          navigate("/auth/login", {replace: true});
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-br from-pink-100 to-orange-100 hover:bg-gradient-to-bl xl:space-x-12 lg:space-x-4 lg:grid lg:grid-cols-2 lg:gap-x-2 lg:space-y-0">
        <div>
          <img
            className="2xl:h-full 2xl:w-full 2xl:h-screen xl:h-full xl:w-68 xl:h-screen"
            src="https://t4.ftcdn.net/jpg/02/86/17/89/360_F_286178925_8zk89O9uC5JJVPvqhvBMUpaRxp8AFXzD.jpg"
            alt=""
          />
        </div>
        <div className="2xl:pr-72 2xl:pl-56 xl:pr-24 xl:pl-24">
          <img
            className="2xl:ml-24 2xl:mt-12 2xl:mb-32 xl:ml-40 xl:mt-4 xl:mb-6 2xl:h-36 2xl:w-36 xl:h-28 xl:w-28"
            src="https://marketplace.canva.com/EAFEcdxWgeo/1/0/1600w/canva-elegant-circle-signature-photography-logo--kbTNqEWceg.jpg"
            alt="logo_img"
          />
          <h1 className="text-center mb-4 text-blue-800 text-xl">
            <b>
              <i>
                <u>Create your account</u>
              </i>
            </b>
          </h1>
          <div className="flex flex-col justify-center border-4 hover:border-neutral-300 2xl:px-11 2xl:py-11 xl:px-6 xl:py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-900 dark:text-white text-lg"
                >
                  Your Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is mandatory",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 20 ||
                        "The name should have at most 20 characters",
                    },
                  })}
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="border-2 border-black rounded-md mb-6 w-full justify-center xl:py-1"
                  type="name"
                  placeholder="Full Name"
                />
                {errors?.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-900 dark:text-white text-lg"
                >
                  Your Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50 ||
                        "The email should have at most 50 characters",
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                    },
                  })}
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="border-2 border-black rounded-md mb-6 w-full justify-center xl:py-1"
                  type="email"
                  placeholder="name@company.com"
                />
                {errors?.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* PASSWORD */}

              <div>
                <label
                  className="block font-medium leading-6 text-gray-900 text-lg"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is Mandatory",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 12 ||
                        "The email should have at most 12 characters",
                      minLength: (v) =>
                        v.length >= 8 ||
                        "The email should have at most 8 characters",
                    },
                  })}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className="border-2 border-black rounded-md mb-6 w-full justify-center xl:py-1"
                  type="password"
                  placeholder="********"
                />
                {errors?.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>

              <button
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl px-7 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Create an account
              </button>
            </form>
            <h1 className="text-center pt-2">
              ------------------------ OR ------------------------
            </h1>
            <div className="mt-6 space-x-1 lg:grid lg:grid-cols-3 lg:gap-x-2 lg:space-y-0">
              <div className="pl-6">
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 "
                >
                  <svg
                    className="w-6 h-6 mr-2 ml-1 pl-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="pl-2">
                <button
                  type="button"
                  className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 "
                >
                  <svg
                    className="w-6 h-6 mr-2 ml-1 pl-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="text-white bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                >
                  <svg
                    className="w-6 h-6 mr-2 ml-1 pl-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-gray-500 text-lg">
            Already a Member?
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to="/auth/login"
            >
              <u>Login</u>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
