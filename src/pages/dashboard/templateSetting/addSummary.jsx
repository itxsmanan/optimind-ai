import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const NewTemplateForm = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateDescription, setTemplateDescription] = useState(''); 
   const [summaryName, setSummaryName] = useState('');
  const [summaryContent, setSummaryContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSummary = {
      summaryName:summaryName,
      summaryContent:summaryContent,
    };
    console.log("New Template Created:", newSummary);
    // Reset form fields

    setSummaryContent(''),
    setSummaryName("")
  };


  return (
    <div className="w-full mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-1 ">Add Summary</h2>
      <h3 className=" mb-8 text-gray-700">Create a New Summary</h3>
       
      <form onSubmit={handleSubmit}>
      
         <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Summary info</h2>
              <div className="flex-grow border-t border-gray-300"></div>
            </div> 
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="templateName">
            Summary Note Name
          </label>
          <input
            id="summaryName"
            type="text"
            value={summaryName}
            onChange={(e) => setSummaryName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter Summary Note Name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="templateDescription">
            Summary Content
          </label>
          <textarea
            id="summaryContent"
            value={summaryContent}
            onChange={(e) => setSummaryContent(e.target.value)}
            className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter Summary Content"
            rows="5"
            required
          />
        
        </div>     
     
        <div className="mb-2" >   
     <Button
          type="submit"
          className="  text-white p-2 py-2 rounded  transition duration-300"
        >
          Create Summary
        </Button>
        </div>

      </form>
    </div>
  );
};

export default NewTemplateForm;
