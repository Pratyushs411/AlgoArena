import React from 'react';
import { authModalState } from "@/atoms/authModalAtom";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
type signupProps = {
    
};

const signup:React.FC<signupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, type: "login" }));
	};
    return (<form className="flex flex-col items-start w-full">
        <div className="text-center w-full">
      <h2 className="text-lg font-bold text-black mb-4">Register to AlgoArena</h2>
    </div>
        <div className="w-full mb-4">
          <label htmlFor='email' className='text-sm font-medium block mb-2 text-black text-left'>
            Email
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
            Username
          </label>
          <input
            type='string'
            name='username'
            id='username'
            className='
              border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              bg-white border-turquoise placeholder-gray-400 text-blacks
            '
            placeholder='johndoe'
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor='password' className='text-sm font-medium block mb-2 text-black text-left'>
           Password
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
          Sign Up
        </button>
        <div className='text-sm font-medium text-black text-left mt-2'>
          Already have a account?{" "}
          <a href='#' className='text-blue-700 hover:underline' onClick={handleClick}>
            Log In
          </a>
        </div>
      </form>
    );
}
export default signup;