import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, NewsContainer } from "./Components";
import './App.css';
import {Item} from "./Components/Item/Item";

function App() {

  return (
    <div className="App">
       <Header/>
       <main className="main">
           <Routes>
               <Route path="/" element={ <NewsContainer/> }/>
               <Route path="news/:id" element={ <Item/> }/>
           </Routes>
       </main>
    </div>
  );
}

export default App;
