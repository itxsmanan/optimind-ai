import React, { useRef, useState } from "react";
import { Input, Modal, Tooltip } from "antd";
import { LuCopyCheck } from "react-icons/lu";
import { FaStop, FaDownload, FaWaveSquare, FaSpeakerDeck, FaMicrophone } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { message } from "antd";
import { MdWaves } from "react-icons/md";
import { Button } from "@material-tailwind/react";
// import Wave from "react-wavify";

const TranscriptFollowUp = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [visible, setVisible] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);
    const [selectedFollowUp, setSelectedFollowUp] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const audioChunksRef = useRef([]);

    const followUp = [
        {
            title: "Follow-Up Summary",
            details: "The patient discussed various aspects of their life during the session. They mentioned feeling a mix of nervousness and excitement about starting college soon. The patient shared concerns about their mother's communication style, feeling defensive when questioned about minor actions. They expressed a desire to improve their responses in such situations. The patient also talked about their community involvement and frustrations with drama within it. They acknowledged the need to let go of negative interactions. The patient reflected on their habit of making self-deprecating jokes and seeking attention through them. They recognized the importance of prioritizing self-care and clear communication. The session concluded with the patient expressing readiness for upcoming changes and plans for future communication. Medication prescriptions were discussed, with arrangements made for refills to ensure continuity of care.",
        },
        {
            title: "Plan and Follow-up for Continued Care",
            details: "The patient discussed various issues during the session, including struggles with communication and interactions with their mother. They expressed feeling defensive when questioned by their mother and highlighted a pattern of nitpicking and hypersensitivity in their relationship. The patient also mentioned their passive approach to avoid conflict with their mother due to her possessiveness and past issues.Furthermore, the patient shared frustrations with a community they are part of, where controversies and negative behaviors were prevalent. They expressed a desire to steer others in a positive direction but acknowledged the limitations in changing others' behaviors. The patient also recognized the importance of letting go of negative experiences and not holding onto them.The healthcare provider emphasized the significance of clear communication, self-respect, and making healthy choices. They encouraged the patient to prioritize their well-being and avoid self-deprecating jokes or seeking negative attention. The provider also acknowledged the patient's unique ability to solve complex problems like Rubik's cubes and encouraged them to continue making positive choices for themselves.As the session concluded, the provider expressed pride in the patient's progress and encouraged them to keep in touch. They ensured the patient would receive necessary prescriptions and support before their departure. The patient expressed willingness to stay connected and agreed to maintain communication.",
        }
    ];

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
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    Medical Follow-Up Notes for (Patient Name)
                </h2>
                <div className="flex space-x-2">
                    <Input label="Search" className="w-full md:w-auto" />
                    <Button className="px-6">Redo</Button>
                </div>
            </div>

            {/* Divider with Title */}
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <h2 className="mx-4 text-base md:text-lg font-semibold text-gray-700">Template</h2>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Follow-Up Details */}
            <div className="w-full bg-white p-4 shadow-md h-96 overflow-y-auto rounded-lg">
                {followUp.map((followUps, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-sm my-3 divide-y divide-gray-300">
                        <div className="flex justify-between mb-2">
                            <h1 className="text-base md:text-lg font-semibold text-gray-700">{followUps.title}</h1>
                            <Tooltip title="Copy">
                                <LuCopyCheck onClick={() => copyToClipboard(followUps.details)} className="cursor-pointer" />
                            </Tooltip>
                        </div>
                        <p className="text-sm md:text-base">{followUps.details}</p>
                        <div className='flex justify-end my-2'>
                            <Button onClick={() => handleOpenModal(followUps)} className="mt-3">Talk to Notes</Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
                title={
                    <div className="flex items-center">
                        <span className="mr-2">Talking to Therapist's Observations</span>
                        <FaMicrophone/>
                    </div>
                    
                }
                visible={visible}
                onCancel={handleCloseModal}
                footer={null}
                width="80%"
        className="w-full max-w-3xl"
            >
                <div className="flex flex-col w-full space-y-4">
                   
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
