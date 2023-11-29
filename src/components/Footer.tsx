import { Stack, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Stack justifyContent={"center"} alignItems={"center"} p={2} bgcolor={"#161A30"} color={"#FFF"}>
        <Typography>&copy; {currentYear} Power Gym. All rights reserved. Created by Laska Adief</Typography>
      </Stack>
    </footer>
  );
};
export default Footer;
