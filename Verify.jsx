//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Verify = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
        axios
          .post("http://localhost:3000/app/verify", data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <>
      <img
        className="h-36 w-36"
        src="https://marketplace.canva.com/EAFEcdxWgeo/1/0/1600w/canva-elegant-circle-signature-photography-logo--kbTNqEWceg.jpg"
        alt="logo_img"
      />
      <h1 className="mb-4 text-red-800 text-xl pt-5">
        The Link has been Expired.
      </h1>
      <h1 className="mb-4 text-red-800 text-xl">
        Please reset your password again.
      </h1>
      <p className="mb-4 text-right text-lg text-indigo-500">
        ~
        <Link
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          to="/auth/resetPassword"
        >
          Reset Password
        </Link>
      </p>
    </>
  );
};

export default Verify;
