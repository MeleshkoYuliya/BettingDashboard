import { styled } from "@mui/material/styles";

export const StyledContentContainer = styled("div")(
  () => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
  })
);

export const StyledRootContainer = styled("div")(
  () => ({
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    backgroundColor: '#11423B',
    boxSizing: 'border-box',
    minHeight: 'calc(100vh - 100px)'
  })
);
