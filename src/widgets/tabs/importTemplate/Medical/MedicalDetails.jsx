import React, { useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const MedicalFollowUpNote = () => {

const details=[
  {
    key:1,
    header:"Chief Complaint",
    desc:"Based on the conversation with the patient, extract the chief complaint from the patient's discussion, focusing succinctly on why they are visiting today and any immediate health concerns they have expressed. Provide the chief complaint in fewer than 30 words, directly stating the primary reason for the visit without any introductory titles or additional text."
  },
  {key:2,
    header:"Past Medical History",
    desc:"Based on the conversation with the patient, write the Past Medical History section of a medical note. This should detail each significant past illness the patient has experienced. For each condition, include the diagnosis date, any medications prescribed, the names or types of healthcare providers who treated the condition, and whether the illness led to hospitalization, including when and where it occurred. Ensure this information is presented in a clear, chronological order and maintains the privacy and professionalism expected in medical documentation. Focus on providing a comprehensive view of the patient’s medical background to assist in current and future medical assessments. Do not use any titles or subtitles, only directly output the content itself."
  },
  {key:3,
    header:"Past Surgical History",
    desc:"Based on the conversation with the patient, write the Past Surgical History section of a medical note. Detail each surgical procedure the patient has undergone. For each surgery, include the date of the surgery, whether it was emergent or elective, if it was conducted as an inpatient or outpatient, the surgeon's name or specialty, and any complications that occurred during or after the surgery. Organize the information chronologically and ensure it is concise yet comprehensive, respecting medical documentation standards of privacy and professionalism. Aim to provide a detailed view of the patient's surgical history to support accurate medical evaluation and ongoing care planning. Do not make anything up. Do not use any titles or subtitles, only directly output the content itself."
  },
  {key:4,
    header:"Reproductive History",
    desc:"Based on the conversation with the patient, write the Reproductive History section of a medical note, capturing essential details pertinent to the patient's reproductive health. Include the following information: - **For Male Patients**: - History of mumps and its impact on reproductive health. - Any issues related to infertility. - Whether a vasectomy has been performed, including the date and any post-procedure complications. - **For Female Patients**: - Date of last menstrual period and the regularity of menstrual cycles. - Use of birth control, specifying the type and duration of use. - Pregnancy history, including the number of pregnancies, number of live births, any gestational problems encountered, and details of any abortions (spontaneous or induced). Organize the information systematically, maintaining a professional tone and respecting patient confidentiality. Ensure that the summary provides clear, actionable information that can aid in ongoing medical assessments and treatment planning. Do not use any titles or subtitles, directly output the content itself."
  },
  {key:5,
    header:"Mental Health History",
    desc:"Based on the conversation with the patient, write the Mental Health History section of a medical note, focusing on the patient's historical mental health concerns. Each category should be formatted clearly and succinctly: Previous Hospitalizations: [Detail any previous mental health hospitalizations, including reasons and outcomes of each stay.] Suicidal Thoughts: [Document any history of suicidal thoughts, including frequency, intensity, and any actions taken or treatments received in response.] General Mood: [Describe the patient's general mood pattern over the years, noting any significant shifts and their context.] Mental Stability: [Discuss the stability of the patient's mental health, noting periods of significant instability or notable improvements.] Coping Mechanisms: [Outline the coping mechanisms the patient employs, evaluating their effectiveness and any changes over time.] Therapy and Treatments: [List past and current therapies or treatments, including medications, therapy sessions, and alternative treatments, noting the responsiveness to each.] Ensure the information is organized in a manner that supports medical evaluation and treatment planning, maintaining a professional tone and respecting patient confidentiality. Output the content directly without using any titles or subtitles."
  }
]

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="max-w-3xl  ">
        <p className="text-xl mb-4">
         Complete initial evaluation of new patients including comprehensive medical and personal history.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-center">
         Included Summaries For New Patient Exam
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
