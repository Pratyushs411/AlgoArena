import React from 'react';
import Navbar from "@/components/navbar/navbar";
import Image from 'next/image';
import AuthModal from "@/components/modals/authModal";
// import { auth } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
type AuthPageProp = {};

const AuthPage: React.FC<AuthPageProp> = () => {
    const authModal = useRecoilValue(authModalState);
    // const [user, loading, error] = useAuthState(auth);
	// const [pageLoading, setPageLoading] = useState(true);
	// const router = useRouter();
    return (
        <div className='bg-gradient-to-b h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <Navbar style={{ marginTop: '30px', marginLeft: '5px' }} />

                {/* Flex container to hold image and auth modal side by side */}
                <div className='flex items-center justify-center h-[calc(100vh-6rem)]'>
                    <div className='flex items-center justify-center space-x-8 w-4/5 h-10/10 max-w-4xl'>
                        {/* Left side: Image */}
                        <div className='w-1/2 h-full'>
                            <div className='aspect-square relative'>
                                <Image 
                                    src='/quote.png' 
                                    alt='quote' 
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        
                        {/* Right side: Auth Modal */}
                        <div className='w-1/2 h-full'>
                            <AuthModal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;