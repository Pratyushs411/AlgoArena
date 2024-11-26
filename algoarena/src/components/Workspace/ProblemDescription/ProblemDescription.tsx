import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
  return (
    <div className="bg-white min-h-screen text-teal-800">
      {/* Tabs */}
      <div className="flex h-12 items-center border-b border-teal-200 bg-white text-teal-600">
        <div
          className="rounded-t-md px-5 py-2 text-sm font-medium cursor-pointer border-b-2 border-teal-500"
        >
          Description
        </div>
      </div>

      <div className="flex px-6 py-6 overflow-y-auto">
        <div className="w-full">
          {/* Problem Heading */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">1. Two Sum</h1>
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
  <p className="mb-4">
    Given an array of integers <code className="text-teal-800">nums</code> and an integer
    <code className="text-teal-800">target</code>, return <em>indices of the two numbers such
    that they add up to</em> <code className="text-teal-800">target</code>.
  </p>
  <p className="mb-4">
    You may assume that each input would have <strong>exactly one
    solution</strong>, and you may not use the same element twice.
  </p>
  <p className="mb-4">You can return the answer in any order.</p>
</div>


          {/* Examples */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Examples</h2>
            <div className="mb-4">
              <p className="font-medium mb-2">Example 1:</p>
              <div className="p-4 rounded-lg bg-teal-50 border border-teal-200">
                <pre>
                  <strong>Input:</strong> nums = [2,7,11,15], target = 9
                  <br />
                  <strong>Output:</strong> [0,1]
                  <br />
                  <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
                </pre>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium mb-2">Example 2:</p>
              <div className="p-4 rounded-lg bg-teal-50 border border-teal-200">
                <pre>
                  <strong>Input:</strong> nums = [3,2,4], target = 6
                  <br />
                  <strong>Output:</strong> [1,2]
                  <br />
                  <strong>Explanation:</strong> Because nums[2] + nums[1] == 6, we return [1, 2].
                </pre>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium mb-2">Example 3:</p>
              <div className="p-4 rounded-lg bg-teal-50 border border-teal-200">
                <pre>
                  <strong>Input:</strong> nums = [3,3], target = 6
                  <br />
                  <strong>Output:</strong> [0,1]
                </pre>
              </div>
            </div>
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
