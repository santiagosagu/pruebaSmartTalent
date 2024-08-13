import { DatePicker, Input, Select } from "antd";
import { Iperson } from "../../../interfaces/chooseRom";

interface Iprops {
  person: Iperson;
  index: number;
  handlePersonChange: (
    index: number,
    field: keyof Iperson,
    value: string
  ) => void;
}

const FormReservation = ({ person, index, handlePersonChange }: Iprops) => {
  return (
    <div key={index} className="mt-8">
      <div key={index} className="my-1">
        <h2 className="font-semibold mb-3">Persona {index + 1}</h2>
        <div className="lg:w-[1000px]">
          <div className="w-full lg:flex justify-between">
            <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4">
              Nombres:
              <div>
                <Input
                  className="w-60 lg:ml-3"
                  type="text"
                  value={person.nombres}
                  onChange={(e) =>
                    handlePersonChange(index, "nombres", e.target.value)
                  }
                />
              </div>
            </label>
            <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4">
              Apellidos:
              <div>
                <Input
                  className="w-60 lg:ml-3"
                  type="text"
                  value={person.apellidos}
                  onChange={(e) =>
                    handlePersonChange(index, "apellidos", e.target.value)
                  }
                />
              </div>
            </label>
          </div>
          <div className="w-full lg:flex justify-between">
            <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4">
              Fecha Nacimiento:
              <div>
                <DatePicker
                  size="large"
                  onChange={(date) => {
                    const formato = "YYYY-MM-DD";
                    const fechaFormateada = date.format(formato);
                    return handlePersonChange(
                      index,
                      "fechaNacimiento",
                      fechaFormateada
                    );
                  }}
                  placeholder="Fecha de inicio"
                  className="w-60 lg:ml-3"
                />
              </div>
            </label>

            <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4">
              Genero:
              <div className="">
                <Select
                  style={{ width: 240 }}
                  options={[
                    { value: "masculino", label: "Masculino" },
                    { value: "femenino", label: "Femenino" },
                  ]}
                  value={person.genero}
                  onChange={(value) =>
                    handlePersonChange(index, "genero", value)
                  }
                />
              </div>
            </label>
          </div>
          <div className="w-full lg:flex justify-between">
            <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4">
              Tipo de Documento:
              <div className="">
                <Select
                  style={{ width: 240 }}
                  options={[
                    { value: "cc", label: "Cedula" },
                    { value: "ti", label: "tarjeta de identidad" },
                  ]}
                  value={person.tipoDocumento}
                  onChange={(value) =>
                    handlePersonChange(index, "tipoDocumento", value)
                  }
                />
              </div>
            </label>

            <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4">
              Numero de Documento:
              <div>
                <Input
                  className="w-60 lg:ml-3"
                  type="number"
                  value={person.numeroDocumento}
                  onChange={(e) =>
                    handlePersonChange(index, "numeroDocumento", e.target.value)
                  }
                />
              </div>
            </label>
          </div>
          <div className="w-full lg:flex justify-between">
            <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4">
              Email:
              <div>
                <Input
                  className="w-60 lg:ml-3"
                  type="email"
                  value={person.email}
                  onChange={(e) =>
                    handlePersonChange(index, "email", e.target.value)
                  }
                />
              </div>
            </label>

            <label className="lg:mr-4 md:w-[400px] md:flex justify-between mb-4">
              Telefono de Contacto:
              <div>
                <Input
                  className="w-60 lg:ml-3"
                  type="number"
                  value={person.telefono}
                  onChange={(e) =>
                    handlePersonChange(index, "telefono", e.target.value)
                  }
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormReservation;
