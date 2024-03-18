import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">Morto</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">Vivo</div>;
          } else {
            return <div className="badge bg-secondary fs-5">Desconhecido</div>;
          }
        })()}
        <div className="content d-flex flex-column align-items-center gap-4">
          <div className="d-flex flex-column col-12">
            <div className="">
              <span className="fw-bold">Gênero : </span>
              {gender}
            </div>
            <div className="">
              <span className="fw-bold">Origem: </span>
              {origin?.name}
            </div>
            <div className="">
              <span className="fw-bold">Espécie: </span>
              {species}
            </div>
            <div className="">
              <span className="fw-bold">Localização: </span>
              {location?.name}
            </div>
          </div>
          <Link to="/">
            <button className="btn btn-primary bg-black border-black">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
