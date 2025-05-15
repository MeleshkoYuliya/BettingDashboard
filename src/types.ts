export type Team = {
  name: string;
  odds: number;
  bets: number;
};

export type Betting = {
  id: number | string;
  teams: Team[];
};
