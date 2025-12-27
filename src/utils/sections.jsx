import AboutSection from "../assets/AboutSection/AboutSection";
import ProjectSection from "../assets/ProjectSection";
import BlogSection from "../assets/BlogSection";
import BioSection from "../assets/AboutSection/BioSection";

export const sections = [
  { id: "bio", Component: AboutSection, title: "Biography", className: "flex justify-center" },
  { id: "projects", Component: ProjectSection, title: "Projects", className: "w-full" },
  { id: "blog", Component: BlogSection, title: "Blog", className: "w-full" },
];