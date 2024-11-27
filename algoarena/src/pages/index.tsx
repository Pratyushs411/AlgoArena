import Head from "next/head";
import Topbar from "@/components/topbar/topbar";
import ProblemTable from "@/components/problemTable/problemTable"
import Footer from "@/components/footer/footer";
import { useState } from "react";
import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Home() {
	// const [inputs, setInputs] = useState({
	// 	id: '',
	// 	title: '',
	// 	difficulty: '',
	// 	category: '',
	// 	videoId: '',
	// 	link: '',
	// 	order: 0,
	// 	likes: 0,
	// 	dislikes: 0,
	//   });
	// const handleInputChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
	// 	setInputs({
	// 		...inputs,
	// 		[e.target.name]: e.target.value,

	// 	});
	// }
	// console.log(inputs);
	// const handleSubmit= async (e: React.ChangeEvent<HTMLInputElement>) =>{
    //       e.preventDefault();
	// 	  const newProblem = {
	// 		...inputs,
	// 		order:Number(inputs.order),
	// 	  }
	// 	  await setDoc(doc(firestore, "problems",inputs.id), newProblem );
	// 	  alert("save to db");
	// }
  return (
    <>
    <main className="bg-white min-h-screen">
      <Topbar/>
      <h1
					className='text-3xl text-center text-gray-700 dark:text-black font-bold
					mt-10 mb-5'
				>
				All  Practice  Problems
				</h1>
        <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
						</div>
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium text-center'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium '>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
              <ProblemTable/>
					</table>
				</div>
				{/* <form className="p-6 flex flex-col max-w-sm gap-3" onSubmit={handleSubmit}>
					<input onChange = {handleInputChange} type="text" placeholder="problem id" name="id"/>
					<input onChange = {handleInputChange} type="title" placeholder="title" name="title"/>
					<input onChange = {handleInputChange} type="text" placeholder="difficulty" name="difficult"/>
                    <input onChange = {handleInputChange} type="text" placeholder="category" name="category"/>
					<input onChange = {handleInputChange} type="text" placeholder="order" name="order"/>
					<input onChange = {handleInputChange} type="text" placeholder="videoId?" name="videoId"/>
					<input onChange = {handleInputChange} type="text" placeholder="link?" name="link"/>
					<button className="">Save to db</button>
				</form> */}
				<Footer />
    </main>
    </>
  );
}
