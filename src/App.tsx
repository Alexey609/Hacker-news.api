import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NewsProvider } from './Api/hnApi';
import { Header, NewsContainer, Item, Footer } from './Components';
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <NewsProvider>
        <Header />
        <main className={style.main}>
          <Routes>
            <Route path="/" element={<NewsContainer />} />
            <Route path="news/:id" element={<Item />} />
          </Routes>
        </main>
        <Footer />
      </NewsProvider>
    </div>
  );
}

export default App;
