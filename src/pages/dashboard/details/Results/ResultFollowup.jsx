import React,{useRef, useState} from "react";
import { Button,Input } from "@material-tailwind/react";
import { LuCopyCheck } from "react-icons/lu";
import {   message, Space, Tooltip } from 'antd';
const TranscriptFollowUp = () => {
    
    const followUp = [
        {
            title: "Follow-Up Summary",
            details: "The patient discussed various aspects of their life during the session. They mentioned feeling a mix of nervousness and excitement about starting college soon. The patient shared concerns about their mother's communication style, feeling defensive when questioned about minor actions. They expressed a desire to improve their responses in such situations. The patient also talked about their community involvement and frustrations with drama within it. They acknowledged the need to let go of negative interactions. The patient reflected on their habit of making self-deprecating jokes and seeking attention through them. They recognized the importance of prioritizing self-care and clear communication. The session concluded with the patient expressing readiness for upcoming changes and plans for future communication. Medication prescriptions were discussed, with arrangements made for refills to ensure continuity of care."
        },
        {
            title: "Plan and Follow-up for Continued Care",
            details: "The patient discussed various issues during the session, including struggles with communication and interactions with their mother. They expressed feeling defensive when questioned by their mother and highlighted a pattern of nitpicking and hypersensitivity in their relationship. The patient also mentioned their passive approach to avoid conflict with their mother due to her possessiveness and past issues.Furthermore, the patient shared frustrations with a community they are part of, where controversies and negative behaviors were prevalent. They expressed a desire to steer others in a positive direction but acknowledged the limitations in changing others' behaviors. The patient also recognized the importance of letting go of negative experiences and not holding onto them.The healthcare provider emphasized the significance of clear communication, self-respect, and making healthy choices. They encouraged the patient to prioritize their well-being and avoid self-deprecating jokes or seeking negative attention. The provider also acknowledged the patient's unique ability to solve complex problems like Rubik's cubes and encouraged them to continue making positive choices for themselves.As the session concluded, the provider expressed pride in the patient's progress and encouraged them to keep in touch. They ensured the patient would receive necessary prescriptions and support before their departure. The patient expressed willingness to stay connected and agreed to maintain communication."
        }
    ];

    
   const [messageApi,contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Text coppied',
    });
  };
 const textRef = useRef();
  // Function to handle copy to clipboard
  const copyToClipboard = (text) => {
     // Get text content of the div
    navigator.clipboard.writeText(text) // Copy text to clipboard
      .then(() => {
success()
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
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
            <div className="w-full bg-white p-4  shadow-md h-96 overflow-y-auto rounded-lg">
                {followUp.map((followUps, index) => (
                    <div key={index} className="p-4   border rounded-lg shadow-sm my-3">
                        <div className="flex justify-between mb-2">
                        <h1 className="text-base md:text-lg font-semibold text-gray-700">{followUps.title}</h1>
                         <Tooltip  title={textRef?"copy":"copied"}>
                        <LuCopyCheck onClick={()=>copyToClipboard(followUps.details)} className="cursor-pointer"/> </Tooltip>
                        </div>
                        <p className="text-sm md:text-base" ref={textRef} >{followUps.details}</p>
                        <div className='flex justify-end my-2'><Button className="float-right">Talk to Notes</Button></div>
                    </div>

                ))}
            </div>
                {contextHolder}
        </div>
    );
};

export default TranscriptFollowUp;
