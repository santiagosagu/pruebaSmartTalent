/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { updateDocument } from "../endPoints/updateDocument";
import { addDocument } from "../endPoints/addDocument";

interface UseUpdateDocumentOptions {
  type: string;
  collectionName: string;
  docId?: string;
}

export const useMutationServices: any = ({
  type,
  collectionName,
  docId,
}: UseUpdateDocumentOptions) => {
  return useMutation({
    mutationFn: (data: Record<string, any>) => {
      if (type === "update" && docId) {
        return updateDocument({ collectionName, docId, data });
      }

      return addDocument({ collectionName, data });
    },
  });
};
