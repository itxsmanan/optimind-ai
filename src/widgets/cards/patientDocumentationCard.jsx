import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AutoDeleteConfigCard() {
  const [days, setDays] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectChange = (e) => {
    setDays(e.target.value);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setDays(e.target.value);
  };

  const handleClear = () => {
    setDays("");
    setIsEditing(true); // Switch to input mode when clearing
  };

  const handleSave = () => {
    const numDays = parseInt(days, 10);
    if (numDays > 0) {
      console.log(`Configuration saved: Auto-delete after ${numDays} days`);
    } else {
      console.log("Please enter a valid number of days");
    }
  };

  return (
    <div className="w-full  mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Auto Delete Patient Documentation
        </h2>
        <p className="text-gray-600 mt-2 text-left">
          Set a period after which patient documents are automatically deleted.
          If no period is specified, documents are auto-deleted 30 days after
          the patient's last visit.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <div className="relative flex-grow w-full md:w-auto md:flex-1 mb-4 md:mb-0">
          {isEditing ? (
            <input
              id="days"
              type="number"
              value={days}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 text-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter days"
            />
          ) : (
            <select
              id="days"
              value={days}
              onChange={handleSelectChange}
              className="border border-gray-300 rounded-lg pl-3 pr-10 py-2  text-gray-700 text-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select days</option>
              <option value="1">1 Day</option>
              <option value="7">7 Days</option>
              <option value="30">30 Days</option>
              <option value="60">60 Days</option>
              <option value="90">90 Days</option>
            </select>
          )}
          {days && (
            <button
              onClick={handleClear}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <FaTimes className="h-5 w-5 mr-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        <button
          onClick={handleSave}
          className="w-full md:w-auto bg-gray-900 text-white font-semibold ml-2 py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          Save Configuration
        </button>
      </div>
    </div>
  );
}
