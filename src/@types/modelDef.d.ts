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

interface IUserGeo {
  lat: string;
  lng: string;
}

interface IUserAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserGeo;
};

interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUser {
  id: TID;
  name: string;
  username: string;
  email: string;
  address: IUserAdress;
  phone: string;
  website: string;
  company: IUserCompany;
}
  
  