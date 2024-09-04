import React, { useState } from "react";
import TherapyDetails from "./TherapyDetails"
import { Button } from "@material-tailwind/react";
const tabs = [

  {
    label: "Client Responses",
    value: "client-responses",
     desc: <TherapyDetails/>
  },
  {
    label: "Discussions",
    value: "discussions",
    desc: "This is the content for Discussions.",
  },
  {
    label: "History of Present Problems (HPP)",
    value: "history-of-present-problems",
    desc: "This is the content for History of Present Problems (HPP).",
  },
  {
    label: "Homework",
    value: "homework",
    desc: "This is the content for Homework.",
  },
  {
    label: "Relationship Dynamics",
    value: "relationship-dynamics",
    desc: "This is the content for Relationship Dynamics.",
  },
  {
    label: "Therapy Session Summary",
    value: "therapy-session-summary",
    desc: "This is the content for Therapy Session Summary.",
  },
];


const Psychiatry = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className="w-1/4  p-4 ">
        <h2 className="text-xl font-semibold mb-4">Summaries for Therapy</h2>
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
       <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">{activeTab.label}</h2>
        <Button>{`Import ${activeTab.label}`} </Button>
      </div>
        <div className="p-2 ">
          <p>{activeTab.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Psychiatry;
