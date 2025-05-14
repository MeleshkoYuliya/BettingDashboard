import { Betting } from "@/types";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

const defaultData = [
  {
    id: 1,
    teams: [
      {
        name: "Team A",
        odds: 1.5,
        bets: 10,
      },
      {
        name: "Team B",
        odds: 2.5,
        bets: 5,
      },
    ],
  },
  {
    id: 2,
    teams: [
      {
        name: "Team C",
        odds: 1.8,
        bets: 20,
      },
      {
        name: "Team D",
        odds: 2.1,
        bets: 3,
      },
    ],
  },
  {
    id: 3,
    teams: [
      {
        name: "Team E",
        odds: 1.3,
        bets: 15,
      },
      {
        name: "Team F",
        odds: 3.0,
        bets: 7,
      },
    ],
  },
];

export const getBettings = (): Promise<Betting[]> => {
  const dbData = localStorage.getItem("bettings");
  const parsedData = dbData ? JSON.parse(dbData) : defaultData;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(parsedData);
      if (!dbData) {
        localStorage.setItem("bettings", JSON.stringify(parsedData));
      }
    }, 1000);
  });
};

export const addBettings = (): Promise<Betting[]> => {
  const dbData = localStorage.getItem("bettings");
  const parsedData = dbData ? JSON.parse(dbData) : defaultData;
  const newBetting = {
    id: uuidv4(),
    teams: [
      {
        name: faker.company.name(),
        odds: faker.number.float({max: 10}),
        bets: faker.number.int({max: 100}),
      },
           {
        name: faker.company.name(),
        odds: faker.number.float({max: 10}),
        bets: faker.number.int({max: 100}),
      },
    ],
  };
  const newData = [...parsedData, newBetting];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newData);
      localStorage.setItem("bettings", JSON.stringify(newData));
    }, 500);
  });
};
