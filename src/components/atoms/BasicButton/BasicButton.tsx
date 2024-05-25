import React from "react";
import Button from "@mui/material/Button";

export interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CustomButton;
