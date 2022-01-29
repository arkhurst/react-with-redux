export interface User {
  name: string;
  username: string;
  email: string;
  id: number;
  address: Address;
}

export interface Address {
  city: string;
}
