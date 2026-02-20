import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ResultCard from "./components/ResultCard";
import Header from "./components/Header/Header";
import Student from "./components/student/Student";
import StudentProfile from "./components/StudentProfile";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/:rollno" element={<StudentProfile />} />
          <Route path="/student/:rollno/:semester" element={<ResultCard />} />
          <Route path="/about" element={<About/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;