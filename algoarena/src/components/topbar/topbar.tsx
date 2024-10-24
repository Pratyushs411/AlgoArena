import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { useRouter } from "next/router";
type topbarProps = {
    
};

const topbar:React.FC<topbarProps> = () => {
    const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();
    return (
        <nav className='relative flex h-[60px] w-full shrink-0 items-center justify-between px-5 bg-white text-black shadow-md'>
        <div className='flex w-full items-center justify-between max-w-[1200px] mx-auto'>
          <Link href='/' className='flex items-center'>
            <Image src='/logo.png' alt='Logo' height={100} width={100} />
          </Link>
          <div className='flex items-center'>
		  <Link href='/about'>
            <button className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-l font-bold border-transparent'>
              About
            </button>
          </Link>
		  <Link href='/'>
            <button className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-l font-bold border-transparent'>
              Problems
            </button>
          </Link>
		  <Link href='/contest'>
            <button className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-l font-bold border-transparent'>
              Contest
            </button>
          </Link>
		  <Link href='/discuss'>
            <button className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-l font-bold border-transparent'>
              Discuss
            </button>
          </Link>

                {!user && (
						<Link
							href='/auth'
							onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}
						>
							<button className='bg-turquoise text-white px-2 py-1 sm:px-4 rounded-md text-md 
                hover:text-turquoise hover:bg-white hover:border-2 hover:border-turquoise border-2 border-transparent
                transition duration-300 ease-in-out'>Sign In</button>
						</Link>
					)}
					{user && (
						<Link href = "/profile" className='cursor-pointer group relative'>
							<Image src='/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full' />
							<div
								className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-white text-turquoise p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out border border-gray-200'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
						</Link>
					)}
                    {user && <Logout className="ml-4"/>}
			</div>
        </div>
      </nav>      
    )
}
export default topbar;