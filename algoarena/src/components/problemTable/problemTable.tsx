import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
//import { DBProblem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
import {problems} from "@/mockProblems/problems"
type problemTableProps = {
    
};

const problemTable:React.FC<problemTableProps> = () => {
    
    return (
        <tbody className='text-white'>
        {problems.map((problem, idx) => {
            const difficulyColor =
            problem.difficulty === "Easy"? "text-dark-green-s": problem.difficulty === "Medium"? "text-dark-yellow": "text-dark-pink";
            return (
                <tr className="bg-white border-b border-gray-200" key={problem.id}>
                    <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                    <BsCheckCircle size={18} />
                        </th>
                        <td className='px-6 py-4' style={{ width: "190px" }}>
								(
									<Link
										 href={`/problem/${problem.id}`}
										className='hover:text-blue-600 cursor-pointer text-black'
										target='_blank'
									>
										{problem.title}
									</Link>
								)
							</td>
                            <td className={`px-6 py-4 ${difficulyColor}`}>{problem.difficulty}</td>
                        </tr>  
            );
        })
        }
    </tbody>
    )
}
export default problemTable;