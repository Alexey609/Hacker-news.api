import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, NewsContainer, Item, Footer } from "./Components";
import './App.css';

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
        <Footer/>
    </div>
  );
}

export default App;
