import { Heading, HStack, Image, Text, VStack, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  
  return(
  <HStack>
    <VStack backgroundColor='white' borderRadius="10px" h="500px">
      <Image 
        src={imageSrc}
        borderTopStartRadius="10px"
        borderTopRightRadius="10px"
        w='100%'
        h='350px'
        objectFit='cover'
      />
      <Heading as='h4' size='md'color="black">{title}</Heading>
      <Text padding="10px" color="black">{description}</Text>
      <a
        href={url}
      >
        <Flex align="center" paddingBottom="5px" cursor="pointer">
          <Text marginEnd="5px" color="black"text-align= "left">See more</Text>
          <FontAwesomeIcon color="black"icon={faArrowRight} size="1x"/>
        </Flex>
      </a>
    </VStack>
    
  </HStack>
  );

};

export default Card;
