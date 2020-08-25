export const fetcher = async <T>(
  url: string,
  token: string,
  qs?: URLSearchParams
): Promise<T> => {
  try {
    const query = qs ? `?${qs.toString()}` : '';
    const response = await fetch(`${url}${query}`, {
      method: HttpMethod.GET,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const mutator = async <T>(
  url: string,
  method: HttpMethod,
  token?: string,
  body?: T
): Promise<IResponse> => {
  try {
    const response = await fetch(url, {
      method,
      headers: token
        ? {
            'Content-Type': 'application/json',
            Authorization: token,
          }
        : headersWithoutToken,
      body: JSON.stringify(body),
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const headersWithoutToken = {
  'Content-Type': 'application/json',
};

export interface IResponse {
  response?: Response;
  error?: Error;
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
