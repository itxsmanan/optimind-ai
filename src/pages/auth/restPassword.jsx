import { Input } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
const navigate=useNavigate();
const handleRestPassword=()=>{
    navigate("/")
}

  return (
    <section className="m-8 flex gap-4">
    <div className="w-full lg:w-3/5 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
                  <div className="flex flex-col items-center justify-center mb-6"><img src="/img/optimind.jpg" width={100}/></div>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Reset Password</h2>
        
        <form>
          <div className="mb-4">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
              New Password
            </label> */}
            <Input
              type="text" 
              id="new-password" 
              label="Enter your new password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-300" 
              required
            />
          </div>
          
          <div className="mb-4">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label> */}
            <Input 
              type="text" 
              id="confirm-password" 
              label="Confirm your new password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-0" 
              required
            />
          </div>
          
          <button 
        onClick={handleRestPassword}
            type="submit" 
            className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
        <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
</section>
  );
}
