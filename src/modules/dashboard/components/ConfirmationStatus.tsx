import { Button } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { Typography } from "antd";
import { useMutationServices } from "../../../api/services/useUpdateDocument";

interface PropsHandleOpen {
  status: boolean;
  id: string;
}

interface Props {
  status: boolean;
  id: string;
  handleOpen: ({ status, id }: PropsHandleOpen) => void;
}

const ConfirmationStatus = ({ status, id, handleOpen }: Props) => {
  const queryClient = useQueryClient();
  const { mutate: updateHotel, isSuccess } = useMutationServices({
    type: "update",
    collectionName: "hoteles",
    docId: id,
  });

  const handleCancel = () => {
    handleOpen({ status: false, id: "" });
  };

  const handleAccept = () => {
    updateHotel({ disponible: !status });

    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ["hotelesActivos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["hotelesInactivos"],
      });

      handleOpen({ status: false, id: "" });
    }
  };

  return (
    <div>
      <Typography>
        {status
          ? "Deseas Inabilitar este hotel?"
          : "Deseas habilitar este hotel?"}
      </Typography>
      <div>
        <Button onClick={handleAccept}>acceptar</Button>
        <Button color="error" onClick={handleCancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationStatus;
