import { Stack } from "@mui/material";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" gap={10} py={4}>
      <Link to="/">
        <img src={Logo} alt="logo" width={48} height={48} />
      </Link>

      <Stack direction="row" gap={2}>
        <Link to="/" style={{ fontSize: "24px", fontWeight: "bold", color: "#22092C" }}>
          Home
        </Link>
      </Stack>
    </Stack>
  );
};
export default Navbar;
