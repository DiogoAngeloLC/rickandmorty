import React from "react";

const Species = ({ updateSpecies, updatePageNumber }) => {
  const speciesMapping = {
    Human: "Humano",
    Alien: "Alien",
    Humanoid: "Humanoide",
    Poopybutthole: "Poopybutthole",
    Mythological: "Mitológico",
    Unknown: "Desconhecido",
    Animal: "Animal",
    Disease: "Doença",
    Robot: "Robô",
    Cronenberg: "Cronenberg",
    Planet: "Planeta",
  };

  const handleChange = (event) => {
    const selectedStatusPortuguese = event.target.value;
    const selectedStatusEnglish = Object.keys(speciesMapping).find(
      (key) => speciesMapping[key] === selectedStatusPortuguese
    );
    updateSpecies(selectedStatusEnglish);
    updatePageNumber(1);
  };

  return (
    <select className="form-select" aria-label="Default select example" onChange={handleChange}>
      <option disabled selected>Espécie</option>
      {Object.values(speciesMapping).map((status, index) => (
        <option key={index} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};

export default Species;
