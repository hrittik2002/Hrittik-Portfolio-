import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "ReactJS Developer",
              "Full Stack Developer",
              "Frontend Developer",
              "Freelancer",
              "MERN Stack Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      );
}

export default Type