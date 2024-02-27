export type AdressInterface = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type CompanyInterface = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserInterface = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AdressInterface;
  phone: string;
  website: string;
  company: CompanyInterface;
};
