import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header, NewsContainer, Item, Footer } from './Components';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<NewsContainer />} />
            <Route path="news/:id" element={<Item />} />
          </Routes>
        </main>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
