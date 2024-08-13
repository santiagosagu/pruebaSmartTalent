import { Iperson } from "../chooseRom";

export interface Ihoteles {
  id: string;
  image: string;
  nombre: string;
  ciudad: string;
  valor: string;
  disponible: boolean;
  habitaciones: IRoomReservation[];
}

export interface Iocupada {
  inicio: string;
  fin: string;
}
export interface IRoomReservation {
  capacidad: string;
  costoBase: string;
  desayuno: boolean;
  disponible: boolean;
  id: string;
  image: string;
  impuesto: string;
  nombre: string;
  parqueadero: boolean;
  tipoHabitacion: string;
  ubicacion: string;
  valor: string;
  ocupada: Iocupada[];
  hotel: Ihoteles;
}

export interface IRoomGetReservation {
  capacidad: string;
  costoBase: string;
  desayuno: boolean;
  disponible: boolean;
  id: string;
  image: string;
  impuesto: string;
  nombre: string;
  parqueadero: boolean;
  tipoHabitacion: string;
  ubicacion: string;
  valor: string;
  ocupada: Iocupada[];
  hotel: Ihoteles;
  fechaReserva: Iocupada;
  people: Iperson[];
}
