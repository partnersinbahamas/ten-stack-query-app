export const BASE_URL="https://jsonplaceholder.typicode.com";

function request(url: string, method: TAPIMethod, data?: any) {
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

export const get = async(url: string) => await request(url, 'GET');
export const post = async(url: string, data: any) => await request(url, 'POST', data);
export const put = async(url: string, data: any) => await request(url, 'PUT', data);
export const remove = async(url: string) => await request(url, 'DELETE');
