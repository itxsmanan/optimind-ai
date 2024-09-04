import React, { useRef, useState } from "react";
import { Input, Modal, Tooltip } from "antd";
import { LuCopyCheck } from "react-icons/lu";
import { FaStop, FaDownload, FaMicrophone } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { message } from "antd";
import { MdWaves } from "react-icons/md";
import { Button } from "@material-tailwind/react";

const TranscriptFollowUp = () => {
    const [visible, setVisible] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);
    const [selectedFollowUp, setSelectedFollowUp] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const audioChunksRef = useRef([]);
    const [messageApi, contextHolder] = message.useMessage();

     const followUp=[
        {
            title:"Chief Complaint",
            details:"Patient expresses concerns about feeling defensive when questioned by mother about minor actions like rubbing the bottom of a shot glass. They discuss the need to address communication issues and set boundaries with mother. Patient also shares frustrations with online community drama and self-deprecating jokes. Therapist emphasizes the importance of self-respect and clear communication. The session ends with the therapist praising the patient's progress and encouraging them to stay in touch."
        }
        ,{
            title:"Medications",
            details:"Medications taken in the past: Not mentioned Current medications: Vyvanse - 30-day prescription, 3 times a day Medications prescribed during this visit: Another set of prescriptions for Vyvanse to ensure enough supply until mid-September."
        },{
            title:"Assessment and Plan",
            details:`# Assessments - 
            The client expresses mixed emotions related to preparing for college, feeling nervous and excited.            
            - The client struggles with feeling defensive when questioned by their mother, leading to shutdown and apologies. 
            - The client exhibits passive behavior and eggshell walking around their mother due to her possessiveness and past issues.
            - The client engages in self-deprecating humor, potentially seeking attention and negatively comparing themselves to others
            - The client demonstrates strong problem-solving skills and memory retention, particularly evident in solving Rubik's cubes`
        }
    ]

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Text copied',
        });
    };

    const handleStartRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            setMediaRecorder(recorder);

            recorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            recorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioUrl(audioUrl);
                setAudioBlob(audioBlob);
                audioChunksRef.current = [];
            };

            recorder.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Error accessing microphone:", err);
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    const handleRemoveRecording = () => {
        setAudioUrl(null);
        setAudioBlob(null);
    };

    const handleOpenModal = (followUp) => {
        setSelectedFollowUp(followUp);
        setVisible(true);
    };

    const handleCloseModal = () => {
        setVisible(false);
        setSelectedFollowUp(null);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => success())
            .catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <div className="p-4 md:p-6 space-y-6">
            {/* Left Sidebar with Heading */}
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <h2 className="text-xl font-semibold text-gray-800">Medical Follow-Up Notes for (Patient Name)</h2>
                <div className="flex gap-2">
                    <Input placeholder="Search" className="w-full" />
                    <Button className="float-right px-10">Redo</Button>
                </div>
            </div>

            <div className="flex items-center mb-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Summary</h2>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Transcript Section */}
            <div className="w-full bg-white p-4 space-y-6 shadow h-96 overflow-y-auto rounded-lg">
                {followUp.map((followUps) => (
                    <div key={followUps.title} className="px-10 py-2 m-3 rounded-lg shadow-lg divide-y divide-gray-300">
                        <div className="flex justify-between mb-2">
                            <h1 className="text-lg mb-4 font-semibold text-gray-700">{followUps.title}</h1>
                            <Tooltip title="Copy">
                                <LuCopyCheck onClick={() => copyToClipboard(followUps.details)} className="cursor-pointer" />
                            </Tooltip>
                        </div>
                        <p className="py-2">{followUps.details}</p>
                        <div className='flex justify-end my-2'>
                            <Button onClick={() => handleOpenModal(followUps)}  className="mt-3">Talk to Notes</Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
                title={
                    <div className="flex items-center">
                        <span className="mr-2">{selectedFollowUp ? `Talking to ${selectedFollowUp.title}` : 'Talking to Notes'}</span>
                        <FaMicrophone />
                    </div>
                }
                visible={visible}
                onCancel={handleCloseModal}
                footer={null}
                width="80%"
                className="w-full max-w-3xl"
            >
                <div className="flex flex-col w-full space-y-4">
                    <div className="relative">
                        {isRecording && (
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <MdWaves
                                    fill="rgba(0, 0, 0, 0.3)"
                                    paused={false}
                                    options={{
                                        height: 100,
                                        amplitude: 20,
                                        speed: 0.15,
                                        points: 4,
                                    }}
                                />
                            </div>
                        )}
                        <textarea
                            className="w-full h-40 p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your notes here..."
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            {!isRecording ? (
                                <Button onClick={handleStartRecording} className="bg-green-500 text-white rounded-lg py-2 px-4">
                                    Start Recording
                                </Button>
                            ) : (
                                <Button onClick={handleStopRecording} className="bg-red-500 text-white rounded-lg py-2 px-4">
                                    Stop Recording
                                </Button>
                            )}
                            {audioUrl && (
                                <Button onClick={handleRemoveRecording} className="bg-gray-500 text-white rounded-lg py-2 px-4">
                                    <IoMdClose className="inline-block" />
                                </Button>
                            )}
                        </div>
                        {audioUrl && (
                            <Button
                                onClick={() => {
                                    const a = document.createElement("a");
                                    a.href = audioUrl;
                                    a.download = "recorded-audio.wav";
                                    a.click();
                                }}
                                className="bg-gray-500 text-white rounded-lg py-2 px-4"
                            >
                                <FaDownload className="inline-block" /> Download
                            </Button>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <Button className="bg-blue-500 text-white rounded-lg py-2 px-4">Refine Note</Button>
                    </div>
                </div>
            </Modal>

            {contextHolder}
        </div>
    );
};

export default TranscriptFollowUp;
