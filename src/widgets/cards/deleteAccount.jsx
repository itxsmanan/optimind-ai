import { Checkbox, Typography } from "@material-tailwind/react";
import React from "react";

const DeleteAccountCard = () => {
    return (
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Delete Account</h2>
            <p className="text-gray-700 mb-4">
                Once you delete your account, all of your data will be deleted instantly.
                There is no going back. Please be certain.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center mt-10">
                <div className="flex items-center mb-4 md:mb-0">
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center justify-start font-medium"
                            >
                                I want to delete my account
                            </Typography>
                        }
                        // containerProps={{ className: "-ml-2.5" }}
                    />
                </div>
                <button className="bg-red-900 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 md:ml-auto">
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default DeleteAccountCard;
