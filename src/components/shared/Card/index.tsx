import { ReactNode } from "react";
import { StyledCard } from "./styles";
import { Typography } from "@mui/material";

interface CardProps {
  children: ReactNode;
  title: string;
}

function Card({ children, title }: CardProps) {
  return (
    <StyledCard elevation={1}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      {children}
    </StyledCard>
  );
}

export default Card;
