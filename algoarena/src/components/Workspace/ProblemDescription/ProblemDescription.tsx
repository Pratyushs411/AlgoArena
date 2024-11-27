import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { Problem } from "@/utils/types/problem";
type ProblemDescriptionProps = {
  problem: Problem;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  return (
    <div className="bg-white min-h-screen text-teal-800">
      {/* Tabs */}
      <div className="flex h-12 items-center border-b-2 border-teal-200 bg-white text-teal-600">
        <div className="rounded-t-md px-5 py-2 text-sm font-xl font-bold cursor-pointer border-teal-500">
          Description
        </div>
      </div>

      <div className="flex px-6 py-6 overflow-y-auto">
        <div className="w-full">
          {/* Problem Heading */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">{problem.title}</h1>
            <div className="flex items-center space-x-4">
              <div className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-medium">
                Easy
              </div>
              <div className="p-2 rounded-full bg-teal-100 text-teal-600 cursor-pointer hover:bg-teal-200">
                <BsCheck2Circle />
              </div>
              <div className="flex items-center space-x-1 p-2 rounded-full bg-teal-100 text-teal-600 cursor-pointer hover:bg-teal-200">
                <AiFillLike />
                <span className="text-xs">120</span>
              </div>
              <div className="p-2 rounded-full bg-teal-100 text-teal-600 cursor-pointer hover:bg-teal-200">
                <AiFillDislike />
              </div>
              <div className="p-2 rounded-full bg-teal-100 text-teal-600 cursor-pointer hover:bg-teal-200">
                <TiStarOutline />
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="text-teal-900 text-base leading-relaxed">
            <div
              dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
            />
          </div>

          {/* Examples */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Examples</h2>
            {/* Example 1 */}
            {problem.examples.map((example, index) => (
              <div key={example.id}>
                <p className="font-medium mb-2">Example {index + 1}: </p>
                {example.img && (
                  <img src={example.img} alt="" className="mt-3" />
                )}
                <div className="example-card p-4 rounded-lg bg-teal-50 border border-teal-200">
                  <pre className="text-sm sm:text-base whitespace-normal break-words">
                    <span className="text-turquoise font-bold">Input:</span>
                    <span className="text-turquoise">{example.inputText}</span>
                    <br />
                    <span className="text-turquoise font-bold">Output:</span>
                    <span className="text-turquoise">{example.outputText}</span>
                    <br />
                    {example.explanation && (
                      <>
                        <span className="text-turquoise font-bold">Explanation:</span>
                        <span className="text-turquoise">
                          {example.explanation}
                        </span>
                      </>
                    )}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Constraints */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Constraints</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>2 ≤ nums.length ≤ 10</strong>
              </li>
              <li>
                <strong>-10 ≤ nums[i] ≤ 10</strong>
              </li>
              <li>
                <strong>-10 ≤ target ≤ 10</strong>
              </li>
              <li>
                <strong>Only one valid answer exists.</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
