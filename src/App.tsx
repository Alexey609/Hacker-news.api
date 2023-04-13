import React from 'react';
import './App.css';
import { Header, NewsContainer } from "./Components";

function App() {

  return (
    <div className="App">
       <Header/>
       <main className="main">
           <NewsContainer/>
       </main>
    </div>
  );
}

export default App;
