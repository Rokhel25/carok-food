import React from 'react';

export default function HeroSection({ data }) {
  return (
    <section className="hero-card text-center mx-auto my-5 p-4 rounded-4">
      <div className="hero-kicker fw-semibold">{data.subtitle}</div>
      <h1 className="hero-title fw-bold display-4">
        {data.title}
      </h1>
      <p className="hero-desc mx-auto" style={{ maxWidth: 680 }}>
        {data.description}
      </p>
      <button className="btn btn-warning fw-bold rounded-pill px-4 py-2">
        {data.button}
      </button>
      <div className="image-card mt-4">
        <img src={data.image} alt="hero" className="img-fluid rounded-3" />
      </div>
    </section>
  );
}
