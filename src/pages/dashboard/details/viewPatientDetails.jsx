import React, { useState } from 'react';

export function Accordion () {
  const sections = [
    { title: 'Section 1', content: 'Content of Section 1' },
    { title: 'Section 2', content: 'Content of Section 2' },
    { title: 'Section 3', content: 'Content of Section 3' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto  rounded-lg">
         <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between rounded-b-2xl shadow-lg">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 text-center lg:text-left">
                    <div className="flex items-center space-x-3 mb-4 lg:mb-0">
                        {/* <FaInfoCircle className="text-3xl sm:text-3xl lg:text-3xl" /> */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold">Visits for (Patient Name)</h1>

                        </div>
                    </div>
                </div>
            </header>
      {/* <h1 className="text-2xl font-bold mb-4 text-gray-800">Accordion Example</h1> */}
      {sections.map((section, index) => (
        <div key={index} className="mb-2">
          <div 
            className={`cursor-pointer p-4 rounded-t-lg border border-gray-300 bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-300 ${openIndex === index ? 'bg-gray-300' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
          </div>
          {openIndex === index && (
            <div className="p-4 border border-t-0 border-gray-300 bg-white rounded-b-lg">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
