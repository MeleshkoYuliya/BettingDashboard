import { ReactNode } from "react";
import { StyledCard } from "./styles";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <StyledCard elevation={1}>{children}</StyledCard>;
}

export default Card;
