export const BASE_URL="https://jsonplaceholder.typicode.com";

function request<T>(url: string, method: TAPIMethod, data?: any): Promise<T> {
  const options: IAPIOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "no-cors"
    },
  }

  if (data) options.body = JSON.stringify(data);

  return fetch(`${BASE_URL}/${url}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`)
      };

      return response.json();
    })
    .catch(error => console.log(error))
}

export const get = async<T>(url: string) => await request<T>(url, 'GET');
export const post = async<T>(url: string, data: any) => await request<T>(url, 'POST', data);
export const put = async<T>(url: string, data: any) => await request<T>(url, 'PUT', data);
export const remove = async<T>(url: string) => await request<T>(url, 'DELETE');
