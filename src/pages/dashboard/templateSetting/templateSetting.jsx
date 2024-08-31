import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

 import MytemplatesTab from "./myTemplatesTab"
 import MySummaries from "./mySummariesTab"
 import AddTemplate from "./addTemplate"
//  import PatientInstructions from "./patientInstructions"
export default function TabsWithIcon() {
  const data = [
    {
      label: "Templates Setting",
      value: "templates",   
      desc: <MytemplatesTab/>
    },
    {
      label: "Summaries Setting",
      value: "summaries",
      desc: <MySummaries/>
    },{
      label: "Add Template",
      value: "addTemplate",
      desc: <AddTemplate/>
    },
  ];
  return (
    <div className="container max-auto">
        <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4  sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between rounded-b-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-extrabold">Templates Setting</h1>
      </header>
       <div className="w-full p-6 sm:p-8 lg:p-10 mt-10 bg-white shadow-lg rounded-lg">
            
    <Tabs value="templates"> 
      <TabsHeader  className="w-full max-w-2xl overflow-x-auto ">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
          </div>
    </div>
  );
}