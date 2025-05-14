import { Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode | string | number;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <MuiButton
      sx={{
        maxWidth: "fit-content",
        backgroundColor: "#0D727C",
        fontWeight: 600,
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
