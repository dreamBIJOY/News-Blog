import React, { useRef } from "react";

function LastSection() {
  const marqueeRef = useRef(null);

  return (
    <div>
      <div className="py-2 bg-[#3674B5] text-3xl font-Inter font-semibold text-white">
        <marquee
          behavior="scroll"
          direction="left"
          scrollAmount="5"
          ref={marqueeRef}
          onMouseOver={() => marqueeRef.current.stop()}
          onMouseOut={() => marqueeRef.current.start()}
        >
          dreamSTUDIO
        </marquee>
      </div>
    </div>
  );
}

export default LastSection;
