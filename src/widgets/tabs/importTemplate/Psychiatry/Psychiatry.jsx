import React, { useState } from "react";
import Details from "./details"
const tabs = [
  {
    label: "Medical H&P Note",
    value: "medical-hp-note",
    desc: <Details/>
  },
  {
    label: "Medical SOAP Note",
    value: "medical-soap-note",
    desc: "This is the content for the Medical SOAP Note.",
  },
  {
    label: "Patient Intake Form",
    value: "patient-intake-form",
    desc: "This is the content for the Patient Intake Form.",
  },
  {
    label: "Psychiatry Follow-Up Note",
    value: "psychiatry-follow-up-note",
    desc: "This is the content for the Psychiatry Follow-Up Note.",
  },
  {
    label: "Psychiatry H&P Note",
    value: "psychiatry-hp-note",
    desc: "This is the content for the Psychiatry H&P Note.",
  },
  {
    label: "Psychotherapy Progress Note",
    value: "psychotherapy-progress-note",
    desc: "This is the content for the Psychotherapy Progress Note.",
  },
  {
    label: "Psychotherapy Progress Note - PMIRP",
    value: "psychotherapy-pmirp",
    desc: "This is the content for the Psychotherapy Progress Note - PMIRP.",
  },
  {
    label: "Treatment Plan",
    value: "treatment-plan",
    desc: "This is the content for the Treatment Plan.",
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
        <h2 className="text-xl font-semibold mb-4">Psychiatry Templates</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.value}
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer p-2 rounded-md shadow transition-colors duration-300 ${
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
