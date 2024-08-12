import { IDataHabitacion } from "../chooseRom";

export interface Ihoteles {
  id: string;
  image: string;
  name: string;
  lugar: string;
  valor: string;
  disponible: boolean;
  habitacions: IDataHabitacion[];
}
