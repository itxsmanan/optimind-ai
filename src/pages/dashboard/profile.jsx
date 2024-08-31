import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";
import { FaUserMd, FaStethoscope, FaBrain, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const [step, setStep] = useState(1);
  const [avatar, setAvatar] = useState(null);
  const [profession, setProfession] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfessionSelect = (selectedProfession) => {
    setProfession(selectedProfession);
  };

  const navigate = useNavigate();

  const handleForm = () => {
    navigate("/dashboard/home");
  };

  return (
    <>
      <div className="relative max-h-3xl w-full overflow-hidden rounded-b-2xl bg-cover bg-center bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="text-center mx-auto mt-8 w-full max-w-3xl p-4">
          <Typography variant="h2" color="gray-gray" className="font-bold">
            Build Your Profile
          </Typography>
          <Typography color="gray-600" className="mt-2">
            This information will enable us to personalize your account and
            ensure it is configured with the appropriate default settings and
            notes tailored specifically to your profession's needs.
          </Typography>
        </div>
        <div className="flex justify-center space-x-8 mb-10">
          <div
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${step === 1 ? "text-gray" : "text-gray-700"
              }`}
            onClick={() => setStep(1)}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 text-gray transition-all duration-300 ${step === 1 ? "bg-gray-600" : "bg-gray-200"
                }`}
            >
              1
            </div>
            <Typography className="font-semibold">Basic Info</Typography>
          </div>
          <div
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${step === 2 ? "text-gray" : "text-gray-700"
              }`}
            onClick={() => setStep(2)}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 text-gray transition-all duration-300 ${step === 2 ? "bg-gray-600" : "bg-gray-200"
                }`}
            >
              2
            </div>
            <Typography className="font-semibold">Profession</Typography>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 mb-6 w-full max-w-2xl p-4">
        <CardBody className="p-6">
          {step === 1 && (
            <div className="flex flex-col items-center">
              <Card className="w-full max-w-3xl rounded-2xl border-0">
                <CardBody className="p-6">
                  <Typography
                    variant="h4"
                    color="gray-gray"
                    className="text-center font-semibold"
                  >
                    Let’s Start with Basic Information
                  </Typography>
                  <Typography
                    color="gray-600"
                    className="mt-2 text-center"
                  >
                    Provide your name, email, and choose a profile picture.
                  </Typography>

                  <div className="flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-1 flex justify-center items-center">
                      <label
                        htmlFor="avatar-upload"
                        className="relative cursor-pointer rounded-full border-4 border-dashed border-gray-300 w-36 h-36 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-all duration-300 overflow-hidden"
                      >
                        {avatar ? (
                          <img
                            src={avatar}
                            alt="Avatar Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center">
                            <FaPen className="w-12 h-12 text-gray-500 mb-2" />
                            <Typography color="gray-500">Upload</Typography>
                          </div>
                        )}
                        <input
                          id="avatar-upload"
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleAvatarChange}
                        />
                      </label>
                    </div>

                    <div className="flex-1 flex flex-col space-y-5">
                      <Input
                        type="text"
                        label="First Name"
                        required
                        className="shadow-md"
                      />
                      <Input
                        type="text"
                        label="Last Name"
                        required
                        className="shadow-md"
                      />
                      <Input
                        type="email"
                        label="Email Address"
                        required
                        className="shadow-md"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button color="gray" onClick={() => setStep(2)}>
                      Continue
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col items-center">
              <Card className="w-full max-w-3xl rounded-2xl border-0">
                <CardBody className="p-6">
                  <Typography
                    variant="h4"
                    color="gray-gray"
                    className="text-center font-semibold"
                  >
                    What is Your Profession?
                  </Typography>
                  <Typography
                    color="gray-600"
                    className="mt-2 text-center"
                  >
                    Select a profession to configure your account accordingly.
                  </Typography>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {["Medical", "Therapy", "Psychiatry"].map((prof) => (
                      <div
                        key={prof}
                        className={`relative cursor-pointer rounded-xl border-2 p-6 text-center transition-all duration-300 ${profession === prof
                          ? "border-gray-500"
                          : "border-gray-200"
                          }`}
                        onClick={() => handleProfessionSelect(prof)}
                      >
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${profession === prof
                            ? "bg-gray-500 text-white"
                            : "bg-gray-200 text-gray-400"
                            }`}
                        >
                          {prof === "Medical" && (
                            <FaStethoscope size={30} />
                          )}
                          {prof === "Therapy" && (
                            <FaUserMd size={30} />
                          )}
                          {prof === "Psychiatry" && <FaBrain size={30} />}
                        </div>
                        <Typography
                          variant="h6"
                          className={`font-semibold ${profession === prof
                            ? "text-gray-600"
                            : "text-gray-800"
                            }`}
                        >
                          {prof}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button color="gray" onClick={() => setStep(1)}>
                      Previous
                    </Button>
                    <Button
                      color="gray"
                      disabled={!profession}
                      onClick={handleForm}
                    >
                      Save
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}
        </CardBody>
      </div>
    </>
  );
}

export default Profile;
