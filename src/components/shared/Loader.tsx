import { Box, CircularProgress } from "@mui/material";

function Loader() {

  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        top: 0,
      }}
    >
      <CircularProgress sx={{ color: "black" }} />
    </Box>
  );
}

export default Loader;
