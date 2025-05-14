import { Skeleton } from "@mui/material";

function LoadingComponent() {
  const cards = Array.from({
    length: 6,
  });

  return (
    <>
      {cards.map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          animation="wave"
          sx={{ height: "100px", bgcolor: "rgba(0,0,0,0.1)" }}
        />
      ))}
    </>
  );
}

export default LoadingComponent;
