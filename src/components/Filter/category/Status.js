import React from "react";

const Status = ({ updateStatus, updatePageNumber }) => {
  const statusMapping = {
    Alive: "Vivo",
    Dead: "Morto",
    Unknown: "Desconhecido"
  };

  const handleChange = (event) => {
    const selectedStatusPortuguese = event.target.value;
    const selectedStatusEnglish = Object.keys(statusMapping).find(
      (key) => statusMapping[key] === selectedStatusPortuguese
    );
    updateStatus(selectedStatusEnglish);
    updatePageNumber(1);
  };

  return (
    <select className="form-select" aria-label="Default select example" onChange={handleChange}>
      <option disabled selected>Status</option>
      {Object.values(statusMapping).map((status, index) => (
        <option key={index} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};

export default Status;
