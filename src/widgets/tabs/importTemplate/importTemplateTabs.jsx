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

 import Psychiatry from "./Psychiatry/Psychiatry"
 import Therapy from "./therapy/Therapy"
 import Medical from "./Medical/Medical"
 import Phsychology from "./Phsychology/Phsychology"
 import General from "./General/General"
//  import PatientInstructions from "../patientInstructions"

export default function ImportTemplate() {
  const data = [
    {
      label: "Psychiatry",
      value: "psychiatry",  
      desc: <Psychiatry/>
    },
    {
      label: "Therapy",
      value: "therapy",
      desc: <Therapy/>
    },
    {
      label: "Medical",
      value: "medical",
      desc: <Medical/>
    },
    {
      label: "Phsychology",
      value: "phsychology",
      desc: <Phsychology/>
    },{
      label: "General",
      value: "general",
      desc: <General/>
    },
    
  ];
  return (
    <Tabs value="psychiatry my-10"> 
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
        {data.map(({ value,desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}