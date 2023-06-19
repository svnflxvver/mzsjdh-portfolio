import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-violet-600 border-0 rounded"></hr>
      </h1>

      <div className="md:mt-2 md:w-3/5">
        <p className="text-lg font-bold mt-4 mb-6 md:text-2xl">
          Nothing to be displayed.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
