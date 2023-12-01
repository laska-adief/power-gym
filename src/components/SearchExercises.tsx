import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchDataExercises } from "../action";
import { useExerciseStore } from "../hooks/useExerrcise";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const setLoadingExercise = useExerciseStore((state) => state.setLoadingExercise);
  const setExercise = useExerciseStore((state) => state.setExercise);
  const setSearchValue = useExerciseStore((state) => state.setSearchValue);

  useEffect(() => {
    setLoadingExercise(true);
    const fetchData = async () => {
      try {
        const exercisesData = await fetchDataExercises();
        if (exercisesData?.length) {
          setExercise(exercisesData);
          setLoadingExercise(false);
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setLoadingExercise(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    setSearchValue(search);
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} textAlign={"center"} mt={6} py={4} gap={4}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Exceptional Workouts
      </Typography>

      <Stack direction={"row"} sx={{ width: { xs: "100%", md: "50%" } }} gap={1}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e?.target?.value.toLowerCase())}
          variant="outlined"
          size="small"
          placeholder="Search Exercise"
          sx={{ width: "100%", background: "#FFF", borderRadius: 1, border: "none", outline: "none" }}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{
            background: "#BE3144",
            "&:hover": {
              background: "#872341",
            },
          }}>
          Search
        </Button>
      </Stack>
    </Stack>
  );
};
export default SearchExercises;
