import React, { useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const MedicalFollowUpNote = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="max-w-3xl  ">
        <p className="text-xl mb-4">
          A concise summary capturing key aspects of a patient's follow-up visit, focusing on progress, treatment adjustments, and future care plans.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-center">
          Included Summaries For Medical Follow-Up Note
        </h3>

        <Collapse accordion>
          <Panel header="1. Follow-Up Summary" key="1">
            <p>
              Based on the transcript of the conversation with my patient, compile a comprehensive follow-up summary. Focus on the patient's care being monitored for any acute and/or chronic conditions discussed during the session. Summarize key points related to the patient's health status, including any mention of tests, examinations, or evaluations. Detail patient progress, changes in symptoms, effectiveness of treatment, and any adverse reactions or side effects noted during the conversation. Note the effectiveness of any current treatment plans, medication adherence, and lifestyle modifications mentioned. Highlight changes in symptoms or condition since the last assessment, if applicable. The summary should provide a comprehensive overview of the patient's current medical status and management strategies, based solely on the conversation.
            </p>
          </Panel>
          <Panel header="2. Plan and Follow-up for Continued Care" key="2">
            <p>
              Using the information from the transcript, outline the plan and follow-up steps for the patient's continued care. Detail any adjustments to the treatment regimen or continuations of current treatments discussed during the session. Include any changes in medication, new therapeutic approaches, lifestyle recommendations, or referrals to specialists mentioned. Also, specify any follow-up visits or tests that were suggested to monitor the patient's condition. Provide guidance on symptoms that require immediate medical attention, as discussed. The plan should clearly articulate the next steps in the patient's care path, ensuring a coherent strategy for managing their health based on the session's dialogue.
            </p>
          </Panel>
        </Collapse>

        <p className="mt-6 text-center font-medium text-gray-600">
          Note: Summaries in the library cannot be edited directly. For customization, please import them into your personal notes, where you can freely edit and adjust them to your liking.
        </p>
      </div>
    </div>
  );
};

export default MedicalFollowUpNote;
