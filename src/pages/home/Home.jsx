// src/pages/home/Home.jsx
import React from 'react';
import MetaForm from '../../components/divisas/MetaForm';

const Home = () => {
  return (
    <main className="py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Mis Metas</h1>
      <MetaForm />
    </main>
  );
};

export default Home;
