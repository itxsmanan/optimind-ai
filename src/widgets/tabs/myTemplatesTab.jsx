import React, { useState } from "react";
import { FaFileAlt, FaNotesMedical, FaHeartbeat, FaBrain, FaUserMd, FaFileSignature, FaThermometerHalf, FaStethoscope, FaFileInvoice } from "react-icons/fa";

const templates = [
  { id: 1, name: "Couples Therapy Note", icon: <FaFileAlt /> },
  { id: 2, name: "Medical Follow-Up Note", icon: <FaNotesMedical /> },
  { id: 3, name: "Medical H&P Note", icon: <FaHeartbeat /> },
  { id: 4, name: "Medical SOAP Note", icon: <FaUserMd /> },
  { id: 5, name: "Play Therapy Note", icon: <FaBrain /> },
  { id: 6, name: "Psychiatry Follow-Up Note", icon: <FaFileSignature /> },
  { id: 7, name: "Psychiatry H&P Note", icon: <FaThermometerHalf /> },
  { id: 8, name: "Psychotherapy Progress Note", icon: <FaStethoscope /> },
  { id: 9, name: "Psychotherapy Progress Note - PMIRP", icon: <FaFileInvoice /> },
  { id: 10, name: "Troy Template", icon: <FaFileAlt /> },
  { id: 11, name: "Troy test Template", icon: <FaFileAlt /> },
];

const TemplateTabs = ({ onSelect }) => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleSelect = (template) => {
    setSelectedTab(template.id);
    onSelect(template);
  };

  return (
    <div className="relative  p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Select Template</h2>
      <div className="flex flex-wrap -mx-2">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleSelect(template)}
            className={`flex items-center justify-start w-full sm:w-64 p-4 cursor-pointer rounded-md transition duration-300 ease-in-out mx-2 my-2 ${
              selectedTab === template.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            style={{ height: "70px" }}
          >
            <div className="text-2xl mr-3">{template.icon}</div>
            <span
              className={`text-lg font-medium ${
                selectedTab === template.id ? "text-white" : "text-gray-800"
              }`}
            >
              {template.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateTabs;
