import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const NewTemplateForm = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateDescription, setTemplateDescription] = useState(''); 
   const [summaryName, setSummaryName] = useState('');
  const [summaryContent, setSummaryContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTemplate = {
      tempName: templateName,
      tempDescription: templateDescription,
      summaryName:summaryName,
      summaryContent:summaryContent,
    };
    console.log("New Template Created:", newTemplate);
    // Reset form fields
    setTemplateName('');
    setTemplateDescription('');
    setSummaryContent(''),
    setSummaryName("")
  };

  return (
    <div className="w-full mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-1 ">New Template</h2>
      <h3 className=" mb-8 text-gray-700">Create a New Template</h3>
       <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Template info</h2>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="templateName">
            Template Name
          </label>
          <input
            id="templateName"
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter template name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="templateDescription">
            Template Description
          </label>
          <textarea
            id="templateDescription"
            value={templateDescription}
            onChange={(e) => setTemplateDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter template description"
            rows="4"
            required
          />
        </div>
         <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Add Summary Notes</h2>
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
            placeholder="Enter Summary Note Name
"
            required
          />
        </div>
        <div className="mb-10">
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
        
        </div>     <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Include Summaries</h2>
              <div className="flex-grow border-t border-gray-300"></div>
            </div> 
      
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
          Create Template
        </Button>
        </div>
      </form>
    </div>
  );
};

export default NewTemplateForm;
