import React, { useState, useRef } from "react";
import { FaStop, FaUpload } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import SetUpTemplates from "../../widgets/tabs/TemplateSelection";
import PatientInfromation from "../../widgets/tabs/patientInfromation";
import Results from "../../widgets/tabs/Results/Results";
import { Button, Input, Option, Select } from "@material-tailwind/react";

const RecordingInformation = () => {
       const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
    if (activeStep < 2) setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep((prevStep) => prevStep - 1);
  };
 
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="w-full p-6 sm:p-8 lg:p-10 mt-10 bg-white shadow-lg rounded-lg">
            <PatientInfromation />
          </div>
        );
      case 1:
        return (
          <div className="w-full p-6 sm:p-8 lg:p-10 mt-10 bg-white shadow-lg rounded-lg">
            <SetUpTemplates />
          </div>
        );
        case 2:
        return (
          <div className="w-full p-6 sm:p-8 lg:p-10 mt-10 bg-white shadow-lg rounded-lg">
            <Results />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto">
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4  sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between rounded-b-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-extrabold">Current Recording Information</h1>
      </header>

      <div className="lg:flex lg:gap-6">
        <div className="w-full">
          {renderStepContent(activeStep)}
          <div className="mt-8 flex justify-between ">
            <Button onClick={handlePrev} disabled={activeStep === 0} className="bg-gray-600 text-white">
              Previous
            </Button>
            <Button onClick={handleNext} hidden={activeStep === 3} disabled={activeStep === 2} className="bg-blue-600 mr-16 text-white">
              {activeStep === 2 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordingInformation;
