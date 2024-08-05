"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website v.1",
    description: "simple portfolio made with Next",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KINDAAbdoulLatif/Portfolio",
    previewUrl: "https://github.com/KINDAAbdoulLatif/Portfolio",
  },
  {
    id: 2,
    title: "React Portfolio Website v.2",
    description: "Professional portfolio made with Next",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KINDAAbdoulLatif/KINDA",
    previewUrl: "https://github.com/KINDAAbdoulLatif/KINDA",
  },
  {
    id: 3,
    title: "Blog Application",
    description: "A blog made with Laravel",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KINDAAbdoulLatif/BlogLaravel",
    previewUrl: "https://github.com/KINDAAbdoulLatif/BlogLaravel",
  },
  {
    id: 4,
    title: "Button Maker Application",
    description: "Make your button, customize size, color, shadow-box, borders etc. ",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KINDAAbdoulLatif/Button_Maker",
    previewUrl: "https://github.com/KINDAAbdoulLatif/Button_Maker",
  },
  {
    id: 5,
    title: "Aircrafteam",
    description: "AI for aircraft recognition",
    image: "/images/projects/5.jpg",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/KINDAAbdoulLatif/Aircrafteam",
    previewUrl: "https://github.com/KINDAAbdoulLatif/Aircrafteam",
  },
  {
    id: 6,
    title: "Flight",
    description: "Big Data project for tracking US Flights",
    image: "/images/projects/6.jpg",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/KINDAAbdoulLatif/Flight_BigData",
    previewUrl: "https://github.com/KINDAAbdoulLatif/Flight_BigData",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
