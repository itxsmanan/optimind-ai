import React, { useState } from "react";
import { FaFileAlt, FaNotesMedical, FaHeartbeat, FaBrain, FaUserMd, FaFileSignature, FaThermometerHalf, FaStethoscope, FaFileInvoice, FaFileImport, FaEllipsisV, FaPen, FaCopy, FaTrash } from "react-icons/fa";
import { Modal, Button, Dropdown, Menu } from "antd";

import ImportTemplate from "../../../widgets/tabs/importTemplate/importTemplateTabs";
import EditTemplate from "./editTemplate"
import Swal from "sweetalert2";
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

const TemplateTabs = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);


    const handleDelete=()=>{
    Swal.fire({
  title: "Are you sure?",
  text: "",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
      const showEditModal = () => {
        setIsEditModalVisible(true);
    };

    const handleCancelEdit = () => {
        setIsEditModalVisible(false);
    };

    const handleMenuClick = (e, template) => {
        console.log(`${e.key} clicked for template: ${template.name}`);
        // Add your handling logic for Edit, Copy, and Delete
    };

    const menu = (template) => (
        <Menu onClick={(e) => handleMenuClick(e, template)}>
            <Menu.Item key="edit">
                <div className="flex items-center gap-2" onClick={showEditModal}>
                    <FaPen />
                    <span>Edit Template</span>
                </div>
            </Menu.Item>
            <Menu.Item key="copy">
                <div className="flex items-center gap-2">
                    <FaCopy />
                    <span>Copy Template</span>
                </div>
            </Menu.Item>
            <Menu.Item key="delete">
                <div className="flex text-red-800 items-center gap-2" onClick={handleDelete}>
                    <FaTrash />
                    <span className="text-red-900">Delete</span>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="relative bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Template Settings</h2>
            <div className="flex flex-wrap justify-between gap-4">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="flex items-center justify-between p-4 w-full md:w-[30%] bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                        <div className="flex items-center">
                            <div className="text-xl mr-3">{template.icon}</div>
                            <span className="text-lg font-medium text-gray-800">{template.name}</span>
                        </div>
                        <Dropdown overlay={menu(template)} trigger={['click']}>
                            <FaEllipsisV className="cursor-pointer text-gray-500 hover:text-gray-800" />
                        </Dropdown>
                    </div>
                ))}
                <div
                    onClick={showModal}
                    className="flex items-center justify-center p-4 w-full md:w-[30%] cursor-pointer bg-gray-100 rounded-md text-gray-500 hover:bg-gray-200"
                >
                    <div className="text-lg font-medium flex items-center gap-3">
                        <FaFileImport />
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
                <div className="my-10 justify-center w-full">
                    <ImportTemplate />
                </div>
            </Modal>

             {/* Antd Modal */}
      <Modal
        title="Currently editing: (Template Name)"
        visible={isEditModalVisible}
        onCancel={handleCancelEdit}
        footer={null}
        centered
        width="80%"
        className="w-full max-w-7xl"
      >
        <div className="text-center mb-4">
          <h3 className="text-lg font-medium">Editing</h3>
          <div className="border-t border-gray-300"></div>
        </div>
        <div className="my-10  justify-center w-full">
          {/* <ImportTemplate /> */}
          Click one of the summaries to view details and edit. You can also drag and drop to change their order.
          <EditTemplate/>
        </div>
      </Modal>
        </div>
    );
};

export default TemplateTabs;
