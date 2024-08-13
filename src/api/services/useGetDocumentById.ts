/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getDocumentById } from "../endPoints/getDocumentById";

interface UseFilteredDataOptions {
  key: string;
  collectionName: string;
  docId: any;
  enabled?: boolean;
}

const useGetDocumentById = ({
  key,
  collectionName,
  docId,
  enabled,
}: UseFilteredDataOptions) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => {
      return getDocumentById({ collectionName, docId });
    },
    enabled,
  });
};

export default useGetDocumentById;
