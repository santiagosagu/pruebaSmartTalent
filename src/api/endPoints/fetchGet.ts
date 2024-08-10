interface IParamsType {
  resource: string[] | undefined;
  params?: string | undefined;
}

export const fetchGet = async ({ resource, params }: IParamsType) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/${resource?.join('')}/?${searchParams}`,
  ).then((fetchResponse) => fetchResponse.json());

  return response;
};
