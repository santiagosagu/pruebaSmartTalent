/* eslint-disable @typescript-eslint/no-explicit-any */

interface Iprops {
  data: any;
  resource: string[];
  params?: string | undefined;
}

const fetchTestMutation = async ({ data, resource, params }: Iprops) => {
  const searchParams = new URLSearchParams(params);

  const response = await fetch(
    `https://reqres.in/api/${resource?.join('')}/?${searchParams}`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        // Authorization: `Bearer ${cookie.load('token')}`,
        'Content-type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: JSON.stringify(data),
    },
  ).then((fetchResponse) => fetchResponse.json());

  return response;
};

export default fetchTestMutation;
