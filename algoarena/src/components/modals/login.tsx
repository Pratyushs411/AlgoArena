import { authModalState } from "@/atoms/authModalAtom";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
type LoginProps = {};

const Login: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type: "login" | "register" | "forgotPassword") => {
		setAuthModalState((prev) => ({ ...prev, type }));
	};
  return (
    <form className="flex flex-col items-start w-full">
      <div className="text-center w-full">
    <h2 className="text-lg font-bold text-black mb-4">Sign in to AlgoArena</h2>
  </div>
      <div className="w-full mb-4">
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-black text-left'>
          Your Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-white border-turquoise placeholder-gray-400 text-black
          '
          placeholder='name@company.com'
        />
      </div>

      <div className="w-full mb-4">
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-black text-left'>
          Your Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-white border-turquoise placeholder-gray-400 text-blacks
          '
          placeholder='*******'
        />
      </div>

      <button
        type='submit'
        className='w-full text-white focus:ring-blue-300 font-medium
          text-sm px-5 py-2.5 text-center bg-turquoise hover:bg-white hover:text-turquoise
          bg-turquoise text-white rounded-md text-sm font-medium hover:border-2 hover:border-turquoise border-2 border-transparent
                transition duration-300 ease-in-out'
      >
        Log In
      </button>

      <button className='flex justify-start w-full mt-4' onClick={() => handleClick("forgotPassword")}>
        <a href='#' className='text-sm text-turquoise hover:underline text-left'>
          Forgot Password?
        </a>
      </button>

      <div className='text-sm font-medium text-black text-left mt-2'>
        Not Registered?{" "}
        <a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
          Create account
        </a>
      </div>
    </form>
  );
};

export default Login;