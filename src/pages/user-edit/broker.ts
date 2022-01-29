import { User } from "../../pages/users/types";

export function getUserDetails(userId: number, userList: Array<User>) {
  console.log(userId);

  let user = userList.find((user: User) => user.id === userId);
  return user;
}
