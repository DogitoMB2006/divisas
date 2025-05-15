import React, { useState } from 'react';
import MetaResumen from './MetaResumen';

const MetaForm = () => {
  const [datos, setDatos] = useState({
    cantidadActual: '',
    motivo: '',
    ingresoMensual: '',
    plazo: '3',
    objetivo: '',
  });

  const [resumenVisible, setResumenVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumenVisible(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        Crea tu Plan de Ahorro
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            ¿Cuánto dinero tienes actualmente?
          </label>
          <input
            type="number"
            name="cantidadActual"
            value={datos.cantidadActual}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="$0.00"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            ¿Para qué es tu plan de ahorro?
          </label>
          <input
            type="text"
            name="motivo"
            value={datos.motivo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej: Vehículo, Casa, Viaje"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            ¿Cuánto ganas mensualmente?
          </label>
          <input
            type="number"
            name="ingresoMensual"
            value={datos.ingresoMensual}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="$0.00"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            ¿Cuánto necesitas en total?
          </label>
          <input
            type="number"
            name="objetivo"
            value={datos.objetivo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="$0.00"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-gray-700">
            ¿En qué plazo deseas lograrlo?
          </label>
          <select
            name="plazo"
            value={datos.plazo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">1 año</option>
            <option value="24">2 años</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Guardar plan
        </button>
      </form>

      {resumenVisible && datos && <MetaResumen datos={datos} />}
    </div>
  );
};

export default MetaForm;
