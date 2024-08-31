import React from "react";
import { Badge } from "@material-tailwind/react";

const TwoFactorAuthCard = () => {
    return (
        <div className="bg-white w-full p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold mb-2 sm:mb-0">Two-Factor Authentication</h2>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                    Coming Soon
                </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                <label className="text-gray-700">Security keys</label>
                <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                    <span>No Security keys</span>
                    <button className="px-5 py-1 bg-gray-900 text-white rounded hover:bg-gray-800">
                        Add
                    </button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                <label className="text-gray-700">SMS number</label>
                <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                    <span>+3012374423</span>
                    <button className="px-5 py-1 bg-gray-900 text-white rounded hover:bg-gray-800">
                        Edit
                    </button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                <label className="text-gray-700">Authenticator app</label>
                <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                    <span>Not Configured</span>
                    <button className="px-3 py-1 bg-gray-900 text-white rounded hover:bg-gray-800">
                        Set Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TwoFactorAuthCard;
