import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <section style={{ minHeight: `calc(100vh - 116px)` }}>
        <HeroBanner />
      </section>
      <section id="exercises">
        <SearchExercises />
        <Exercises />
      </section>
    </Box>
  );
};
export default Home;
