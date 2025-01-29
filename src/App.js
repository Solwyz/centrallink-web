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




import ServiceDetailDynamic from "./User/Pages/ServicePage/ServiceDetailDynamic";


function App() {
  const location = useLocation();

  return (
    <div className="App font-nunito">
      <ScrollToTop />
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<User />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="/services/details/:id" element={<ServiceDetailDynamic />} />
          <Route path="services/details/office-interior" element={<ServiceDetail />} />
         
          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogs/details/:id" element={<BlogDetails />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} /> {/* Admin login route */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminProject />} />
          <Route path="project" element={<AdminProject />} />
          <Route path="services" element={<AdminService />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="enquiry" element={<AdminEnquiry />} />
          <Route path="general" element={<AdminGeneral />} />
        </Route>
      </Routes>

      {/* WhatsApp Popup - Show only for user routes */}
      {!location.pathname.startsWith("/admin") && <WhatsAppPopup />}
    </div>
  );
}

export default App;
