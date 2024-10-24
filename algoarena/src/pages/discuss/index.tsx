import React from 'react';
import Topbar from "@/components/topbar/topbar";
import Footer from "@/components/footer/footer";
type indexProps = {
    
};

const index:React.FC<indexProps> = () => {
    
    return(
        <>
        <Topbar/>
    <div  className='bg-gradient-to-b h-screen relative'>this is the discuss page</div>
     <Footer/>
    </>
    )
}
export default index;