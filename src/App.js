import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./pages/landingPage/LandPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import InstructorPage from "./pages/instructor/InstructorPage";
import BlogPage from "./pages/blogPage/BlogPage";
import ClassPage from "./pages/classes/ClassPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/instructors" element={<InstructorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/classes" element={<ClassPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
