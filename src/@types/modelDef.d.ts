type TID = number | string;

interface ITodo {
  id: TID;
  userId: TID;
  completed: boolean;
  title: string
};