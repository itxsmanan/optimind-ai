import React, { useRef } from "react";
// import transcriptData from "./TranscriptData"
import { Input, Button } from "@material-tailwind/react";
import { message, Tooltip } from "antd";
import { LuCopyCheck } from "react-icons/lu";


const TranscriptFollowUp = () => {


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
            - The client demonstrates strong problem-solving skills and memory retention, particularly evident in solving Rubik's cubes"`
        }
    ]
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
            {/* Left Sidebar with Heading */}
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <h2 className="text-xl font-semibold text-gray-800">Medical Follow-Up Notes for  (Patient Name)</h2>

                <div className="flex gap-2">
                    <Input label="search" className="w-full" />
                    <Button className="float-right px-10">Redo</Button>
                </div>
                {/* <Input type="search" className="w-50 max-w-lg float-right"/> */}
            </div>
            <div className="flex items-center mb-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Summary</h2>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
            </div>

            {/* Transcript Section */}
            <div className="w-full bg-white p-4 space-y-6 shadow  h-96 overflow-y-auto rounded-lg">
                {followUp.map((followUps)=>(
                    
                   <div className="px-10 py-2 m-3 rounded-lg shadow-lg divide-y divide-gray-300">
                    <div className="flex justify-between mb-2">
                    <h1 className="text-lg mb-4 font-semibold text-gray-700">{followUps.title}</h1>
                         <Tooltip  title={textRef?"copy":"copied"}>
                        <LuCopyCheck onClick={()=>copyToClipboard(followUps.details)} className="cursor-pointer"/> </Tooltip>
                        </div>
                    <p className="py-2">{followUps.details}</p>
                    <div className="my-10 py-2">
                    <Button className="float-right">Talk to Notes</Button>

                    </div>
                    </div>
                
                ))}
            </div>
            {contextHolder}
        </div>
    );
};

export default TranscriptFollowUp;
