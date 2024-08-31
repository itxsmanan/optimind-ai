import React, { useState } from "react";
import { Menu, Dropdown, Button, Modal } from "antd";
import { FaPen, FaCopy, FaTrash, FaEllipsisV } from "react-icons/fa";
import Swal from "sweetalert2";

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

const SelectableTabs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleMenuClick = (e, tab) => {

    if (e.key === "edit") {
      console.log(`Edit ${tab}`);
    } else if (e.key === "copy") {
      console.log(`Copy ${tab}`);
    } else if (e.key === "delete") {
      console.log(`Delete ${tab}`);
    }
  };
 const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

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

  const menu = (tab) => (
    <Menu onClick={(e) => handleMenuClick(e, tab)}>
      <Menu.Item key="edit">
        <div className="flex items-center gap-2" onClick={showModal}>
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
        <div className="flex items-center text-red-600 gap-2" onClick={handleDelete}>
          <FaTrash />
          <span>Delete Template</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Summary Settings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tabs.map((tab) => (
          <div
            key={tab}
            className="flex justify-between items-center p-4 cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 border border-gray-300"
          >
            <span className="text-lg font-medium text-gray-800">{tab}</span>
            <Dropdown overlay={menu(tab)} trigger={['click']}>
              <Button type="text" icon={<FaEllipsisV className="text-gray-500" />} />
            </Dropdown>
          </div>
        ))}
      </div>
          <Modal
        title="Currently editing: (Promt Name)"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width="80%"
        className="w-full max-w-7xl"
      >
        <div className="mb-4">
           {/* <h2 className="text-2xl font-semibold mb-1 ">Edit</h2> */}
      {/* <h3 className=" mb-8 text-gray-700">Create a New Template</h3> */}
          {/* <h3 className="text-lg font-medium">Editing</h3> */}
       <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Edit Promt</h2>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          {/* <div className="border-t border-gray-300"></div> */}
        </div>
        <div className="my-10  justify-center w-full">
          {/* <ImportTemplate /> */}
        
          <div className="mb-10">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="templateDescription">
            Summary Content
          </label> */}
          <textarea
            id="summaryContent"
            // value={summaryContent}
            // onChange={(e) => setSummaryContent(e.target.value)}
            className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            // placeholder="Enter Summary Content"
            rows="5"
            required
          />
     <Button
          type="submit"
          className=" bg-blue-500 text-white p-2 rounded float-right  hover:bg-blue-600 transition duration-300"
        >
          Save
        </Button>
        </div>
          {/* <EditTemplate/> */}
        </div>
      </Modal>
    </div>
  );
};

export default SelectableTabs;
