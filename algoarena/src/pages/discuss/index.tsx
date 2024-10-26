import React, { useState } from 'react';
import Topbar from "@/components/topbar/topbar";
import Footer from "@/components/footer/footer";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // For upvote/downvote icons

const index: React.FC = () => {
    // State for questions and new question input
    const [questions, setQuestions] = useState([
        {
            id: 1,
            title: "How do I optimize my solution for a dynamic programming problem?",
            author: "User123",
            replies: 5,
            votes: 12,
            date: "Oct 25, 2024",
            tags: ["Dynamic Programming", "Optimization"]
        },
        {
            id: 2,
            title: "Best practices for handling large datasets in competitive programming?",
            author: "Coder456",
            replies: 3,
            votes: 7,
            date: "Oct 24, 2024",
            tags: ["Data Structures", "Performance"]
        }
    ]);
    
    const [newQuestion, setNewQuestion] = useState('');

    // Function to handle new question posting
    const postQuestion = () => {
        if (newQuestion) {
            setQuestions([
                ...questions,
                {
                    id: questions.length + 1,
                    title: newQuestion,
                    author: "NewUser",
                    replies: 0,
                    votes: 0,
                    date: new Date().toLocaleDateString(),
                    tags: []
                }
            ]);
            setNewQuestion('');
        }
    };

    // Function to handle voting
    const handleVote = (id: number, voteType: 'up' | 'down') => {
        const updatedQuestions = questions.map(q => {
            if (q.id === id) {
                return {
                    ...q,
                    votes: voteType === 'up' ? q.votes + 1 : q.votes - 1
                };
            }
            return q;
        });
        setQuestions(updatedQuestions);
    };

    return (
        <>
            <Topbar />
            <div className='bg-gradient-to-b from-white to-teal-100 min-h-screen'>
                <div className='max-w-4xl mx-auto py-12 px-4'>
                    {/* Page Title */}
                    <h1 className='text-4xl font-bold text-center text-teal-600 mb-8'>Discuss</h1>
                    
                    {/* Question Post Section */}
                    <div className='bg-white shadow-lg rounded-lg p-6 mb-6'>
                        <h2 className='text-2xl font-semibold mb-4'>Ask a Question</h2>
                        <textarea
                            className='w-full p-4 border rounded-md focus:ring-2 focus:ring-teal-600'
                            rows={4}
                            placeholder='Post your question here...'
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                        ></textarea>
                        <button
                            className='mt-4 bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition'
                            onClick={postQuestion}
                        >
                            Post Question
                        </button>
                    </div>

                    {/* Filter Section */}
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-2xl font-semibold'>Recent Questions</h2>
                        <div>
                            <button className='bg-teal-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-teal-700'>
                                Recent
                            </button>
                            <button className='bg-white text-teal-600 border border-teal-600 py-2 px-4 rounded-lg hover:bg-teal-600 hover:text-white'>
                                Popular
                            </button>
                        </div>
                    </div>

                    {/* Question List */}
                    <div>
                        {questions.map((question) => (
                            <div key={question.id} className='bg-white shadow-md rounded-lg p-6 mb-4'>
                                <div className='flex'>
                                    {/* Voting Section */}
                                    <div className='flex flex-col items-center justify-center mr-6'>
                                        <button onClick={() => handleVote(question.id, 'up')} className='text-teal-600 hover:text-teal-700'>
                                            <FaChevronUp size={20} />
                                        </button>
                                        <span className='text-lg font-bold text-gray-800'>{question.votes}</span>
                                        <button onClick={() => handleVote(question.id, 'down')} className='text-teal-600 hover:text-teal-700'>
                                            <FaChevronDown size={20} />
                                        </button>
                                    </div>

                                    {/* Question Details */}
                                    <div className='flex-1'>
                                        <h3 className='text-xl font-semibold mb-2 text-blue-600'>{question.title}</h3>
                                        <div className='text-gray-500 mb-2'>
                                            <p>Posted by <span className='text-teal-600'>{question.author}</span> on {question.date}</p>
                                            <p>{question.replies} Replies</p>
                                        </div>
                                        <div className='flex space-x-2'>
                                            {question.tags.map((tag, index) => (
                                                <span key={index} className='bg-gray-200 px-2 py-1 rounded-md text-sm'>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <button className='mt-4 text-teal-600 font-semibold'>View Replies</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default index;
