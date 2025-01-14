import "./App.css";
import User from "./User/User";
import HomePage from "./User/Pages/Homepage/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./User/Pages/AboutPage/AboutPage";
import ContactPage from "./User/Pages/ContactPage/ContactPage";
import ProjectsPage from "./User/Pages/ProjectsPage/ProjectsPage";
import BlogPage from "./User/Pages/BlogPage/BlogPage";
import ServicePage from "./User/Pages/ServicePage/ServicePage";
import ServiceDetail from "./User/Pages/ServicePage/ServiceDetail";
import BlogDetails from "./User/Pages/BlogPage/BlogDetails";
import ScrollToTop from "./ScrollToTop";
import WhatsAppPopup from "./User/Section/WhatsAppPopup";
import AdminLayout from "./Admin/Section/AdminLayout";
import AdminLogin from "./Admin/Pages/LoginPage/AdminLogin";
import AdminProject from "./Admin/Pages/AdminProjects/AdminProject";
import AdminService from "./Admin/Pages/AdminServices/AdminService";
import AdminBlogs from "./Admin/Pages/AdminBlogs/AdminBlogs";
import AdminEnquiry from "./Admin/Pages/AdminEnquiry/AdminEnquiry";
import AdminGeneral from "./Admin/Pages/AdminGeneral/AdminGeneral";

function App() {
  const location = useLocation();

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

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminProject />} />
          <Route path="project" element={<AdminProject />} />
          <Route path="services" element={<AdminService />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="enquiry" element={<AdminEnquiry />} />
          <Route path="general" element={<AdminGeneral />} />
        </Route>
      </Routes>

      {/* Only show WhatsAppPopup if not in the admin section */}
      {!location.pathname.startsWith("/admin") && <WhatsAppPopup />}
    </div>
  );
}

export default App;
