import React, { useState } from "react";
import TherapyDetails from "./TherapyDetails"
const tabs = [
 
  {
    label: "BIRP Therapy Note",
    value: "birp-therapy-note",
    desc: <TherapyDetails/>
  },
  {
    label: "Couples Therapy Note",
    value: "couples-therapy-note",
    desc: "This is the content for the Couples Therapy Note.",
  },
  {
    label: "DAP Text Format",
    value: "dap-text-format",
    desc: "This is the content for the DAP Text Format.",
  },
  {
    label: "DAP Therapy Note",
    value: "dap-therapy-note",
    desc: "This is the content for the DAP Therapy Note.",
  },
  {
    label: "GIRP Note",
    value: "girp-note",
    desc: "This is the content for the GIRP Note.",
  },
  {
    label: "Initial Assessment Note",
    value: "initial-assessment-note",
    desc: "This is the content for the Initial Assessment Note.",
  },
  {
    label: "PIRP Note",
    value: "pirp-note",
    desc: "This is the content for the PIRP Note.",
  },
  {
    label: "Play Therapy Note",
    value: "play-therapy-note",
    desc: "This is the content for the Play Therapy Note.",
  },
  {
    label: "Therapist SOAP Note",
    value: "therapist-soap-note",
    desc: "This is the content for the Therapist SOAP Note.",
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
        <h2 className="text-xl font-semibold mb-4">Therapy Templates</h2>
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

export default Psychiatry;
