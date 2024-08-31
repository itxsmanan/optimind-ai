import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { FaChevronDown } from "react-icons/fa";

export default function AccordionBasicExample() {
    const faqData = [
        {
            id: "element1",
            title: "How do you secure data?",
            content:
                "Absolutely. Our application adheres to HIPAA and GDPR standards, ensuring that your data, as well as your patients' data, is secured both in rest and at transit. Access is strictly limited to authorized users, guaranteeing the privacy and confidentiality of your information.",
        },
        {
            id: "element2",
            title: "What services do you use for transcription and summarization?",
            content:
                "We use Deepgram for our transcription services, which is renowned for its state-of-the-art speech-to-text capabilities and its leading position in the market. For summarizations, we utilize the cutting-edge GPT models to ensure high-quality and accurate results. Note: Recently Anthropic (one of GPT's main competitors) released a more accurate model. We are planning to switch to this provider soon.",
        },
        {
            id: "element3",
            title: "How can I reset my password?",
            content:
                'To reset your password, please navigate to the "Account Settings" page within our app. There, you\'ll find the option to reset your password. If you\'ve signed up using third-party providers like Google, follow their procedures to reset your password.',
        },
        {
            id: "element4",
            title: "How are transcripts and summarizations saved?",
            content:
                "All transcripts and summarizations are saved automatically and are associated with the respective visit/session for a patient. These records can be accessed in the Database page of our app, where each patient has a dedicated record that includes all visits/sessions, each timestamped for your convenience.",
        },
        {
            id: "element5",
            title: "Do I need special equipment for voice recording?",
            content:
                "There's no special equipment required. Our voice recording feature is designed to work seamlessly with the built-in microphone on your desktop, mobile device, or tablet, ensuring accurate and clear recordings.",
        },
        {
            id: "element6",
            title: "How can I get assistance with summarizations?",
            content:
                "Our AI assistant is ready to help you. Accessible via the chat icon at the bottom right of our app, the assistant will guide you in crafting optimized prompts to ensure our AI models can effectively meet your summarization needs.",
        },
        {
            id: "element7",
            title: "Can I customize summarization templates?",
            content:
                "Yes, you can. Based on the profession you select during account setup, we provide a range of summarization templates crafted with input from real-world experts. You are free to customize, add, or delete prompts, and there's no limit to the number of prompts you can have.",
        }
    ];


    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value) => {
        setActiveElement((prev) => (prev === value ? "" : value));
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-8xl ">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-b-2xl p-8  shadow-lg ">
                    <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold">Frequently Asked Questions</h2>
                    <p className="mb-8">
                        Have any questions? Find your answers below or reach out to our AI assistant.
                    </p>
                </div>

                <div className="dark:bg-neutral-800 rounded-xl shadow-lg mt-10 p-4">
                    <div id="accordionExample" className="space-y-4">
                        {faqData.map((faq) => (
                            <div
                                key={faq.id}
                                className="rounded-lg border border-neutral-200 dark:border-neutral-600  dark:bg-neutral-800"
                            >
                                <h2 className="mb-0" id={`heading${faq.id}`}>
                                    <button
                                        className={`${activeElement === faq.id
                                                ? "text-primary dark:text-primary-400"
                                                : "text-neutral-800 dark:text-white"
                                            } flex justify-between items-center w-full px-6 py-4 text-left text-xl font-medium rounded-lg transition-all duration-300 focus:outline-none`}
                                        onClick={() => handleClick(faq.id)}
                                    >
                                        {faq.title}
                                        <FaChevronDown
                                            className={`transition-transform duration-300 ${activeElement === faq.id ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                </h2>
                                <TECollapse show={activeElement === faq.id}>
                                    <div className="px-6 py-4">{faq.content}</div>
                                </TECollapse>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
