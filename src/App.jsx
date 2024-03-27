import React, { useState } from "react";
import "./App.css";

function Spinner() {
  const [spin, setSpin] = useState(false);

  const handleButtonClick = () => {
    setSpin(!spin);
  };

  return (
    <div className="spinner-container mx-auto mt-5">
      <div className={`spinner ${spin ? "spin" : ""}`} />
      <button onClick={handleButtonClick} className="btn btn-primary">
        Spin
      </button>
    </div>
  );
}

export default Spinner;
