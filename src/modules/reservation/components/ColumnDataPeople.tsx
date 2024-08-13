const ColumnDataPeople = () => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombres",
      key: "nombres",
    },
    {
      title: "Genero",
      dataIndex: "genero",
      key: "genero",
    },
    {
      title: "# Documento",
      dataIndex: "numeroDocumento",
      key: "numeroDocumento",
    },
    {
      title: "Telefono",
      dataIndex: "telefono",
      key: "telefono",
    },
  ];

  return columns;
};

export default ColumnDataPeople;
