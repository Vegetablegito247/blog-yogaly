import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./pages/landingPage/LandPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import InstructorPage from "./pages/instructor/InstructorPage";
import BlogPage from "./pages/blogPage/BlogPage";
import ClassPage from "./pages/classes/ClassPage";
import DisplayDashboard from "./dashboard/mainpage";
import OverviewPage from "./dashboard/overviewPage/OverviewPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogAdmin from "./adminForm/LogAdmin";
import BlogView from "./components/blogDetails/BlogView";
import ClassView from "./components/classDetails/ClassView";
import Classes from "./dashboard/classPage";
import Blogs from "./dashboard/blogPage";
import Subscribers from "./dashboard/subscriberPage";
import BlogDashMain from "./dashboard/blogPage/BlogDashMain";
import ClassDashMain from "./dashboard/classPage/ClassDashMain";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/instructors" element={<InstructorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogView />} />
          <Route path="/classes" element={<ClassPage />} />
          <Route path="dashboard" element={<DisplayDashboard />}>
            <Route index element={<OverviewPage />} />
            <Route path="class" element={<Classes />}>
              <Route index element={<ClassDashMain />} />
            </Route>
            <Route path="blogs" element={<Blogs />}>
              <Route index element={<BlogDashMain />} />
            </Route>            
            <Route path="subscribers" element={<Subscribers />} />
          </Route>
          <Route path="admin" element={<LogAdmin />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
