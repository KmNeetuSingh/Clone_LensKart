import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Slider from "react-slick";


import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Next Arrow Component
export function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      borderRadius="50%"
      width="50px"
      height="50px"
      position="absolute"
      right="20px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      cursor="pointer"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <FaArrowRight color="white" />
    </Box>
  );
}

// Custom Previous Arrow Component
export function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      borderRadius="50%"
      width="50px"
      height="50px"
      position="absolute"
      left="20px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      cursor="pointer"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <FaArrowLeft color="white" />
    </Box>
  );
}

const SliderTwo = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const arr = [
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
      name: "Round",
      button: "Explore",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
      name: "Cat-eye",
      button: "Explore",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
      name: "Clubmaster",
      button: "Explore",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
      name: "Trans",
      button: "Explore",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
      name: "Clip-on",
      button: "Explore",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
      name: "AirClip",
      button: "Explore",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
      name: "Aviator",
      button: "Explore",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
      name: "Clubmaster",
      button: "Explore",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
      name: "Club",
      button: "Explore",
    },
  ];

  return (
    <Box w={"80%"} m={"auto"} p={2} pb={2} position={"relative"}>
      <Slider {...settings}>
        {arr.map((ele) => {
          return (
            <Box
              textAlign={"center"}
              key={ele.img} 
              padding={2}
            >
              <Box
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
              >
                <img
                  src={ele.img}
                  alt={`${ele.name} slider`}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              </Box>
              <Text textAlign={"center"} fontWeight="bold" mt={2}>
                {ele.name}
              </Text>
              <Button mt={2} colorScheme="teal">
                {ele.button}
              </Button>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default SliderTwo;
