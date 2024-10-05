import React from 'react'
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
const Video = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener('resize' , handleResize)
    }
  },[])
  return (
    <SimpleGrid w={"99%"} bg={"#FFF092"}>
      <Box
        textAlign={{ base: "center", md: "center" }}
        m={"auto"}
        fontFamily={"sans-serif"}
      >
        <Text mt={8} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "MEET OUR HAPPY CUSTOMERS"
            : "  MEET OUR HAPPY CUSTOMERS "}
        </Text>
      </Box>
      <Flex
        justifyContent={"center"}
        gap={10}
        flexWrap={"wrap"}
        mt={10}
        mb={10}
        textAlign={"center"}
      >
        <Box>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/HYPqf_eVvvM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Box>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/IZpUQ-S_LcM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Box>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/SQm3RxXRunw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}

export default Video
