import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import CategoryExerciseTabs from "../components/CategoryExerciseTabs";

const Home = () => {
  return (
    <Box>
      <section style={{ minHeight: `calc(100vh - 116px)` }}>
        <HeroBanner />
      </section>
      <section id="exercises">
        <SearchExercises />
        <CategoryExerciseTabs />
        <Exercises />
      </section>
    </Box>
  );
};
export default Home;
