import React, { useState } from "react";

export default function ReservaPelicula() {
  // Estado para almacenar la información del formulario
  const [formulario, setFormulario] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    asientos: [],
  });

  // Estado para controlar la selección de asientos
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);

  // Lista de asientos para el grid
  const asientos = [
    { id: 1, fila: 1, columna: 1, disponible: true },
    { id: 2, fila: 1, columna: 2, disponible: true },
    { id: 3, fila: 1, columna: 3, disponible: true },
    { id: 4, fila: 1, columna: 4, disponible: true },
    { id: 5, fila: 2, columna: 1, disponible: true },
    { id: 6, fila: 2, columna: 2, disponible: true },
    { id: 7, fila: 2, columna: 3, disponible: true },
    { id: 8, fila: 2, columna: 4, disponible: true },
    { id: 9, fila: 3, columna: 1, disponible: true },
    { id: 10, fila: 3, columna: 2, disponible: true },
    { id: 11, fila: 3, columna: 3, disponible: true },
    { id: 12, fila: 3, columna: 4, disponible: true },
    { id: 13, fila: 4, columna: 1, disponible: true },
    { id: 14, fila: 4, columna: 2, disponible: true },
    { id: 15, fila: 4, columna: 3, disponible: true },
    { id: 16, fila: 4, columna: 4, disponible: true },
    { id: 17, fila: 5, columna: 1, disponible: true },
    { id: 18, fila: 5, columna: 2, disponible: true },
    { id: 19, fila: 5, columna: 3, disponible: true },
    { id: 20, fila: 5, columna: 4, disponible: true },
  ];

  // Función para manejar el envío del formulario de reserva
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formulario);
    console.log(asientosSeleccionados);
    // Enviar la información al servidor para procesar la reserva
  }

  // Función para manejar la selección de un asiento
  function handleSeleccionAsiento(asiento) {
    if (asiento.disponible) {
      setAsientosSeleccionados([...asientosSeleccionados, asiento.id]);
      asiento.disponible = false;
    } else {
      setAsientosSeleccionados(
        asientosSeleccionados.filter((id) => id !== asiento.id)
      );
      asiento.disponible = true;
    }
  }

  return (
    <div>
      {/* Formulario de reserva */}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={formulario.nombre}
            onChange={(e) =>
              setFormulario({ ...formulario, nombre: e.target.value })
            }
          />
        </label>
        <label>
          Cédula:
          <input
            type="text"
            value={formulario.cedula}
            onChange={(e) =>
              setFormulario({ ...formulario, cedula: e.target.value })
            }
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            value={formulario.correo}
            onChange={(e) =>
              setFormulario({ ...formulario, correo: e.target.value })
            }
          />
        </label>
        <button type="submit">Reservar</button>
      </form>

      {/* Grid de asientos */}
      <div>
        {asientos.map((asiento) => (
          <div
            key={asiento.id}
            className={`asiento ${
              asiento.disponible ? "disponible" : "ocupado"
            } ${
              asientosSeleccionados.includes(asiento.id) ? "seleccionado" : ""
            }`}
            onClick={() => handleSeleccionAsiento(asiento)}
          >
            {asiento.id}
          </div>
        ))}
      </div>
    </div>
  );
}
