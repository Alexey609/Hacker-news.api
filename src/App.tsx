import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, NewsContainer } from "./Components";
import './App.css';

function App() {

  return (
    <div className="App">
       <Header/>
       <main className="main">
           <Routes>
               <Route path="/" element={ <NewsContainer/> }/>
               <Route path="news/"/>
           </Routes>
       </main>
    </div>
  );
}

export default App;
