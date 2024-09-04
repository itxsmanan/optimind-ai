import React, { useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const MedicalFollowUpNote = () => {

const details=[
  {
   key:1, 
    header:"Summary content",
    desc:"Analyze the transcript for direct responses from the client during the session. Extract key statements, answers, and reactions that provide insight into their perspective, feelings, and thoughts on discussed topics. Summarize these responses in a brief, direct manner, ensuring to convey the essence of the client's communication without additional commentary or interpretation. Focus on the client's verbal expressions of their experiences, concerns, and reflections. This summary should be succinct, presenting the client's own words as closely as possible, while maintaining clarity and brevity."
  }
]

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="max-w-3xl  ">

        <Collapse accordion>
        {details.map((detail)=>(

          <Panel header={detail.header} key={details.key}>
            <p>
              {detail.desc}
            </p>
          </Panel>
        ))}
        
        </Collapse>

        <p className="mt-6 text-center text-gray-600">
          <span className="font-bold"> Note:</span> Summaries in the library cannot be edited directly. For customization, please import the summary into your personal notes, where you can freely edit and adjust them to your liking.
        </p>
      </div>
    </div>
  );
};

export default MedicalFollowUpNote;
