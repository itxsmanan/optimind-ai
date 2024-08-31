import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const tabs = [
  "Assessment and Plan",
  "Chief Complaint",
  "Family & Social History Comprehensive",
  "Medications",
  "Mental Status Exam",
  "Objective",
  "ROS General",
  "Subjective",
  "Substance Use",
  "Therapeutic Interventions",
];

const SelectableTabs = ({ onSelect }) => {
  const [selectedTabs, setSelectedTabs] = useState([]);

  const handleToggle = (tab) => {
    const isSelected = selectedTabs.includes(tab);
    const newSelectedTabs = isSelected
      ? selectedTabs.filter((item) => item !== tab)
      : [...selectedTabs, tab];
      
    setSelectedTabs(newSelectedTabs);
    onSelect(newSelectedTabs);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Summarization Controls
</h2>
      <div className="flex flex-wrap space-x-3 ">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleToggle(tab)}
            className={`flex items-center p-2 mt-3 cursor-pointer rounded-md transition duration-300 ease-in-out ${
              selectedTabs.includes(tab)
                ? "bg-blue-500 text-white border border-blue-700"
                : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
            }`}
          >
            <div className="mr-3">
              {selectedTabs.includes(tab) ? (
                <FaToggleOn className="text-white" size={30}/>
              ) : (
                <FaToggleOff className="text-gray-500" size={30}/>
              )}
            </div>
            <span className={`text-lg font-medium ${selectedTabs.includes(tab) ? "text-white" : "text-gray-800"}`}>
              {tab}
              
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectableTabs;
