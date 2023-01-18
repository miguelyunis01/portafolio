import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useMediaQuery } from "@chakra-ui/react";


const socials = [
  {
    icon: faEnvelope,
    url: "mailto: miguelyunis001@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/miguelyunis01",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/miguel-angel-yunis-porras-a00066124/",
  },
];


const Header = () => {
  const headerRef = useRef(null);
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    let prevScrollPos = window.scrollY;
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
  
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
         /*px={16}*/
          px={isLargerThan600 ? 16 : 4}
          py={isLargerThan600 ? 4 : 6}
          display={isLargerThan600 ? "flex" : "block"}
          justifyContent={isLargerThan600 ?  "space-between": "center" }
          alignItems="center"
        >
          <nav>
            <HStack /*spacing={8}*/ 
              spacing={isLargerThan600? 6 : 6} 
              justifyContent={isLargerThan600 ?  "space-between": "center" }
            >
              {socials.map(({ icon, url }) => {
                return(
                <a 
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} size="2x" key={url} />
                </a>
              );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack /*spacing={8}*/ 
              spacing={isLargerThan600 ? 6 : 6} 
              justifyContent={isLargerThan600 ?  "space-between": "center" }
              mt={isLargerThan600 ?  0:5 }
            >
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contactme" onClick={handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
