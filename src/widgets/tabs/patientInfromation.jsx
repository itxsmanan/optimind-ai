import React, { useState, useRef } from "react";
import { FaStop, FaUpload } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import SetUpTemplates from "../../widgets/tabs/TemplateSelection";
import { Button, Input, Option, Select } from "@material-tailwind/react";

function patientInfromation() {

     const [activeStep, setActiveStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null); // For recording
  const [uploadedAudioUrl, setUploadedAudioUrl] = useState(null); // For uploaded audio
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const [showUploadBox, setShowUploadBox] = useState(false);
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      const fileUrl = URL.createObjectURL(file);
      setUploadedAudioUrl(fileUrl); // Store the uploaded file URL
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      const fileUrl = URL.createObjectURL(file);
      setUploadedAudioUrl(fileUrl); // Store the uploaded file URL
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleNext = () => {
    if (activeStep < 2) setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep((prevStep) => prevStep - 1);
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl); // Store the recorded audio URL
        setAudioBlob(audioBlob);
        audioChunksRef.current = [];
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleRemoveRecording = () => {
    setAudioUrl(null); // Clear recorded audio
    setAudioBlob(null);
  };

  const handleRemoveUploadedAudio = () => {
    setUploadedAudioUrl(null); // Clear uploaded audio
    setAudioFile(null);
  };

  return (
    <div className="w-full bg-white  rounded-lg">
            {/* Patient Information */}
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Patient Information</h2>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <Select label="Existing patient">
                  <Option value="Patient one">Patient one</Option>
                  <Option value="Patient two">Patient two</Option>
                  <Option value="Patient three">Patient three</Option>
                </Select>
              </div>
              <div>
                <Input label="New Patient" type="text" />
              </div>
              <div>
                <Input label="Age" type="number" />
              </div>
              <div>
                <Input label="Gender" type="text" />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <Input label="Name of Today's Visit" type="text" />
              </div>
            </div>

            {/* Recording Controls */}
            <div className="flex items-center my-10">
              <div className="flex-grow border-t border-gray-300"></div>
              <h2 className="mx-4 text-lg font-semibold text-gray-700">Recording Controls</h2>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex space-x-4">
                {!isRecording ? (
                  <button
                    onClick={handleStartRecording}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                  >
                    <AiFillAudio size={24} />
                  </button>
                ) : (
                  <button
                    onClick={handleStopRecording}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
                  >
                    <FaStop size={24} />
                  </button>
                )}
                <button

                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Upload
                </button>
                <button
                  onClick={handleRemoveRecording}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                   Clear Recording
                </button>
              </div>

              <div className="w-full max-w-7xl">
                <p
                  className="text-blue-500 my-10 text-center cursor-pointer underline"
                  onClick={() => setShowUploadBox(!showUploadBox)}
                >
                  Click here to upload an audio file
                </p>

                {/* Upload Box */}
                {showUploadBox && (
                  <div
                    className="border-2 border-dashed border-gray-400 p-4 text-center rounded-lg"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <label
                      htmlFor="audio-upload"
                      className="cursor-pointer text-blue-500 block py-20 px-4 rounded-lg transition duration-300"
                    >
                      Drop files here to upload
                    </label>
                    <input
                      type="file"
                      id="audio-upload"
                      accept="audio/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                )}

                {/* Display Recorded Audio */}
                {audioUrl && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">Recorded Audio</h3>
                    <audio controls className="w-full max-w-xs mb-4">
                      <source src={audioUrl} type="audio/wav" />
                      Your browser does not support the audio element.
                    </audio>
                    <button
                      onClick={handleRemoveRecording}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none flex items-center"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                )}

                {/* Display Uploaded Audio */}
                {uploadedAudioUrl && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700">Uploaded Audio</h3>
                    <audio controls  className="w-full max-w-xs mb-4">
                      <source  src={uploadedAudioUrl} type="audio/*" />
                      Your browser does not support the audio element.
                    </audio>
                    <button
                      onClick={handleRemoveUploadedAudio}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none flex items-center"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
  )
}

export default patientInfromation