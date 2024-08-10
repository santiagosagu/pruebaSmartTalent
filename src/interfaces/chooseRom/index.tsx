export interface Iperson {
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  genero: string;
  tipoDocumento: string;
  numeroDocumento: string;
  email: string;
  telefono: string;
}

export interface IDataHabitacion {
  id: string;
  image: string;
  capacidad: number;
  desayuno: boolean;
  estacionamiento: boolean;
  valor: string;
}
