import { HttpResponse } from "msw";

export const singleHotel = () => {
  return HttpResponse.json({
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKZFttZ5lqIE3B4ec1LHUYWWNDU1MVJ5ud_7KEsr8f_ENoq2h",
    name: "Jardín de Silleteros Agro Parque Hotel",
    lugar: "Envigado",
    valor: "264.000",
    habitaciones: [
      {
        id: "1",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfn4v20zD7jX_V8HFvXrgE6Qt0VHfRcBAKgPpLo5nGTzHR87D",
        capacidad: 2,
        desayuno: true,
        estacionamiento: true,
        valor: "327.000",
      },
      {
        id: "2",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfj-MQtwCG-I9LSZEczggUPJed2WDJGvEAnnWU2fET5pm25J9B",
        capacidad: 3,
        desayuno: true,
        estacionamiento: true,
        valor: "327.000",
      },
      {
        id: "3",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTeELkiVF78J8ueUUok-KRdqmPFohrly1Ccxh_XzQ4KNVYOEsSf",
        capacidad: 2,
        desayuno: true,
        estacionamiento: true,
        valor: "264.000",
      },
      {
        id: "4",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROJ6TOznyHsJ-kdd5NIoCieT-czq2Rk6sPAxGYwCsFgcxlRqQT",
        capacidad: 2,
        desayuno: true,
        estacionamiento: true,
        valor: "264.000",
      },
    ],
  });
};
