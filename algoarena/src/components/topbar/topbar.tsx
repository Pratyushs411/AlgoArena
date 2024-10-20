import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
type topbarProps = {
    
};

const topbar:React.FC<topbarProps> = () => {
    
    return (
        <nav className='relative flex h-[60px] w-full shrink-0 items-center justify-between px-5 bg-white text-black shadow-md'>
        <div className='flex w-full items-center justify-between max-w-[1200px] mx-auto'>
          <Link href='/' className='flex items-center'>
            <Image src='/logo.png' alt='Logo' height={100} width={100} />
          </Link>
          <div className='flex items-center'>
			<button
					className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-l font-bold border-transparent'
				>
					About
				</button>
				<button
					className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-l font-bold border-transparent'
				>
					Problems
				</button>
				<button
					className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-l font-bold border-transparent'
				>
					Contest
				</button>
				<button
					className='bg-white text-black px-2 py-1 sm:px-4 rounded-md text-l font-bold border-transparent'
				>
					Discuss
				</button>
			</div>
        </div>
      </nav>      
    )
}
export default topbar;