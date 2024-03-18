import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import "./App.scss";
import React, { useState, useEffect } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails";
import logo from './images/logo-white.png';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-12 bg-black pt-3 pb-3 mb-4">
          <div className="container d-flex flex-lg-row flex-column justify-content-between align-items-center gap-3">
            <h1 className="text-white">Rick & Morty</h1>
            <img src={logo} alt="Logo Code Group" className="logo" />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Exibindo {results?.length} de {info?.count} Personagens</h1>
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />

        </div>
        <div className="col-12">
          <div className="row">
            <Card page="/" results={results} />
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
