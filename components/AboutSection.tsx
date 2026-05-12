import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Go Lang" },
  { skill: "Node.JS" },
  { skill: "Bootstrap" },
  { skill: "Tailwind CSS" },
  { skill: "Daisy UI" },
  { skill: "Figma" },
  { skill: "Canva" },
  { skill: "DaVinci Resolve" },
  { skill: "CapCut" },
  { skill: "Google Suites" },
  { skill: "R" },
  { skill: "Tableau" },
  { skill: "SQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Hyperledger Fabric" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-violet-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-12 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-justify">
              Hi, my fullname contains five words but people usually <br/> call me <span className="font-bold">{"Moza"}</span> 👋🏻 {" "}
              <span className="underline underline-offset-2">{"Currently"}</span>, I am based in <span className="font-bold">{"Central Jakarta, Indonesia"}</span>.
            </p>
            <br/>
            <p className="text-justify">
              I hold a Bachelor’s degree in Informatics, graduating with honors of cum laude, and spent a decade living abroad, an experience that shaped my perspective and adaptability.
            </p>
            <br/>
            <p className="text-justify">
              I have been working as <span className="font-bold">a data scientist in the financial services industry for over a year</span>, 
              primarily focusing on credit scoring models, documentation, user acceptance testing, and generating analytical reports using Tableau.
              My work occasionally bridges into front-end tasks, such as troubleshooting and improving report templates.
            </p>
            <br />
            <p className="text-justify">
              Before transitioning into data science, <span className="font-bold">I spent a year training and interning as a front-end developer. </span>
              While working closely with data and reporting systems, <span className="font-bold">I rediscovered that my true passion lies in front-end engineering and building engaging digital interfaces</span>, 
              and I’m now eager to pursue this path more deeply.
            </p>
            <br />
            <p className="text-justify">
              Beyond technology, I enjoy visual storytelling through photography and videography. 
              I’m particularly interested in color grading, aspire to become a colorist, and am curious about the creative possibilities of 3D web development.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:z-0"
            />
            <h1 className="text-2xl font-bold mb-6 mt-8">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 oklch(62.7% 0.265 303.9) px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
