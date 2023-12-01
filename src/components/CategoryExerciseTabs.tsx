import { Box, Skeleton, Stack, Tab, Tabs } from "@mui/material";
import { useExerciseStore } from "../hooks/useExerrcise";
import { useEffect, useState } from "react";
import { fetchDataBodyPartList, fetchDataExercises, fetchDataExercisesByCategory } from "../action";

const CategoryExerciseTabs = () => {
  const bodyPartList = useExerciseStore((state) => state.bodyPartList);
  const category = useExerciseStore((state) => state.category);
  const setCategory = useExerciseStore((state) => state.setCategory);
  const setbodyPartList = useExerciseStore((state) => state.setBodyPartList);
  const setExercise = useExerciseStore((state) => state.setExercise);
  const setLoadingExercise = useExerciseStore((state) => state.setLoadingExercise);
  const [loadingCategory, setLoadingCategory] = useState(false);

  useEffect(() => {
    setLoadingCategory(true);
    const fetchData = async () => {
      try {
        const bodyPartListData = await fetchDataBodyPartList();
        if (bodyPartListData?.length) {
          setbodyPartList(bodyPartListData);
          setLoadingCategory(false);
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setLoadingCategory(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataExerciseByCategory = async (categoryValue: string) => {
    setLoadingExercise(true);
    try {
      const exercisesData = await fetchDataExercisesByCategory(categoryValue);
      if (exercisesData?.length) {
        setExercise(exercisesData);
        setLoadingExercise(false);
      }
    } catch (error) {
      console.error("Error fetching exercises:", error);
      setLoadingExercise(false);
    }
  };

  const getDataExercise = async () => {
    setLoadingExercise(true);
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

  const handleChangeCategory = (_event: React.SyntheticEvent, newValue: string) => {
    setCategory(newValue);
    if (newValue === "all") {
      getDataExercise();
    } else {
      getDataExerciseByCategory(newValue);
    }
  };

  const LoadingCategory = () => (
    <Stack direction={"row"} gap={1}>
      {Array.from({ length: 12 }, (_, index) => (
        <Skeleton variant="rounded" width={90} height={48} key={index}></Skeleton>
      ))}
    </Stack>
  );

  const DisplayCategory = () => (
    <Tabs
      value={category}
      onChange={handleChangeCategory}
      aria-label="Category Body Parts"
      variant="scrollable"
      sx={{
        "& .MuiTabs-flexContainer": {
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 1,
        },
        "& .MuiButtonBase-root.Mui-selected": {
          background: "#BE3144 !important",
          color: "#FFF !important",
        },
        "& .MuiTabs-indicator": {
          background: "transparent !important",
        },
      }}>
      <Tab
        label={"All"}
        value={"all"}
        sx={{
          background: "#FFF",
          border: "2px solid #BE3144",
          color: "#BE3144",
          borderRadius: 4,
          fontWeight: 500,
          transition: "all .3 ease",
          "&:hover": {
            background: "#BE3144",
            color: "#FFF",
          },
        }}
      />
      {bodyPartList?.length &&
        bodyPartList.map((item: string, index: number) => (
          <Tab
            key={index}
            label={item}
            value={item}
            sx={{
              background: "#FFF",
              border: "2px solid #BE3144",
              color: "#BE3144",
              borderRadius: 4,
              fontWeight: 500,
              transition: "all .3 ease",
              "&:hover": {
                background: "#BE3144",
                color: "#FFF",
              },
            }}
          />
        ))}
    </Tabs>
  );

  return <Box mb={4}>{loadingCategory ? <LoadingCategory /> : <DisplayCategory />}</Box>;
};
export default CategoryExerciseTabs;
