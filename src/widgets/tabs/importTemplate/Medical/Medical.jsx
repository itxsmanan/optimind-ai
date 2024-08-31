import React, { useState } from "react";
import MedicalDetails from "./MedicalDetails"
const tabs = [
  {
    label: "New Patient Exam",
    value: "new-Patient-Exam",
    desc: <MedicalDetails/>
  },
  {
    label: "Sick Visit",
    value: "sick-visit",
    desc: "This is the content for the Sick Visit",
  },
  {
    label: "Well Visit",
    value: "well-Visit",
    desc: "This is the content for the Well Visit.",
  },




];

const Medical = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className="w-1/4 p-4 ">
        <h2 className="text-xl font-semibold mb-4"> Templates For Medical</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.value}
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer p-2 shadow rounded-md transition-colors duration-300 ${
                activeTab.value === tab.value
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-8">
        <h2 className="text-2xl font-bold mb-4">{activeTab.label}</h2>
        <div className="p-2 ">
          <p>{activeTab.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Medical;
