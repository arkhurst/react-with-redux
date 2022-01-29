import React from "react";

export interface IModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  size?: number;
  height?: number;
  canClose?: boolean;
}
