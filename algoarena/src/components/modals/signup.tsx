import React, { useEffect, useState } from "react";
import { auth, firestore } from "@/firebase/firebase"; // Make sure firestore is initialized
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { authModalState } from "@/atoms/authModalAtom";

const Signup: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, type: "login" }));
    };
    const [inputs, setInputs] = useState({ email: "", username: "", password: "" });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const router = useRouter();

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password || !inputs.username) {
            toast.error("Please fill all fields");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (newUser) {
                // Save user data to Firestore
                await setDoc(doc(firestore, "users", newUser.user.uid), {
                    username: inputs.username,
                    email: inputs.email,
                });
                router.push("/");
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (error) toast.error("User Already Exists");
    }, [error]);

    return (
        <form className="flex flex-col items-start w-full" onSubmit={handleRegister}>
            <div className="text-center w-full">
                <h2 className="text-lg font-bold text-black mb-4">Register to AlgoArena</h2>
            </div>
            <div className="w-full mb-4">
                <label htmlFor='email' className='text-sm font-medium block mb-2 text-black text-left'>
                    Email
                </label>
                <input
                    onChange={handleChangeInput}
                    type='email'
                    name='email'
                    id='email'
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-turquoise placeholder-gray-400 text-black'
                    placeholder='name@company.com'
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor='username' className='text-sm font-medium block mb-2 text-black text-left'>
                    Username
                </label>
                <input
                    onChange={handleChangeInput}
                    type='text' // Change to 'text'
                    name='username'
                    id='username'
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-turquoise placeholder-gray-400 text-black'
                    placeholder='johndoe'
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor='password' className='text-sm font-medium block mb-2 text-black text-left'>
                    Password
                </label>
                <input
                    onChange={handleChangeInput}
                    type='password'
                    name='password'
                    id='password'
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white border-turquoise placeholder-gray-400 text-black'
                    placeholder='*******'
                />
            </div>

            <button
                type='submit'
                className='w-full text-white focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center bg-turquoise border border-turquoise hover:bg-white hover:text-turquoise rounded-md transition duration-300 ease-in-out'
                disabled={loading}
            >
               {loading ? "Registering..." : "Sign Up"}
            </button>
            <div className='text-sm font-medium text-black text-left mt-2'>
                Already have an account?{" "}
                <a href='#' className='text-blue-700 hover:underline' onClick={handleClick}>
                    Log In
                </a>
            </div>
        </form>
    );
};

export default Signup;
