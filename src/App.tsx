import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <main>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/power-gym" element={<Home />}></Route>
          <Route path="/power-gym/exercise/:id" element={<ExerciseDetail />}></Route>
        </Routes>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
