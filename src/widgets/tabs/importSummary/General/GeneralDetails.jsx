import React, { useState } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const GeneralDetails = () => {


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

        <p className="mt-6 text-center  text-gray-600">
 <span className="font-bold"> Note:</span> Summaries in the library cannot be edited directly. For customization, please import the summary into your personal notes, where you can freely edit and adjust them to your liking.
        </p>
      </div>
    </div>
  );
};

export default GeneralDetails;
