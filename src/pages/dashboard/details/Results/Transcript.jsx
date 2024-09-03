import React from "react";
import transcriptData from "./TranscriptData"
import { Input, Button } from "@material-tailwind/react";

const Transcript = () => {
    return (
        <div className="p-4 md:p-6 space-y-6">
            {/* Left Sidebar with Heading */}
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0s">
                <h2 className="text-xl font-semibold text-gray-800">Transcript with (Patient Name)</h2>

                <div className="flex gap-2">
                    <Input label="search" className="w-full" />
                    <Button className="float-right px-10">Redo</Button>
                </div>
                {/* <Input type="search" className="w-50 max-w-lg float-right"/> */}
            </div>
            <div className="flex items-center mb-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <h2 className="mx-4 text-lg font-semibold text-gray-700 my-4">Transcript</h2>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
            </div>

            {/* Transcript Section */}
            <div className="w-full  bg-white p-4 shadow-lg rounded-lg">
                <div className="space-y-6 divide-y divide-gray-300 h-96 overflow-y-auto p-4 bg-gray-50 rounded-md">
                    {transcriptData.map((entry, index) => (
                        <div key={index} className="py-2">
                            <p className="text-sm text-gray-600">
                                <strong>{entry.speaker}:</strong> {entry.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transcript;
