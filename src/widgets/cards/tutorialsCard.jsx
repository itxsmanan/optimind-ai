import React from 'react';
import { FaChartLine, FaTasks, FaFileImport } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TutorialsCard() {
  const tutorials = [
    {
      id: 1,
      title: "High-Level Overview of Optimind-AI",
      description: "Step-by-step guide on how to use our platform.",
      icon: <FaChartLine className="text-blue-500" size={50} />
    },
    {
      id: 2,
      title: "Retrieving Patient To-Do Notes",
      description: "Learn how to stay organized by using our task planner.",
      icon: <FaTasks className="text-green-500 " size={50} />

    },
    {
      id: 3,
      title: "Importing Templates and Summaries from our Libraries",
      description: "Learn how to import pre-defined note structures based on your profession.",
      icon: <FaFileImport className="text-red-500" size={50} />
    }
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/tutorials");
  }
  return (
    <div className="w-full mx-auto  p-6 bg-white shadow-md rounded-xl">
      <div className=" mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Tutorials</h2>
        <p className="text-gray-600 mt-2">Learn how to use Optimind-AI as a professional.</p>
      </div>
      <div className="space-y-4">
        {tutorials.map(({ id, title, description, icon }) => (
          <div key={id} className="flex items-start gap-4 p-4  border border-gray-200 rounded-lg shadow-sm cursor-pointer" onClick={handleClick}>
            <div className="flex-shrink-0 mt-1">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
