import { Button, Input, Typography } from "@material-tailwind/react";
import { Switch } from "antd";
import React, { useState } from "react";

const emailTemplates = [
    "Bullet Point Instruction",
    "Comprehensive Instruction",
    "Concise Instruction",
];

const PatientInstructions = () => {
    const [selectedTab, setSelectedTab] = useState(null);

    const handleToggle = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Centered Title with Dividers */}
            <div className="flex items-center justify-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-lg font-semibold">Selecting and Viewing Email Templates</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Instructions Section */}
            <div className="p-6 bg-white rounded-lg">
                <p className="text-gray-800 mb-4">
                    Instructions: Choose one of the available email templates below for communicating with patients. These templates are designed to facilitate your communication towards patients after the consultation by providing structured and customizable email formats. To view and adjust the content of a template, click on the three dots icon on the right side of the template card. This will allow you to review the template's details and make any necessary modifications to suit your specific needs.
                </p>
                <p className="text-gray-800">
                    Note: Remember, the template you choose will serve as a foundation for your message, which you can personalize further after the session to ensure clear and personalized communication towards your patient.
                </p>
            </div>

            {/* Selectable Tabs Section */}
            <div className="text-center">
                <div className="flex items-center justify-center my-10">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-lg font-semibold">Patient Instruction Templates</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {emailTemplates.map((template) => (
                        <div
                            key={template}
                            onClick={() => handleToggle(template)}
                            className={`flex items-center p-4 cursor-pointer rounded-md transition duration-300 ease-in-out ${
                                selectedTab === template
                                    ? "bg-blue-500 text-white border border-blue-700"
                                    : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
                            }`}
                        >
                            <span
                                className={`text-lg font-medium ${
                                    selectedTab === template
                                        ? "text-white"
                                        : "text-gray-800"
                                }`}
                            >
                                {template}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Email Settings Section */}
            <div className="p-6 bg-white rounded-lg mt-6">
                <div className="flex items-center justify-center mb-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-lg font-semibold">Personalize Your Email Settings</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <p className="text-gray-800">
                    Ensure your communications reflect your professional identity by customizing the sender name and email address for outgoing emails to patients. These settings will be applied to all emails sent from the system, enhancing recognition and trust among your recipients.
                </p>
                <p className="text-gray-800 mt-2">
                    Note: These values act as defaults. You can still customize the sender's name and email for each patient.
                </p>

                {/* Input Fields Section */}
                <div className="flex flex-col md:flex-row gap-4 p-6">
                    <div className="flex-1">
                        <Input
                            size="lg"
                            type="text"
                            label="Sender Name"
                            required
                            className="shadow-md"
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            type="email"
                            size="lg"
                            label="Sender Email"
                            required
                            className="shadow-md"
                        />
                    </div>
                </div>

                {/* Review Link Section */}
                <div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl">
                    <div className="mt-3">
                        <Switch />
                    </div>
                    <Typography className="mt-3">
                        Include a review link in your email
                    </Typography>
                    <div className="flex-1">
                        <Input
                            size="lg"
                            type="text"
                            placeholder="http://www.your-review-link.com"
                            className="shadow-md"
                        />
                    </div>
                </div>

                <Button className="mt-6 float-right transition" type="submit">
                    SAVE SENDER DETAILS
                </Button>
            </div>
        </div>
    );
};

export default PatientInstructions;
