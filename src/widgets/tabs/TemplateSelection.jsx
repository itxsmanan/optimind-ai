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
 import PatientInstructions from "./patientInstructions"
export default function TabsWithIcon() {
  const data = [
    {
      label: "My Templates",
      value: "templates",
      
      desc: <MytemplatesTab/>
    },
    {
      label: "My Summaries",
      value: "summaries",

      desc: <MySummaries/>
    },
    {
      label: "Patient Instructions",
      value: "instructions",
      desc: <PatientInstructions/>,
    },
  ];
  return (
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
  );
}