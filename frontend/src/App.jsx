import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
  fetch('http://127.0.0.1:8000/api/restaurant')
    .then(res => res.json())
    .then(setData)
    .catch(err => console.error(err));
}, []);


  if (!data) return <p className="text-center mt-5 ">Memuat...</p>;

  return (
    <div>
      <header className="bg-black text-white d-flex justify-content-between align-items-center p-3">
        <h2 className="fw-bold m-0 font-bold text-2xl">Bebbek Carok</h2>
        <div className="d-flex gap-3">
          <i className="bi bi-search"></i>
          <i className="bi bi-cart"></i>
          <i className="bi bi-list"></i>
        </div>
      </header>

      <HeroSection data={data} />
    </div>
  );
}

export default App;
