import { Box, Button, Stack, Typography } from "@mui/material";
import BannerImage from "../assets/hero-image.svg";

const HeroBanner = () => {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          component={"h1"}
          sx={{
            fontSize: { xs: "3rem", sm: "3.5rem", md: "3.6rem", lg: "5rem", xl: "6rem" },
            fontWeight: "bold",
            lineHeight: 1,
            mb: 2,
            display: "inline-block",
          }}>
          Embrace Power
          <br /> of <span style={{ color: "#BE3144" }}>Exercise</span>
        </Typography>
        <Typography
          component={"h3"}
          sx={{
            fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem", lg: "2rem" },
            fontWeight: 300,
            mb: 4,
          }}>
          Start Your Journey to a Healthier Lifestyle Today
        </Typography>
        <Button
          href="#exercises"
          variant="contained"
          sx={{
            background: "#BE3144",
            "&:hover": {
              background: "#872341",
            },
          }}>
          Explore Exercise
        </Button>
      </Box>
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img
          src={BannerImage}
          alt="hero-image"
          style={{
            width: "90%",
          }}
        />
      </Box>
    </Stack>
  );
};
export default HeroBanner;
