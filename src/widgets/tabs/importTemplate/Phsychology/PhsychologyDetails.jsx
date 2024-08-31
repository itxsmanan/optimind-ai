import React, { useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const MedicalFollowUpNote = () => {


  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="max-w-3xl  ">
        <p className="text-xl mb-4">
          Structured to capture the essential elements of therapy sessions, focusing on client behaviors, therapeutic interventions, client responses, and planning for future therapy sessions.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-center">
         Included Summaries For BIRP Therapy Note
        </h3>

        <Collapse accordion>
        {details.map((detail)=>(

          <Panel header={detail.header} key={details.key}>
            <p>
              {detail.desc}
            </p>
          </Panel>
        ))}
        
        </Collapse>

        <p className="mt-6 text-center font-medium text-gray-600">
          Note: Summaries in the library cannot be edited directly. For customization, please import them into your personal notes, where you can freely edit and adjust them to your liking.
        </p>
      </div>
    </div>
  );
};

export default MedicalFollowUpNote;
