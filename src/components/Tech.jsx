import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  console.log("Technologies Array: ", technologies);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-12'>
      {technologies.length === 0 ? (
        <p className='text-white text-xl'>No technologies to display</p>
      ) : (
        technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
