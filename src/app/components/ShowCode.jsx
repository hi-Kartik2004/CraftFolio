"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
function ShowCode() {
  const [showCode, setShowCode] = useState(false);

  function handleShowCode() {
    setShowCode(!showCode);
  }
  
  return (
    <div>
      {showCode ? (
        <IoIosArrowBack
          className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
          onClick={handleShowCode}
        />
      ) : (
        <BiCode
          className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
          onClick={handleShowCode}
        />
      )}
    </div>
  );
}

export default ShowCode;
