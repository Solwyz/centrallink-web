import "./App.css";
import User from "./User/User";
import HomePage from "./User/Pages/Homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./User/Pages/AboutPage/AboutPage";
import ContactPage from "./User/Pages/ContactPage/ContactPage";
import ProjectsPage from "./User/Pages/ProjectsPage/ProjectsPage";
import BlogPage from "./User/Pages/BlogPage/BlogPage";
import ServicePage from "./User/Pages/ServicePage/ServicePage";
import ServiceDetail from "./User/Pages/ServicePage/ServiceDetail";
import BlogDetails from "./User/Pages/BlogPage/BlogDetails";
import ScrollToTop from "./ScrollToTop";
import WhatsAppPopup from "./User/Section/WhatsAppPopup";

function App() {
  return (
    <div className="App font-nunito">
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<User />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="services/details" element={<ServiceDetail />} />

          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogs/details" element={<BlogDetails />} />

          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <WhatsAppPopup/>
    </div>
  );
}

export default App;
