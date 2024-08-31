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

//  import Summaries from "./"
 import MySummaries from "./Summaries"
 import Transcript from "./Transcript"
 import ResultFollowUp from "./ResultFollowup"
export default function TabsWithIcon() {
  const data = [
    {
      label: "Follow-Up Summary",
      value: "templates",
      
      desc: <ResultFollowUp/>
    },
    {
      label: "Summaries for (Patient Name)",
      value: "summaries",

      desc: <MySummaries/>
    },
    {
      label: "Transcript with (Patient Name)",
      value: "transcript",

      desc: <Transcript/>,
    },
  ];
  return (
    <Tabs value="templates"> 
      <TabsHeader  className="w-full max-w-6xl overflow-x-auto ">
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