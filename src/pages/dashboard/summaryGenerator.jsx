import React, { useState } from 'react';
import { FaDownload, FaInfoCircle, FaClipboard, FaMailBulk } from 'react-icons/fa';
import { Tooltip, Modal, Button, Input, Form, notification } from 'antd'; // Ant Design components for modal, form, and notifications
import { Typography } from '@material-tailwind/react';

const HeaderWithDropdown = () => {
    const [showSummarySection, setShowSummarySection] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [summaryText, setSummaryText] = useState(
        "Patient Name: Abid Hussain. Review any side effects experienced: Inquire about any adverse effects from current medications and adjust treatment accordingly. Educate patient on self-monitoring techniques: Provide guidance on how to track symptoms at home for better disease management."
    );
    const [modalSummaryText, setModalSummaryText] = useState(summaryText);

    const handleRetrieveNotesClick = () => {
        setShowSummarySection(true);
    };

    const handleCopySummary = () => {
        navigator.clipboard.writeText(summaryText);
        notification.success({
            message: 'Copied!',
            description: 'The summary has been copied to your clipboard.',
            placement: 'bottomRight',
        });
    };

    const handleModalOpen = () => {
        setModalSummaryText(summaryText);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleSendEmail = (values) => {
        // Implement the email sending logic here
        console.log('Sending email with summary:', values);
        notification.success({
            message: 'Email Sent',
            description: 'The summary has been sent successfully!',
        });
        setModalVisible(false);
    };

    return (
        <div className="relative">
            <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between rounded-b-2xl shadow-lg">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 text-center lg:text-left">
                    <div className="flex items-center space-x-3 mb-4 lg:mb-0">
                        <FaInfoCircle className="text-3xl sm:text-3xl lg:text-3xl" />
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold">Patient Plan's Summary Generator</h1>

                        </div>
                    </div>
                </div>
            </header>

            <div className="w-full flex flex-col items-center bg-white text-gray-800 py-6 sm:py-8 mt-6 rounded-lg shadow-lg z-10">
                <div className="flex flex-col sm:flex-row items-center mb-6 w-full max-w-4xl px-4">
                    <span className="flex-1 border-t border-gray-300"></span>
                    <span className="bg-gray-200 px-4 py-2 rounded-xl mx-4 text-gray-800 text-base sm:text-lg font-semibold">
                        Choose your TimeFrame
                    </span>
                    <span className="flex-1 border-t border-gray-300"></span>
                </div>
                <p className="text-base sm:text-lg mb-4 text-center px-4">
                    Select the timeframe to retrieve To-Do notes for patients seen during this period.
                </p>
                <div className="w-full max-w-md px-4 sm:px-6">
                    <select
                        className="bg-gray-800 text-white border border-gray-600 py-2 px-4 rounded-lg w-full mb-6 transition-all ease-in-out duration-300"
                        style={{ maxWidth: '100%' }}
                    >
                        <option value="past7hours">Past 7 Hours</option>
                        <option value="past12hours">Past 12 Hours</option>
                        <option value="past15hours">Past 15 Hours</option>
                        <option value="past18hours">Past 18 Hours</option>
                    </select>
                </div>
                <div className="flex flex-col sm:flex-row items-center mb-6 w-full max-w-4xl px-4">
                    <span className="flex-1 border-t border-gray-300"></span>
                    <span className="bg-gray-200 px-4 py-2 rounded-xl mx-4 text-gray-800 text-base sm:text-lg font-semibold">
                        Display all notes within selected timeframe
                    </span>
                    <span className="flex-1 border-t border-gray-300"></span>
                </div>
                <button
                    onClick={handleRetrieveNotesClick}
                    className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md"
                >
                    <FaDownload className="inline-block mr-2" /> Retrieve To-Do Notes
                </button>

                {showSummarySection && (
                    <div className="w-full max-w-4xl bg-gray-100 p-4 mt-6 rounded-lg shadow-md relative">
                        <textarea
                            onChange={(e) => setSummaryText(e.target.value)}
                            className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            value={summaryText}
                        />
                        <Tooltip title="Copy!">
                            <FaClipboard
                                onClick={handleCopySummary}
                                className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-gray-700"
                                size={24}
                            />
                        </Tooltip>
                        <button
                            onClick={handleModalOpen}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md mt-6"
                        >
                            <FaMailBulk className="inline-block mr-2" /> SEND AS EMAIL
                        </button>
                    </div>
                )}
            </div>

            <Modal
                title="Send Summary via Email"
                visible={modalVisible}
                onCancel={handleModalClose}
                footer={null}
                className="email-modal"
            >
                <Typography className='text-sm'>
                    This email will be send via our custom, white-labeled and HIPAA compliant service.</Typography>
<Typography className='text-sm'>
                    The receiver's email is deleted immediatly after the email has been send.</Typography>
                <Form
                    layout="vertical"
                    onFinish={handleSendEmail}
                    className="space-y-4"
                >
                    <Form.Item
                        label="Email Subject"
                        name="subject"
                        rules={[{ required: true, message: 'Please enter subject' }]}
                    >
                        <Input placeholder="Subject..." type="email" />
                    </Form.Item>
                    <Form.Item
                        label="Sender name"
                        name="senderName"
                         rules={[{ required: true, message: 'Please enter sender name' }]}
                    >
                        <Input placeholder="Enter sender name" type="email" />
                    </Form.Item>   
                    <Form.Item
                        label="Receiver's email"
                        name="receiverEmail"
                         rules={[{ required: true, message: 'Please enter receiver email' }]}
                    >
                        <Input placeholder="Enter receiver's email" type="email" />
                    </Form.Item>
                    <Form.Item
                        label="Email content"
                        name="emailContent"
                        rules={[{ required: true, message: 'Email content is missing' }]}
                    >
                        <Input.TextArea
                            rows={4}
                            value={modalSummaryText}
                            onChange={(e) => setModalSummaryText(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className="mr-4">
                            Send
                        </Button>
                        <Button onClick={handleModalClose}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default HeaderWithDropdown;
