import React, { useState } from "react";
import { Steps, Button, Card } from "antd";
import { FaUser, FaFileAlt, FaCheckCircle, FaTrash } from "react-icons/fa";
import PatientInfromation from "../../widgets/tabs/patientInfromation";
import SetUpTemplates from "../../widgets/tabs/TemplateSelection";
import Results from "../../widgets/tabs/Results/Results";
import { MdLibraryAdd } from "react-icons/md";

const { Step } = Steps;

const steps = [
  {
    title: "Patient Information",
    content: <PatientInfromation />,
    icon: <FaUser size={24} />,
  },
  {
    title: "Select Template",
    content: <SetUpTemplates />,
    icon: <FaFileAlt size={24} />,
  },
  {
    title: "Result",
    content: <Results />,
    icon: <FaCheckCircle size={24} />,
  },
];

const RecordingInformation = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
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
    <div className="container mx-auto">
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between rounded-b-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-extrabold">Current Recording Information</h1>
      </header>

      <div className="lg:flex lg:gap-6">
        <div className="w-full mt-10">

          <Steps current={current} size="large" className="steps-container mb-8">
            {steps.map((step, index) => (
              <Step
                key={index}
                title={
                  <div className="flex items-center" >
                    <div className="mr-2">{step.icon}</div>
                    {step.title}
                  </div>
                }
              />
            ))}
          </Steps>

          <div className="steps-content rounded-lg">
         { current===0&& (
          <div className="flex justify-end w-full pr-10">

  <Button  onClick={addDiv}>
    <MdLibraryAdd />
    Add
  </Button>
          </div>
)}     
            {divs.map((div) => (
              <div key={div.id} className="m-10 shadow-lg bg-white rounded-lg p-10">
                <div className="flex justify-between  mb-2 ">

                  <span className="font-bold">
                    {div.id}
                    </span>
                    {current === 0 && (

                  <FaTrash  onClick={() => deleteDiv(div.id)} className="cursor-pointer text-red-500 " />
                    )}
                </div>
                {steps[current].content}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <Button
              type="default"
              onClick={prev}
              disabled={current === 0}
              className="bg-gray-600 text-white"
            >
              Previous
            </Button>
            <Button
              type="primary"
              onClick={next}
              disabled={current === steps.length - 1}
              className="bg-blue-600 text-white mr-20"
            >
              {current === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordingInformation;
