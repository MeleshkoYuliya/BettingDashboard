import { StyledContentContainer, StyledRootContainer } from "./styles";
import Button from "../shared/Button";
import { addBettings, getBettings } from "../../api/bettings";
import { useEffect, useState } from "react";
import { Betting } from "@/types";
import { Box } from "@mui/material";
import LoadingComponent from "./LoadingComponent";
import BettingCard from "./BettingCard";
import Loader from "../shared/Loader";

function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true);
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [bettings, setBettings] = useState<Betting[]>([]);

  const fetchData = async () => {
    try {
      const data: Betting[] = await getBettings();
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
      const data: Betting[] = await addBettings();
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
        <Button onClick={createBetting} disabled={loading || createLoading}>
          Generate a new betting card
        </Button>
      </Box>
      {createLoading && <Loader />}
      <StyledContentContainer>
        {loading ? (
          <LoadingComponent />
        ) : (
          bettings?.map((item) => <BettingCard betting={item} key={item.id} />)
        )}
      </StyledContentContainer>
    </StyledRootContainer>
  );
}

export default Dashboard;
