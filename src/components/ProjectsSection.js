import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Veterinary Patient Manager Web App",
    description:
      "React.JS project with VITE to manage patients for a veterinarian with the ability to save the information in LocalStorage.",
    getImageSrc: () => require("../images/photo1PJ.jpg"),
    url:"https://legendary-froyo-884021.netlify.app/"
  },
  {
    title: "Expense Control Web App",
    description:
      "React.JS project with VITE to control personal expenses with the ability to save the information in LocalStorage",
    getImageSrc: () => require("../images/photo2PJ.jpg"),
    url:"https://beautiful-twilight-2dcefa.netlify.app"
  },
  {
    title: "Cryptocurrency Quotation Web App",
    description:
      "React.js cryptocurrency quoting app with VITE, consuming an API.",
    getImageSrc: () => require("../images/photo3pj.jpg"),
    url:"https://dynamic-madeleine-c3408d.netlify.app/"
  },
  {
    title: "Movies Plus",
    description:
      "Project made in vanilla Javascript with HTML and CSS, which makes a call to an API querying movies.",
    getImageSrc: () => require("../images/photo4pj.jpg"),
    url:"https://heartfelt-pie-d91227.netlify.app/"
  },
  {
    title: "GuitarLA",
    description:
      "Full stack project of guitar store, blogs and more made in the frontend in Next Js, and the backend in Strapi, with a database in postgresSQL loaded in render. com. ",
    getImageSrc: () => require("../images/guitarLA.png"),
    url:"https://guitar-la-next-js-three.vercel.app/"
  },
];

const ProjectsSection = () => {

  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");


  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading 
        as="h1" 
        id="projects-section"
        textAlign={isLargerThan600 ?  "flex-start": "center" }
      >
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={isLargerThan600 ?"repeat(3,minmax(0,1fr))":"repeat(1,minmax(0,1fr))"}
        gridGap={8}
        
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
