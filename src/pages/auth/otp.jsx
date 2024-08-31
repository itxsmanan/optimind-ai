import { Input } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddOtp() {

const navigate =useNavigate();
const handleOtp=()=>{
  navigate("/restPassword")
}
  return (
 <section className='m-8 flex gap-4'>
        <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
 <div className="w-full lg:w-3/5 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                  <div className="flex flex-col items-center justify-center mb-6"><img src="/img/optimind.jpg" width={100}/></div>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Enter OTP</h2>
        
        <form>
          <div className="mb-4">
            
            <Input 
              type="text" 
              id="otp" 
              label="Enter OTP" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-300" 
              required
            />
          </div>
          
          <button 
            type="submit" 
            onClick={handleOtp}
            className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Submit OTP
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}
