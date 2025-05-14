import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<span style='color: #9b19e6;'>S</span>oftware <span style='color: #f04826;'>D</span>eveloper",
          "<span style='color: #3df2cb;'>B</span>ackend<span style='color: #52f298'>D</span>eveloper",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        html: true, // Enable HTML tags in strings
      }}
    />
  );
}

export default Type;
