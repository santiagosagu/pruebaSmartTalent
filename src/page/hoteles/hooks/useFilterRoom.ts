/* eslint-disable @typescript-eslint/no-explicit-any */

interface Ocupacion {
  inicio: string;
  fin: string;
}

interface Habitacion {
  id: string;
  nombre: string;
  ocupada: Ocupacion[];
}

const useFilterRoom = ({
  hoteles,
  rangoFechas,
  setHabitacionesDisponibles,
  ciudad,
  huespedes,
  fechaInicio,
  fechaFin,
}: any) => {
  const verificarDisponibilidad = (
    ocupada: Ocupacion[] = [],
    inicio: Date,
    fin: Date
  ): boolean => {
    return ocupada.every(({ inicio: inicioOcupado, fin: finOcupado }) => {
      return fin <= new Date(inicioOcupado) || inicio >= new Date(finOcupado);
    });
  };

  const buscarHabitacionesDisponibles = () => {
    let fechasValidas = false;

    if (rangoFechas.length === 2) {
      fechasValidas = true;
    } else if (fechaInicio && fechaFin) {
      fechasValidas = true;
    }

    if (!fechasValidas) {
      alert("Por favor, selecciona un rango de fechas válido.");
      return;
    }

    const [inicio, fin] =
      rangoFechas.length === 2 ? rangoFechas : [fechaInicio, fechaFin];
    const habitaciones: Habitacion[] = [];

    hoteles.forEach(
      (hotel: {
        id: any;
        disponible: any;
        ciudad: string;
        habitaciones: any[];
        nombre: any;
      }) => {
        if (!hotel.disponible) {
          return;
        }

        if (ciudad && hotel.ciudad.toLowerCase() !== ciudad.toLowerCase()) {
          return;
        }

        hotel.habitaciones.forEach((habitacion) => {
          if (!habitacion.disponible) {
            return;
          }

          if (habitacion.capacidad < huespedes) {
            return;
          }

          if (
            verificarDisponibilidad(
              habitacion.ocupada,
              inicio.toDate(),
              fin.toDate()
            )
          ) {
            habitaciones.push({
              ...habitacion,
              hotel,
            });
          }
        });
      }
    );

    setHabitacionesDisponibles(habitaciones);
  };

  return buscarHabitacionesDisponibles;
};

export default useFilterRoom;
