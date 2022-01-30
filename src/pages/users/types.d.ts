export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};
export interface Address {
  city: string;
}
