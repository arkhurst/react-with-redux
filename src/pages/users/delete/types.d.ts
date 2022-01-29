import React from "react";
import { User } from "../types";

export interface DeleteUserModalProp {
  isModalShown: boolean;
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser?: User;
}
