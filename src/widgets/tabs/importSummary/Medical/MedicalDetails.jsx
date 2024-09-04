import React, { useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const MedicalFollowUpNote = () => {

const details=[
  {
    key:1,
    header:"Summary content",
    desc:"Based on the transcript of the conversation with the patient, document all known allergies, organized into separate categories. Provide detailed information for each category as follows: **Medication Allergies:** Substance Name: [Side effect/adverse effect experienced.] **Food Allergies:** Substance Name: [Side effect/adverse effect experienced.] **Environmental Allergies:** Substance Name: [Side effect/adverse effect experienced.] Repeat this format for each type of allergy mentioned by the patient within the respective categories. If no allergies are specified or if details are missing in any category, directly output 'WNL' (Within Normal Limits) for that category. Ensure all information is factual and directly derived from the patient’s statements without fabricating details."
  },
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
