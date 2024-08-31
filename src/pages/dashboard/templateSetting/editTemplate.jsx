import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
// import Swal from 'sweetalert2';

const accordionData = [
  {
    title: "Discussion",
    details: `Based on the transcript of the session, identify and succinctly list the main topics of discussion that transpired among the therapist, Partner 1, and Partner 2. Aim for brevity and precision in your descriptions to encapsulate the core of their shared and individual concerns, particularly those impacting their relationship. Focus solely on the dialogue relevant to the dynamics of their relationship, excluding any mentions of future planning or goals beyond the scope of the session's discussions. Specify which conversations involve both partners together with the therapist, as well as any separate discussions between the therapist and each partner. Use "Partner 1" and "Partner 2" to differentiate between the two individuals in the relationship. Directly output the content, without any overarching titles or sections.  Response Format:  Discussions between Therapist and Both Partners:  [Concisely list the topics discussed that involve both partners and the therapist, highlighting areas of mutual concern or focus within their relationship.] Discussions between Therapist and Partner 1:  [Summarize topics specifically between the therapist and Partner 1, noting individual issues, insights, or therapeutic focuses that emerged.] Discussions between Therapist and Partner 2:  [Summarize topics specifically between the therapist and Partner 2, noting individual issues, insights, or therapeutic focuses that emerged.] Discussions between Partner 1 and Partner 2:  [Detail the discussions that took place directly between Partner 1 and Partner 2 in the presence of the therapist, emphasizing their communication patterns, conflicts, resolutions, and expressions of feelings or needs.]`,
  },
  {
    title: "Presenting Problems",
    details: `For each partner, summarize the key issues they bring to the therapy session, focusing on how these concerns affect their relationship. Also, note any shared concerns they both express about their relationship.  Response Format:  Presenting Problems for Partner 1:  [Summarize key issues mentioned by Partner 1.] Presenting Problems for Partner 2:  [Summarize key issues mentioned by Partner 2.] Joint Presenting Problems:  [List any concerns both partners share about their relationship.]`,
  },{
    title: "Relationship Dynamics",
    details: `Adjusted Prompt: Analyze the session transcript to capture the essence of the relationship dynamics discussed. Include how each partner perceives the relationship, any patterns of interaction, and areas of conflict or strength. Also, detail how these dynamics are addressed jointly in the session.  Response Format:  Dynamics from Partner 1’s Perspective:  [Summarize Partner 1's view on the relationship dynamics.] Dynamics from Partner 2’s Perspective:  [Summarize Partner 2's view on the relationship dynamics.] Joint Relationship Dynamics:  [Detail dynamics discussed jointly, including interaction patterns and areas of conflict or strength.]`,
  },
];

const EditableAccordion = () => {

 
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [accordionContent, setAccordionContent] = useState(accordionData);

  const handleAccordionToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleTextareaChange = (e, index) => {
    const newContent = [...accordionContent];
    newContent[index].details = e.target.value;
    setAccordionContent(newContent);
  };

  return (
    <div className="w-full  mx-auto mt-10 space-y-4 overflow-x-auto">
      {accordionContent.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-lg">
          <div
            className="cursor-pointer p-4 bg-gray-100 text-lg font-semibold"
            onClick={() => handleAccordionToggle(index)}
          >
            {item.title}
          </div>
          {expandedIndex === index && (
            <div className="p-4 bg-white">
              <textarea
                className="w-full p-2 border rounded"
                rows="10"
                value={item.details}
                onChange={(e) => handleTextareaChange(e, index)}
              />
        <div className=''><Button>Save</Button></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditableAccordion;
