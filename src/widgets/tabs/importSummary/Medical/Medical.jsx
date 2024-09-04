import React, { useState } from "react";
import MedicalDetails from "./MedicalDetails"
import { Button } from "@material-tailwind/react";
const tabs = [
  {
    label: "Allergies",
    value: "allergies",
    desc: <MedicalDetails/>
  },
  {
    label: "Assessment",
    value: "assessment",
    desc: "This is the content for Assessment.",
  },
  {
    label: "CPT Recommendations",
    value: "cpt-recommendations",
    desc: "This is the content for CPT Recommendations.",
  },
  {
    label: "Chief Complaint",
    value: "chief-complaint",
    desc: "This is the content for Chief Complaint.",
  },
  {
    label: "Current Medications",
    value: "current-medications",
    desc: "This is the content for Current Medications.",
  },
  {
    label: "Dietary Changes",
    value: "dietary-changes",
    desc: "This is the content for Dietary Changes.",
  },
  {
    label: "Follow-Up",
    value: "follow-up",
    desc: "This is the content for Follow-Up.",
  },
  {
    label: "HPI & Health Concern",
    value: "hpi-health-concern",
    desc: "This is the content for HPI & Health Concern.",
  },
  {
    label: "Health Screeners",
    value: "health-screeners",
    desc: "This is the content for Health Screeners.",
  },
  {
    label: "ICD-10 Recommendations",
    value: "icd-10-recommendations",
    desc: "This is the content for ICD-10 Recommendations.",
  },
  {
    label: "Lifestyle Changes",
    value: "lifestyle-changes",
    desc: "This is the content for Lifestyle Changes.",
  },
  {
    label: "Mental Health History",
    value: "mental-health-history",
    desc: "This is the content for Mental Health History.",
  },
  {
    label: "Past Medical History",
    value: "past-medical-history",
    desc: "This is the content for Past Medical History.",
  },
  {
    label: "Past Surgical History",
    value: "past-surgical-history",
    desc: "This is the content for Past Surgical History.",
  },
  {
    label: "Physical Exam",
    value: "physical-exam",
    desc: "This is the content for Physical Exam.",
  },
  {
    label: "Plan",
    value: "plan",
    desc: "This is the content for Plan.",
  },
  {
    label: "Prescriptions",
    value: "prescriptions",
    desc: "This is the content for Prescriptions.",
  },
  {
    label: "Previous Medications",
    value: "previous-medications",
    desc: "This is the content for Previous Medications.",
  },
  {
    label: "ROS Medical",
    value: "ros-medical",
    desc: "This is the content for ROS Medical.",
  },
  {
    label: "Referrals",
    value: "referrals",
    desc: "This is the content for Referrals.",
  },
  {
    label: "Reproductive History",
    value: "reproductive-history",
    desc: "This is the content for Reproductive History.",
  },
  {
    label: "Social History",
    value: "social-history",
    desc: "This is the content for Social History.",
  },
  {
    label: "Specialists",
    value: "specialists",
    desc: "This is the content for Specialists.",
  },
  {
    label: "Vital Signs",
    value: "vital-signs",
    desc: "This is the content for Vital Signs.",
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
        <h2 className="text-xl font-semibold mb-4"> Summaries For Medical</h2>
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

export default Medical;
