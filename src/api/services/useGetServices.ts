/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import fetchFilteredData from "../endPoints/testFilteredData";
import fetchCollections from "../endPoints/testFetchCollection";

interface UseFilteredDataOptions {
  key: string;
  collectionName: string;
  filters?: any;
}

const useGetServices = ({
  key,
  collectionName,
  filters,
}: UseFilteredDataOptions) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => {
      if (filters) {
        return fetchFilteredData(collectionName, filters);
      } else {
        return fetchCollections(collectionName);
      }
    },
  });
};

export default useGetServices;
