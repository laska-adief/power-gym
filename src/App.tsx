import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
