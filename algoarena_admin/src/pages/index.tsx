// src/pages/admin/AdminPage.tsx
import React, { useState } from 'react';
 // Adjust path as needed

const AdminPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('userData');

  // Static user data for demonstration
  const users = [
    { id: 1, name: 'User One', email: 'user1@example.com' },
    { id: 2, name: 'User Two', email: 'user2@example.com' },
    { id: 3, name: 'User Three', email: 'user3@example.com' },
  ];

  return (
    <div className="bg-teal-50 min-h-screen flex flex-col">
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        <h1 className="text-2xl font-bold text-teal-800 mb-6 text-center">Admin Panel</h1>

        {/* Toggle Section Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => setActiveSection('userData')}
            className={`px-4 py-2 rounded-md font-semibold 
              ${activeSection === 'userData' ? 'bg-teal-700 text-white' : 'bg-white text-teal-700 border border-teal-700'}`
            }
          >
            Manage Users
          </button>
          <button 
            onClick={() => setActiveSection('addQuestion')}
            className={`px-4 py-2 rounded-md font-semibold 
              ${activeSection === 'addQuestion' ? 'bg-teal-700 text-white' : 'bg-white text-teal-700 border border-teal-700'}`
            }
          >
            Add Questions
          </button>
          <button 
            onClick={() => setActiveSection('addContest')}
            className={`px-4 py-2 rounded-md font-semibold 
              ${activeSection === 'addContest' ? 'bg-teal-700 text-white' : 'bg-white text-teal-700 border border-teal-700'}`
            }
          >
            Add Contests
          </button>
        </div>

        {/* Conditional Rendering for Each Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {activeSection === 'userData' && (
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-4">Manage Users</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-teal-700 text-white">
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-teal-900">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-teal-100 transition">
                        <td className="px-4 py-2">{user.id}</td>
                        <td className="px-4 py-2">{user.name}</td>
                        <td className="px-4 py-2">{user.email}</td>
                        <td className="px-4 py-2">
                          <button className="text-teal-600 hover:underline mr-4">Edit</button>
                          <button className="text-red-500 hover:underline">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeSection === 'addQuestion' && (
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-4">Add Questions</h2>
              <form className="space-y-4">
                <div>
                  <textarea 
                    className="w-full border border-teal-300 rounded-lg p-3 resize-none" 
                    rows={3}
                    placeholder="Enter the question here..."
                  />
                </div>
                <div>
                  <textarea 
                    className="w-full border border-teal-300 rounded-lg p-3 resize-none" 
                    rows={3}
                    placeholder="Enter the answer here..."
                  />
                </div>
                <button 
                  type="button"
                  className="w-full py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
                >
                  Add Question
                </button>
              </form>
            </section>
          )}

          {activeSection === 'addContest' && (
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-4">Add Contest</h2>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    className="w-full border border-teal-300 rounded-lg p-3" 
                    placeholder="Enter contest name..."
                  />
                </div>
                <div>
                  <input 
                    type="date" 
                    className="w-full border border-teal-300 rounded-lg p-3" 
                  />
                </div>
                <button 
                  type="button"
                  className="w-full py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
                >
                  Add Contest
                </button>
              </form>
            </section>
          )}
        </div>
      </main>
    
    </div>
  );
};

export default AdminPage;
