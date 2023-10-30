import React, { useState, useRef, useEffect, useCallback } from "react";

function SegmentSelector({ options = [], setSelectedCar }) {
  const [selectedTab, setSelectedTab] = useState(options[0]?.model || "");
  const tabRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({});

  const updateSliderStyle = useCallback(() => {
    const selectedIndex = options.findIndex((opt) => opt.model === selectedTab);
    if (tabRefs.current[selectedIndex]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[selectedIndex];
      const padding = 0.4; // 10px on each side
      setSliderStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth - padding}px`,
      });
    }
  }, [options, selectedTab]);

  useEffect(() => {
    updateSliderStyle(); // Update slider style when selectedTab or options change
  }, [selectedTab, options, updateSliderStyle]);

  useEffect(() => {
    const handleResize = () => {
      updateSliderStyle(); // Update slider style when window resizes
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateSliderStyle]);
  return (
    <div className="border m-10 flex w-[80%] justify-center items-center shadow-xl rounded-md relative">
      <div
        className="absolute flex justify-center items-center top-0 h-10 transition-all duration-300 ease-in-out bg-blue-500 rounded-md"
        style={sliderStyle}
      >
        <p className=" text-white">{selectedTab}</p>
      </div>
      <div className="flex w-full">
        {options.map((option, index) => (
          <button
            ref={(el) => (tabRefs.current[index] = el)}
            key={index}
            className="flex-1 w-[50%]  text-gray-800 p-2 focus:outline-none"
            style={{
              color: selectedTab === option.model ? "white" : "inherit",
            }}
            onClick={() => {
              setSelectedTab(option.model);
              setSelectedCar(option);
            }}
          >
            {option.model}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SegmentSelector;
