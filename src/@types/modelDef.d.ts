type TID = number | string;

type TAPIMethod = 'GET' | 'PUT' | 'POST' | 'DELETE';

interface IAPIOptions {
  method: TAPIMethod,
  headers: { [key: string]: string },
  body?: BodyInit,
}

interface ITodo {
  id: TID;
  userId: TID;
  completed: boolean;
  title: string
};