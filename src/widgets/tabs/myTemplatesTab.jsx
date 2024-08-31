import React, { useState } from "react";
import { FaFileAlt, FaNotesMedical, FaHeartbeat, FaBrain, FaUserMd, FaFileSignature, FaThermometerHalf, FaStethoscope, FaFileInvoice, FaFileImport } from "react-icons/fa";
import { Modal, Button } from "antd";

import  ImportTemplate  from "./importTemplate/importTemplateTabs";

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelect = (template) => {
    setSelectedTab(template.id);
    onSelect(template);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="relative bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Select Template</h2>
      <div className="flex flex-wrap space-x-3 space-y-3">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleSelect(template)}
            className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ease-in-out ${
              selectedTab === template.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <div className="text-xl mr-1">{template.icon}</div>
            <span className={`text-lg font-medium ${selectedTab === template.id ? "text-white" : "text-gray-800"}`}>
              {template.name}
            </span>
          </div>
        ))}
        <div
          onClick={showModal}
          className="flex items-center p-4 cursor-pointer bg-gray-100 rounded-md text-gray-500 transition duration-300 ease-in-out"
        >
          <div className="text-lg mr-3 font-medium flex gap-3">
            <FaFileImport className="mt-1" />
            Import from library
          </div>
        </div>
      </div>

      {/* Antd Modal */}
      <Modal
        title="Templates Library"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width="80%"
        className="w-full max-w-7xl"
      >
        <div className="text-center mb-4">
          <h3 className="text-lg font-medium">Choose your profession</h3>
          <div className="border-t border-gray-300"></div>
        </div>
        <div className="my-10  justify-center w-full">
          <ImportTemplate />
        </div>
      </Modal>
    </div>
  );
};

export default TemplateTabs;
