import React from "react";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="d-flex col-12 align-items-center justify-content-between mb-3">
        <div className="text-center fw-bold fs-4">Filtros</div>
        <button
          style={{ cursor: "pointer" }}
          onClick={clear}
          className="btn btn-warning"
        >
          Limpar
        </button>
      </div>
      <div className="d-flex  justify-content-between align-items-center gap-1">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
      </div>
    </div>
  );
};

export default Filter;
