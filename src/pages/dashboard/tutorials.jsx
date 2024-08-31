import React from 'react';

const Tutorials = () => {
  return (
    <div className="w-full mx-auto ">
      {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-b-2xl shadow-lg mb-8">
        <p className="text-lg font-semibold">
          👋 We are actively working on creating more tutorials. In the meantime, feel free to book an onboarding call with us for a personalized walkthrough of our platform.
        </p>
      </div>

      {/* Tutorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Retrieve Patient To-Do Notes</h3>
          <p className="text-gray-900 mb-4">
            This tutorial walks you through the steps to retrieve and manage generated to-do notes for patients using the Task Planner.
          </p>
          <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
            View Tutorial
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Import Templates and Summaries from our Libraries</h3>
          <p className="text-gray-900 mb-4">
            Discover the key differences between templates and summaries and how to effortlessly import these, tailored to your profession from our extensive library.
          </p>
          <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
            View Tutorial
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">High-Level Overview</h3>
          <p className="text-gray-900 mb-4">
            Explore the basics of Optimind-AI with this guide, providing a straightforward overview of how to record your patient encounters and generate the corresponding notes.
          </p>
          <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
            View Tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
