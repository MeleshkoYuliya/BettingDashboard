import Card from "../shared/Card";
import { StyledContentContainer, StyledRootContainer } from "./styles";
import Button from "../shared/Button";
import { addBettings, getBettings } from "../../api/bettings";
import { useEffect, useState } from "react";
import { Betting } from "@/types";
import { Typography } from "@mui/material";
import { floatNumberFormat } from "../../helpers/numbers";
import LoadingComponent from "./LoadingComponent";

function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true);
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
      const data = await addBettings();
      setBettings(data);
    } catch (e) {
      return console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledRootContainer>
      <Button onClick={createBetting} disabled={loading}>
        Generate a new betting card
      </Button>
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
              <Card key={item.id}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {title}
                </Typography>
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
