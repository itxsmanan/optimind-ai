import React, { useState } from "react";
import Details from "./details"
import { Button } from "@material-tailwind/react";
const tabs = [
  {
    label: "Assessment and Plan",
    value: "assessment-and-plan",
    desc: <Details/>
  },
  {
    label: "Billing Codes",
    value: "billing-codes",
    desc: "This is the content for Billing Codes.",
  },
  {
    label: "Chief Complaint",
    value: "chief-complaint",
    desc: "This is the content for Chief Complaint.",
  },
  {
    label: "DSM-5-TR-Codes",
    value: "dsm-5-tr-codes",
    desc: "This is the content for DSM-5-TR-Codes.",
  },
  {
    label: "Family & Social History",
    value: "family-social-history",
    desc: "This is the content for Family & Social History.",
  },
  {
    label: "Family & Social History (bullet-point format)",
    value: "family-social-history-bullet-point",
    desc: "This is the content for Family & Social History (bullet-point format).",
  },
  {
    label: "Family & Social History Comprehensive",
    value: "family-social-history-comprehensive",
    desc: "This is the content for Family & Social History Comprehensive.",
  },
  {
    label: "HPI",
    value: "hpi",
    desc: "This is the content for HPI.",
  },
  {
    label: "Medical, Surgical and Hospitalization History",
    value: "medical-surgical-history",
    desc: "This is the content for Medical, Surgical and Hospitalization History.",
  },
  {
    label: "Medications",
    value: "medications",
    desc: "This is the content for Medications.",
  },
  {
    label: "Mental Status Exam",
    value: "mental-status-exam",
    desc: "This is the content for Mental Status Exam.",
  },
  {
    label: "Objective",
    value: "objective",
    desc: "This is the content for Objective.",
  },
  {
    label: "Obstetric, Gynecologic and Immunization History",
    value: "obstetric-gynecologic-history",
    desc: "This is the content for Obstetric, Gynecologic and Immunization History.",
  },
  {
    label: "Patient Summary",
    value: "patient-summary",
    desc: "This is the content for Patient Summary.",
  },
  {
    label: "Plan with Format",
    value: "plan-with-format",
    desc: "This is the content for Plan with Format.",
  },
  {
    label: "Psychiatric History",
    value: "psychiatric-history",
    desc: "This is the content for Psychiatric History.",
  },
  {
    label: "Physical Safety Risks",
    value: "physical-safety-risks",
    desc: "This is the content for Physical Safety Risks.",
  },
  {
    label: "ROS ADHD",
    value: "ros-adhd",
    desc: "This is the content for ROS ADHD.",
  },
  {
    label: "ROS Antisocial and Personality Disorder",
    value: "ros-antisocial-personality-disorder",
    desc: "This is the content for ROS Antisocial and Personality Disorder.",
  },
  {
    label: "ROS Anxiety",
    value: "ros-anxiety",
    desc: "This is the content for ROS Anxiety.",
  },
  {
    label: "ROS Autism",
    value: "ros-autism",
    desc: "This is the content for ROS Autism.",
  },
  {
    label: "ROS Depression",
    value: "ros-depression",
    desc: "This is the content for ROS Depression.",
  },
  {
    label: "ROS Eating Disorder",
    value: "ros-eating-disorder",
    desc: "This is the content for ROS Eating Disorder.",
  },
  {
    label: "ROS General",
    value: "ros-general",
    desc: "This is the content for ROS General.",
  },
  {
    label: "ROS Mania",
    value: "ros-mania",
    desc: "This is the content for ROS Mania.",
  },
  {
    label: "ROS OCD",
    value: "ros-ocd",
    desc: "This is the content for ROS OCD.",
  },
  {
    label: "ROS Psychosis",
    value: "ros-psychosis",
    desc: "This is the content for ROS Psychosis.",
  },
  {
    label: "ROS Trauma",
    value: "ros-trauma",
    desc: "This is the content for ROS Trauma.",
  },
  {
    label: "Review of Results",
    value: "review-of-results",
    desc: "This is the content for Review of Results.",
  },
  {
    label: "Risk Assessment text",
    value: "risk-assessment-text",
    desc: "This is the content for Risk Assessment text.",
  },
  {
    label: "Risk Assessment with response format",
    value: "risk-assessment-response-format",
    desc: "This is the content for Risk Assessment with response format.",
  },
  {
    label: "Sleep Note",
    value: "sleep-note",
    desc: "This is the content for Sleep Note.",
  },
  {
    label: "Subjective",
    value: "subjective",
    desc: "This is the content for Subjective.",
  },
  {
    label: "Substance Use",
    value: "substance-use",
    desc: "This is the content for Substance Use.",
  },
  {
    label: "Tests and Scores",
    value: "tests-and-scores",
    desc: "This is the content for Tests and Scores.",
  },
  {
    label: "Therapeutic Interventions",
    value: "therapeutic-interventions",
    desc: "This is the content for Therapeutic Interventions.",
  },
  {
    label: "Weight Loss Note",
    value: "weight-loss-note",
    desc: "This is the content for Weight Loss Note.",
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
        <h2 className="text-xl font-semibold mb-4">Summaries Psychiatry</h2>
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
