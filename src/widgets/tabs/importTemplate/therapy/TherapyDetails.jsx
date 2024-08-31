import React, { useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const MedicalFollowUpNote = () => {

const details=[
  {
   key:1, 
    header:"Behavior",
    desc:"Based on the transcript of the conversation with my patient, detail the client's behaviors observed during the session, including verbal statements and non-verbal cues. Describe how these behaviors relate to the client's therapeutic goals or present challenges. Do not make anything up."
  },
  {key:2,
    header:"Intervention",
    desc:"Describe the client's response to the interventions, noting any changes in behavior, emotional state, or insights gained. Include both positive progress and areas of resistance."
  },
  {key:3,
    header:"Invention",
    desc:"Document the specific interventions you implemented during the session to address the observed behaviors. Include rationale for each intervention, how it was introduced, and any therapeutic techniques used."
  },
  {key:4,
    header:"Plan",
    desc:"Outline the next steps in the therapeutic process, including any modifications to treatment goals, continuation or adjustment of interventions, and tasks or homework for the client. Specify any follow-up needed."
  }
]

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
