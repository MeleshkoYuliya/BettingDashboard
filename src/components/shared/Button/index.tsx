import { Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode | string | number;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <MuiButton
      sx={{
        maxWidth: "fit-content",
        backgroundColor: "#0D727C",
        fontWeight: 600,
      }}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
