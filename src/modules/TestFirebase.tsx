import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import useGetServices from "../api/services/useGetServices";

const TestFirebase = () => {
  const { data, error, isLoading } = useGetServices({
    key: "hotelsTest",
    collectionName: "hoteles",
  });

  const filters = [
    ["disponible", "==", false],
    ["lugar", "==", "Bello"],
  ];

  const {
    data: dataFilter,
    error: errorFilter,
    isLoading: isLoadingFilter,
  } = useGetServices({
    key: "hotelesfiltros",
    collectionName: "hoteles",
    filters,
  });

  const {
    data: datatest,
    error: errortest,
    isLoading: isLoadingtest,
  } = useGetServices({
    key: "hotelestest",
    collectionName: "hoteles",
  });

  console.log("ultimo", datatest, errortest, isLoadingtest);

  console.log(dataFilter, errorFilter, isLoadingFilter);

  console.log("estoy aqui", data, error, isLoading);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const agregarDatos = async () => {
    try {
      const docRef = await addDoc(collection(db, "hoteles"), {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKZFttZ5lqIE3B4ec1LHUYWWNDU1MVJ5ud_7KEsr8f_ENoq2h",
        name: "Jardín de Silleteros Agro Parque Hotel",
        lugar: "Envigado",
        valor: "264.000",
        disponible: true,
        habitaciones: [
          {
            id: "1",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfn4v20zD7jX_V8HFvXrgE6Qt0VHfRcBAKgPpLo5nGTzHR87D",
            capacidad: 2,
            desayuno: true,
            estacionamiento: true,
            valor: "327.000",
            disponible: true,
          },
          {
            id: "2",
            image:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfj-MQtwCG-I9LSZEczggUPJed2WDJGvEAnnWU2fET5pm25J9B",
            capacidad: 3,
            desayuno: true,
            estacionamiento: true,
            valor: "327.000",
            disponible: true,
          },
          {
            id: "3",
            image:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTeELkiVF78J8ueUUok-KRdqmPFohrly1Ccxh_XzQ4KNVYOEsSf",
            capacidad: 2,
            desayuno: true,
            estacionamiento: true,
            valor: "264.000",
            disponible: true,
          },
          {
            id: "4",
            image:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROJ6TOznyHsJ-kdd5NIoCieT-czq2Rk6sPAxGYwCsFgcxlRqQT",
            capacidad: 2,
            desayuno: true,
            estacionamiento: true,
            valor: "264.000",
            disponible: true,
          },
        ],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="App">
      <h1>Datos de Firebase</h1>
      <button onClick={agregarDatos}>agregar datos</button>
      <ul>
        {data?.map((doc) => (
          <li key={doc.id}>{JSON.stringify(doc)}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestFirebase;
