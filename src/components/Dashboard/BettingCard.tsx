import Card from "../shared/Card";
import { Betting } from "@/types";
import { Typography } from "@mui/material";
import { floatNumberFormat } from "../../helpers/numbers";

interface BettingCardProps {
  betting: Betting;
}

function BettingCard({ betting }: BettingCardProps) {
  const title = betting.teams.map(({ name }) => name).join(" vs ");
  const odds = betting.teams
    .map(({ odds }) => floatNumberFormat(odds))
    .join(" vs ");
  const bets = betting.teams.map(({ bets }) => bets).join(" vs ");

  return (
    <Card title={title}>
      <Typography variant="subtitle1">Odds: {odds}</Typography>
      <Typography variant="subtitle1">Bets: {bets}</Typography>
    </Card>
  );
}

export default BettingCard;
