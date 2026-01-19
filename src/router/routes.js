// Import pages (assuming named exports based on HomePage structure)
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactMePage } from "../pages/ContactMePage";
import { CertificationPage } from "../pages/CertificationPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { ProjectPage } from "../pages/ProjectPage";
import { TechStackPage } from "../pages/TechStackPage";

const { HashRouter, Routes, Route } = window.ReactRouterDOM;

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-me" element={<ContactMePage />} />
        <Route path="/certification" element={<CertificationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        {/* Fallback route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </HashRouter>
  );
};