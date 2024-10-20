import Head from "next/head"
import Topbar from "@/components/topbar/topbar";
export default function Home() {
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
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
					</table>
				</div>
    </main>
    </>
  );
}
