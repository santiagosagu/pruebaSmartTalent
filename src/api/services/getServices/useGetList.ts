/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import dataTransform from '../../transforms/transformDataGet/index';
import { fetchGet } from '../../endPoints/fetchGet';

interface IParamsService {
  key: string;
  resource: string[];
  params?: any;
  keyResults: string;
  enabled?: boolean;
}

const useGetList = ({
  key,
  resource,
  params,
  keyResults,
  enabled = true,
}: IParamsService) => {
  const paramsFetch: any = { resource, params };

  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [key],
    queryFn: () => fetchGet(paramsFetch),
    enabled,
  });

  if (data) {
    const { metaData, results } = dataTransform(data, keyResults);

    return { error, data: results, metaData, isLoading, refetch };
  } else {
    return { error, data, isLoading, refetch };
  }
};

export default useGetList;
