import React, { useState, useRef } from "react";
import { FaStop, FaUpload, FaDownload } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import SetUpTemplates from "../../widgets/tabs/TemplateSelection";
import { Button, Input, Option, Select } from "@material-tailwind/react";

function PatientInformation() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null); 
  const [uploadedAudioUrl, setUploadedAudioUrl] = useState(null);
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
      setUploadedAudioUrl(fileUrl);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      const fileUrl = URL.createObjectURL(file);
      setUploadedAudioUrl(fileUrl);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
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
        setAudioUrl(audioUrl);
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
    setAudioUrl(null);
    setAudioBlob(null);
  };

  const handleRemoveUploadedAudio = () => {
    setUploadedAudioUrl(null);
    setAudioFile(null);
  };

  const handleDownloadAudio = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "recorded-audio.wav";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg p-6">
      {/* Patient Information Form */}
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

      {/* Audio Recording & Upload */}
      <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {!isRecording ? (
          <Button
            onClick={handleStartRecording}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            <AiFillAudio size={24} />
          </Button>
        ) : (
          <Button
            onClick={handleStopRecording}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            <FaStop size={24} />
          </Button>
        )}
        <Button
          className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          <FaUpload size={20} className="mr-2" /> Upload
        </Button>
        <Button
          onClick={handleRemoveRecording}
          className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          <IoRefresh size={20} className="mr-2" /> Clear Recording
        </Button>
      </div>

      {/* Audio Player */}
      {audioUrl && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Recorded Audio</h3>
          <audio controls className="w-full max-w-xs mb-4">
            <source src={audioUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <div className="flex space-x-4">
            <Button
              onClick={handleDownloadAudio}
              className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-2 px-10 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              <FaDownload size={20} className="mr-2" />
            </Button>
            <Button
              onClick={handleRemoveRecording}
              className="text-gray-500 hover:text-gray-700 focus:outline-none flex items-center"
            >
              <FiX size={24} />
            </Button>
          </div>
        </div>
      )}

      {uploadedAudioUrl && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Uploaded Audio</h3>
          <audio controls className="w-full max-w-xs mb-4">
            <source src={uploadedAudioUrl} type="audio/*" />
            Your browser does not support the audio element.
          </audio>
          <Button
            onClick={handleRemoveUploadedAudio}
            className="text-gray-500 hover:text-gray-700 focus:outline-none flex items-center"
          >
            <FiX size={24} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default PatientInformation;
