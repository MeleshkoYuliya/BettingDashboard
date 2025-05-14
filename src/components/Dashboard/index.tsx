import Card from "../shared/Card";
import { StyledContentContainer, StyledRootContainer } from "./styles";
import Button from "../shared/Button";
import { addBettings, getBettings } from "../../api/bettings";
import { useEffect, useState } from "react";
import { Betting } from "@/types";
import { Box, CircularProgress, Typography } from "@mui/material";
import { floatNumberFormat } from "../../helpers/numbers";
import LoadingComponent from "./LoadingComponent";

function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true);
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [bettings, setBettings] = useState<Betting[]>([]);

  const fetchData = async () => {
    try {
      const data = await getBettings();
      setBettings(data);
    } catch (e) {
      return console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const createBetting = async () => {
    try {
      setCreateLoading(true);
      const data = await addBettings();
      setBettings(data);
    } catch (e) {
      return console.log(e);
    } finally {
      setCreateLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledRootContainer>
      <Box sx={{ position: "sticky", top: "110px" }}>
        <Button onClick={createBetting} disabled={loading}>
          Generate a new betting card
        </Button>
      </Box>
      {createLoading && (
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
      )}
      <StyledContentContainer>
        {loading ? (
          <LoadingComponent />
        ) : (
          bettings?.map((item) => {
            const title = item.teams.map(({ name }) => name).join(" vs ");
            const odds = item.teams
              .map(({ odds }) => floatNumberFormat(odds))
              .join(" vs ");
            const bets = item.teams.map(({ bets }) => bets).join(" vs ");
            return (
              <Card key={item.id} title={title}>
                <Typography variant="subtitle1">Odds: {odds}</Typography>
                <Typography variant="subtitle1">Bets: {bets}</Typography>
              </Card>
            );
          })
        )}
      </StyledContentContainer>
    </StyledRootContainer>
  );
}

export default Dashboard;
