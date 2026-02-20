import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ResultCard from "./components/ResultCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:rollno/:semester" element={<ResultCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;