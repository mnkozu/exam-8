import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import NewQuote from "./containers/NewQuote/NewQuote";
import './App.css';
import EditQuote from "./containers/EditQuote/EditQuote";


function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Quotes/>
          )}/>
          <Route path="/add-quote" element={(
            <NewQuote/>
          )}/>
          <Route path="/quotes/edit/:id" element={(
            <EditQuote/>
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
