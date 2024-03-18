import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location, episode } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-2">{name.length > 20 ? `${name.slice(0, 20)}...` : name}</div>
              <div className="fs-5">{episode.length} episódio(s)</div>
              <div className="fs-5">{location.name.length > 20 ? `${location.name.slice(0, 20)}...` : location.name}</div>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  Morto
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  Vivo
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  Desconhecido
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "Nenhum personagem encontrado.";
  }

  return <>{display}</>;
};

export default Card;
