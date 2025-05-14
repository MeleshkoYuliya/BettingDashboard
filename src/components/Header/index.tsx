import { Typography } from "@mui/material";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Typography variant="h4" component="h1" fontStyle="italic">
        Betting Dashboard
      </Typography>
    </StyledHeader>
  );
}

export default Header;
