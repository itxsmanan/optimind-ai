import React, { useState } from 'react';
import { FaTag } from 'react-icons/fa';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <div className="w-full mx-auto 6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8 rounded-b-2xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-center">See Our Pricing</h2>
        <p className="mb-6 text-center">You can check our pricing plan</p>
        <div className="flex justify-center border-spacing-2 p-1 border-gray  w-full rounded-3xl">
          <button
            onClick={() => setActiveTab('monthly')}
            className={`py-2 px-6 font-semibold text-lg rounded-3xl ${activeTab === 'monthly'
              ? 'bg-white text-gray-600 border-b-2 border-gray-600'
              : 'text-gray-200'
              }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setActiveTab('annual')}
            className={`py-2 px-6 font-semibold text-lg rounded-3xl ${activeTab === 'annual'
              ? 'bg-white text-gray-600 border-b-2 border-gray-600'
              : 'text-gray-200'
              }`}
          >
            Annual
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'monthly' && (
          <>
            {/* Silver Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between" style={{ minHeight: '450px' }}>
              <p className="text-sm mb-4 float-right"><span className="bg-gray-200 p-2 rounded-2xl">Silver Plan</span></p>
              <p className="text-2xl font-bold mb-4">$89/month</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>70 Recording Hours</li>
                <li>Default Note Templates</li>
                <li>Unlimited Patients</li>
                <li>AI Assistant</li>
                <li>Make Notes Concise</li>
                <li>Manual Note Editing</li>
                <li>Basic Support</li>
                <li>Customize Your Notes</li>
                <li>MDM Coding</li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition mt-4">
                Get Started
              </button>
            </div>

            {/* Gold Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="text-sm mb-4 float-right"><span className="bg-yellow-200 p-2 rounded-2xl">Gold Plan</span></p>
              <p className="text-2xl font-bold mb-4">$129/month</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>120 Recording Hours</li>
                <li>Customizable Notes</li>
                <li>Re-Generate Notes</li>
                <li>Talk To Your Notes</li>
                <li>Email Sending To Patient</li>
                <li>Personal Task Planner</li>
                <li>Copy Templates</li>
                <li>Access To Our Libraries</li>
                <li>Premium Support</li>
                <li>Unlimited Customization</li>
                <li>MDM Coding</li>
              </ul>
              <button className="w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
                Get Started
              </button>
            </div>

            {/* Platinum Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between" style={{ minHeight: '350px' }}>
              <p className="text-sm mb-4 float-right"><span className="bg-blue-100 p-2 rounded-2xl">Platinum Plan</span></p>
              <p className="text-2xl font-bold mb-4">$250/month</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>250 Recording Hours</li>
                <li>Access to All Features</li>
                <li>Unlimited Customization</li>
                <li>MDM Coding + Suggestions</li>
                <li>Ultimate Support</li>
              </ul>
              <button className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-10">
                Get Started
              </button>
            </div>
          </>
        )}

        {activeTab === 'annual' && (
          <>
            {/* Silver Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between" style={{ minHeight: '450px' }}>
              <p className="text-sm mb-4 float-right"><span className="bg-gray-200 p-2 rounded-2xl">Silver Plan</span></p>
              <p className="text-2xl font-bold mb-4">$890/year</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>70 Recording Hours</li>
                <li>Default Note Templates</li>
                <li>Unlimited Patients</li>
                <li>AI Assistant</li>
                <li>Make Notes Concise</li>
                <li>Manual Note Editing</li>
                <li>Basic Support</li>
                <li>Customize Your Notes</li>
                <li>MDM Coding</li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition mt-4">
                Get Started
              </button>
            </div>

            {/* Gold Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <p className="text-sm mb-4 float-right"><span className="bg-yellow-200 p-2 rounded-2xl">Gold Plan</span></p>
              <p className="text-2xl font-bold mb-4">$1290/year</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>120 Recording Hours</li>
                <li>Customizable Notes</li>
                <li>Re-Generate Notes</li>
                <li>Talk To Your Notes</li>
                <li>Email Sending To Patient</li>
                <li>Personal Task Planner</li>
                <li>Copy Templates</li>
                <li>Access To Our Libraries</li>
                <li>Premium Support</li>
                <li>Unlimited Customization</li>
                <li>MDM Coding</li>
              </ul>
              <button className="w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
                Get Started
              </button>
            </div>

            {/* Platinum Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between" style={{ minHeight: '350px' }}>
              <p className="text-sm mb-4 float-right"><span className="bg-blue-100 p-2 rounded-2xl">Platinum Plan</span></p>
              <p className="text-2xl font-bold mb-4">$2500/year</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>250 Recording Hours</li>
                <li>Access to All Features</li>
                <li>Unlimited Customization</li>
                <li>MDM Coding + Suggestions</li>
                <li>Ultimate Support</li>
              </ul>
              <button className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-10">
                Get Started
              </button>
            </div>
          </>
        )}
      </div>
      <div className="w-full bg-gray-100 p-6 shadow-lg mt-5 rounded-lg">
  <div className='flex flex-col w-full justify-center items-center m-4'>
        <div className="mb-4"><p>📣  Looking for custom solutions or enterprise packages? Reach out to our sales team below for personalized options tailored to your needs.</p></div>
  <div className='flex flex-col items-center'>
    <button className="max-w-sm bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition mt-4">
      REACH OUT FOR CUSTOM SOLUTIONS
    </button>
    <button className="bg-green-400 max-w-md hover:bg-green-500 text-gray-100 py-2 px-4 border rounded-lg transition mt-4">
      REACH OUT FOR STUDENT DISCOUNTS (Coming Soon)
    </button>
  </div>
</div>
        <div className="space-y-6">
          {/* Silver Package */}
          <div className="p-4   rounded-lg">
            <div className="flex items-center mb-4">
              <FaTag className="text-gray-800 text-2xl mr-2" />
              <p className="text-2xl font-bold">Silver Package Information</p>
            </div>
            <p className="text-gray-700 mb-4">
              Our Silver Package offers a solid foundation for your needs, providing essential services with certain limitations to maintain a cost-effective solution. In this introductory package, you have access to our AI Assistant and can edit, condense, or delete generated notes, ensuring you have control over your documentation. This package includes 70 monthly recording hours.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Access to AI Assistant</li>
              <li>70 monthly recording hours</li>
              <li>No customization options</li>
              <li>No direct email functionality</li>
              <li>Basic support included</li>
            </ul>
            <p className="text-gray-700">
              For those requiring more flexibility and advanced features, we recommend exploring our Gold and Platinum packages.
            </p>
          </div>

          {/* Gold Package */}
          <div className="p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <FaTag className="text-yellow-700 text-2xl mr-2" />
              <p className="text-2xl font-bold">Gold Package Information</p>
            </div>
            <p className="text-gray-700 mb-4">
              Expand your capabilities with our Gold Package, building on the Silver Package's foundation. This upgrade not only retains all essential services but also enhances your workflow with new features.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>120 monthly recording hours</li>
              <li>Edit default templates and add up to 3 personal templates</li>
              <li>Enhanced template management</li>
              <li>Generate and send 1 customizable email per recording</li>
              <li>Access to 're-generating' and 'talk to your notes' features</li>
              <li>Premium support included</li>
            </ul>
            <p className="text-gray-700">
              Our Gold Package is designed for healthcare professionals seeking more flexibility and control over their patient management system. For those looking to maximize their Optimind-AI experience with even more sophisticated tools and capabilities, our Platinum Package may be the perfect fit.
            </p>
          </div>

          {/* Platinum Package */}
        
          <div className="p-4  rounded-lg">
            <div className="flex items-center mb-4">
              <FaTag className="text-blue-500 text-2xl mr-2" />
              <p className="text-2xl font-bold">Platinum Package Information</p>
            </div>
            <p className="text-gray-700 mb-4">
              Elevate your practice to unparalleled heights with our Platinum Package, where limits are a thing of the past, and ultimate flexibility meets cutting-edge functionality. This premium package is meticulously designed for those who demand nothing but the best.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>250 monthly recording hours</li>
              <li>Unlimited customizable templates</li>
              <li>Generate and send unlimited customizable emails</li>
              <li>Access to MDM coding</li>
              <li>Ultimate Support Tier with priority response and dedicated support</li>
            </ul>
            <p className="text-gray-700">
              Choose the Platinum Package for an experience that transcends the conventional, allowing you to maximize your practice's efficiency, personalize your patient care, and utilize the full scope of Optimind-AI's capabilities. With these sophisticated tools and unparalleled support at your disposal, the Platinum Package is here to transform your patient documentation and communication, unlocking a new realm of possibilities for your practice.
            </p>
          </div>
            <div className="p-4  rounded-lg">
            <div className="flex items-center mb-4 text-center">
              {/* <FaTag className="text-blue-500 text-2xl mr-2" /> */}
              <p className="text-2xl font-bold text-center">How Our Support System Works</p>
            </div>
            <p className="text-gray-700 mb-4">
           Our support system is designed to provide you with assistance whenever you need it, directly from within the Optimind-AI application. Our team offers 24/7 support, ensuring that help is always just a few clicks away. Here's how our support tiers work:
            </p>
            <div className="flex items-center mb-4">
              <FaTag className="text-gray-700 text-2xl mr-2" />
              <p className="font-bold">Basic Support: </p>
            </div>
            <p className="text-gray-700">
            Available with the Silver Package, our team aims to respond within 3-4 hours during our office hours, which are from 6 AM to 8 PM Arizona time, Monday through Sunday. Outside of these hours, we're still here to assist, although we can't guarantee these specific response times.
            </p>  
             <div className="flex items-center my-4">
              <FaTag className="text-yellow-700 text-2xl mr-2" />
              <p className="font-bold">Premium Support:</p>
            </div>
            <p className="text-gray-700">
            Included with the Gold Package, this level of support guarantees a response time of 2-3 hours during office hours. Our commitment to quick and effective support means less waiting for you.
            </p> <div className="flex items-center my-4">
              <FaTag className="text-blue-700 text-2xl mr-2" />
              <p className="font-bold">Ultimate Support: </p>
            </div>
            <p className="text-gray-700">
           Our highest tier of support comes with the Platinum Package, offering an impressive response time of 1-2 hours during office hours. This ensures that any issues or questions you have are addressed as quickly as possible.
            </p>
              <div className="flex items-center my-4">
              {/* <FaTag className="text-yellow-700 text-2xl mr-2" /> */}
              <p className="text-gray-700"><strong>Remember,</strong> no matter the time of day or night, our support team is always on standby to assist you. However, please note that specific response times can vary outside of office hours. Our goal is to provide you with the support you need, whenever you need it, to make your experience with Optimind-AI as smooth and efficient as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
