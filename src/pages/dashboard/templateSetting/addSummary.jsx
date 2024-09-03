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

  const [divs, setDivs] = useState([{ id: 1, number: 1 }]);
  //add more cards

  // Function to handle adding a new div
  const addDiv = () => {
    const newDiv = { id: divs.length > 0 ? divs[divs.length - 1].id + 1 : 1, number: divs.length + 1 };
    setDivs([...divs, newDiv]); // Add the new div with unique id
  };

  // Function to handle deleting a div by index
  const deleteDiv = (id) => {
    setDivs(divs.filter(div => div.id !== id)); // Remove the div with the specified id
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
          <div className='flex justify-end mb-3'><Button onClick={addDiv}>Add Summary</Button></div>
        <div className="mb-10" >
        {divs.map((div)=>(         
         <div className='bg-gray-200 p-5 my-4 rounded-lg' key={div.id}>
          <textarea
            id="summaryContent"
            className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows="5"
            required
          />
          <div className='text-red-500 cursor-pointer' onClick={()=>deleteDiv(div.id)}> <FaTrash/></div>
          </div>
        ))}
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
