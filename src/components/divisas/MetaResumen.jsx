import React from 'react';

const MetaResumen = ({ datos }) => {
  if (!datos) return null;

  const {
    cantidadActual,
    ingresoMensual,
    objetivo,
    plazo,
    motivo,
  } = datos;

  const cantidad = parseFloat(cantidadActual);
  const ingreso = parseFloat(ingresoMensual);
  const meta = parseFloat(objetivo);
  const meses = parseInt(plazo);

  const faltante = meta - cantidad;
  const ahorroRecomendado = Math.ceil(faltante / meses);
  const porcentaje = Math.min((cantidad / meta) * 100, 100);

  return (
    <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-indigo-600 mb-3">
        Resumen del plan: {motivo}
      </h3>

      <ul className="space-y-1 text-gray-700">
        <li><strong>Plazo:</strong> {meses} meses</li>
        <li><strong>Meta total:</strong> ${meta}</li>
        <li><strong>Ya tienes:</strong> ${cantidad}</li>
        <li><strong>Te faltan:</strong> ${faltante}</li>
        <li><strong>Ahorro mensual sugerido:</strong> ${ahorroRecomendado}</li>
      </ul>

      <div className="mt-4">
        <label className="block mb-1 text-sm font-medium text-gray-600">Progreso:</label>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all duration-300"
            style={{ width: `${porcentaje}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Has completado <strong>{porcentaje.toFixed(1)}%</strong> de tu meta.
        </p>
      </div>
    </div>
  );
};

export default MetaResumen;
