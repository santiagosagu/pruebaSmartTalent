export interface HotelDataInputs {
  id?: string;
  nombre: string;
  image: string;
  ciudad: string;
  valor: string;
  habitaciones: HabitacionDataInputs[] | [];
  disponible: boolean;
}

export interface Iocupada {
  inicio: string;
  fin: string;
}

export interface HabitacionDataInputs {
  id?: string;
  valor?: number;
  nombre: string;
  image: string;
  capacidad: string;
  tipoHabitacion: string;
  costoBase: number | string;
  impuesto: number | string;
  ubicacion: string;
  desayuno: true;
  parqueadero: true;
  disponible: true;
  ocupada: Iocupada[] | [];
}
