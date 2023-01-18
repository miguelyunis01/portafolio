import React from "react";
import { Avatar, Heading, VStack, useMediaQuery  } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from '../images/foto_perfil.jpeg';
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css-3.png'
import jsLogo from '../images/java-script.png'
import reactLogo from '../images/react.png'
import boostrapLogo from '../images/bootstrap.png'
import NextLogo from '../images/nextJS Logo.png'
import gitLogo from '../images/git.png'
import remixLogo from '../images/remix.png'
import tailwindLogo from '../images/tailwind.png'
import '../styles/LandingSection.css';

const greeting = "Hello, I am Miguel!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {

  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
    
  return (
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <VStack maxW='container.sm'>
    <Avatar 
      mt={isLargerThan600 ?  0:8 }
      size='2xl' 
      name='Miguel Yunis'
      src={profilePic} 
    />
    <Heading as ='h4' size='xs'>{greeting}</Heading>
    <Heading>{bio1}</Heading>
    
    <div className="container">
      <div className="img-container" >
        <img className="img" src={htmlLogo} alt="html"/>
      </div>
      <div className="img-container" >
        <img className="img" src={cssLogo} alt="css"/>
      </div>
      <div className="img-container" >
        <img className="img" src={jsLogo} alt="JS"/>
      </div>
      <div className="img-container" >
        <img className="img react" src={reactLogo} alt="React"/>
      </div>
      <div className="img-container" >
        <img className="img react" src={NextLogo} alt="next"/>
      </div>
      <div className="img-container" >
        <img className="img react" src={remixLogo} alt="remix"/>
      </div>
      <div className="img-container" >
        <img className="img react" src={boostrapLogo} alt="boostrap"/>
      </div>
      <div className="img-container" >
        <img className="img react" src={tailwindLogo} alt="tailwind"/>
      </div>
      <div className="img-container" >
        <img className="img react" src={gitLogo} alt="boostrap"/>
      </div>
    </div>
    </VStack>
    
  </FullScreenSection>
  )

  


  };

export default LandingSection;
