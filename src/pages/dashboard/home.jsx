import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import {
  statisticsCardsData,
  projectsTableData,
} from "@/data";
import ChartBarCustomTooltip from "@/widgets/charts/statistics-chart";
import TutorialsCard from "@/widgets/cards/tutorialsCard";
import Documentation from "@/widgets/cards/patientDocumentationCard";
import ChangePasswordCard from "@/widgets/cards/changePasswordCard";
import TwoFactorAuthCard from "@/widgets/cards/twoFactorAuth";
import DeleteAccountCard from "@/widgets/cards/deleteAccount";
// import { UserCircleIcon } from "@heroicons/react/solid";

export function Home() {
  const username = "John Doe"; // Replace with dynamic data if available
  const subscriptionType = "Platinum";
  const renewalTime = "August 24, 2024";

  return (
    <div className="">
      {/* Welcome Section */}
      <div className="mb-8 w-full p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white1 rounded-b-2xl shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* <UserCircleIcon className="w-12 h-12 text-white" /> */}
          <div>
            <Typography variant="h4" color="white" className="font-semibold">
              👋 Hey, welcome {username}!
            </Typography>
            <Typography variant="h6" color="white" className="font-medium">
              Subscription: {subscriptionType}
            </Typography>
          </div>
        </div>
      </div>

      {/* First Row */}
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-md">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex flex-col md:flex-row items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1 text-2xl">
                Recent Patient Visits
              </Typography>
            </div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-800 rounded-lg shadow">
              Reload
            </button>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {["Patient Name", "Visit Date", "Visit Duration"].map((el) => (
                      <th
                        key={el}
                        className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-200"
                      >
                        {el}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projectsTableData.map(
                    ({ patientName, visitDate, visitDuration }, key) => {
                      const className = `py-3 px-6 ${key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-gray-200"
                        }`;

                      return (
                        <tr key={patientName} className="hover:bg-gray-50">
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-medium"
                            >
                              {patientName}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-gray-600"
                            >
                              {visitDate}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-gray-600"
                            >
                              {visitDuration}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        {/* Monthly Usage Overview */}
        <div className="w-full p-6 bg-white shadow-md rounded-xl">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Monthly Audio Usage Overview
            </h2>
            <p className="text-gray-600">Activity over months</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <ChartBarCustomTooltip />
          </div>
          <div className="mt-12 text-right">
            <p className="text-gray-500 text-sm">Latest Renewed At:</p>
            <p className="text-gray-700 font-medium text-sm">{renewalTime}</p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="w-full mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TutorialsCard />
        <ChangePasswordCard />
        <DeleteAccountCard />
        <TwoFactorAuthCard />
        <Documentation />
      </div>
    </div>
  );
}

export default Home;
