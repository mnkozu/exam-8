import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import NewQuote from "./containers/NewQuote/NewQuote";
import EditQuote from "./containers/EditQuote/EditQuote";
import DeleteQuote from "./components/DeleteQuote/DeleteQuote";
import './App.css';
import {Categories} from "./types";


function App() {
  const categories: Categories[] = [
    {title: "Star Wars", id: "star-wars"},
    {title: "Motivational for programmer", id: "motivational"},
    {title: "Kdrama", id: "kdrama"},
    {title: "Gulzat Mamytbek", id: "gulzatMamytbek"},
    {title: "Arstan Alai", id: "arstanAlai"},
  ];

  return (
    <>
    <header>
      <Navbar/>
    </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Quotes categories={categories}/>
          )}/>
          <Route path="/quotes/category/:id" element={(
            <Quotes categories={categories}/>
          )}/>
          <Route path="/add-quote" element={(
            <NewQuote categories={categories}/>
          )}/>
          <Route path="/quotes/edit/:id" element={(
            <EditQuote categories={categories}/>
          )}/>
          <Route path="/quotes/delete/:id" element={(
            <DeleteQuote/>
          )}/>
          <Route path="*" element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
