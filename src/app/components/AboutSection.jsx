"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: " Web Skills",
    id: "Wskills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind|Bootstrap</li>
        <li>Laravel</li>
        <li>HTML|CSS|JavaScript|PHP</li>
      </ul>
    ),
  },
  {
    title: "AI/Python Skills",
    id: "Askills",
    content: (
      <ul className="list-disc pl-2">
        <li>Tensorflow|Keras|ScikitLean</li>
        <li>Dataviz: PowerBi|Excel|Matplotlib|Ploty</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>Fullstack Academy of Code</li> */}
        <li>National School of Applied Sciences, Tetouan</li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("Wskills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/setup.jpg" width={500} height={500} alt="setup" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, PHP,  Laravel,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Wskills")}
              active={tab === "Wskills"}
            >
              {" "}
              Web Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Askills")}
              active={tab === "Askills"}
            >
              {" "}
              AI/Python Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
