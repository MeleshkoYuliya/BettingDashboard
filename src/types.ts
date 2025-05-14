export type Team = {
  name: string;
  odds: number;
  bets: number;
};

export type Betting = {
  id: number;
  teams: Team[];
};
