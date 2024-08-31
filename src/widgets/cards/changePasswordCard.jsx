import { Input, Typography } from "@material-tailwind/react";
import React from "react";

const ChangePasswordCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 ">
            <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
            <form className="mt-10">
                <div className="mb-4">
                    {/* <label className="block text-gray-700">Current Password</label> */}
                    <Input
                        label="Current password"
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                    // placeholder="Current Password"
                    />
                </div>
                <div className="mb-4">
                    {/* <label className="block text-gray-700">New Password</label> */}
                    <Input
                        label="New password"
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    // placeholder="New Password"
                    />
                </div>
                <div className="mb-4">
                    {/* <label className="block text-gray-700">Confirm New Password</label> */}
                    <Input
                        label="Confirm password"
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                    // placeholder="Confirm New Password"
                    />
                </div>
                {/* Password Requirements */}
                <div className="mt-8">
                    <Typography color="black" className="font-semibold">
                        Password Requirements:
                    </Typography>
                    <ul className="list-disc pl-5 mt-2 text-gray-600">
                        <li>One special character</li>
                        <li>Minimum 6 characters</li>
                        <li>One number (2 are recommended)</li>
                        <li>Change it often</li>
                    </ul>
                    <button
                        type="submit"
                        className="bg-gray-900  hover:bg-gray-800 text-white px-4 py-2 rounded-lg mt-4 float-right"
                    >
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePasswordCard;
