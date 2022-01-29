import { User } from "../types";

export interface MainComponentProp {
  onEdit: (dataFromView: User) => void;
  onDelete: (dataFromView: User) => void;
  users: Array<User>;
}

export interface CardComponentProp {
  onEdit: () => void;
  onDelete: () => void;
  user: User;
}
