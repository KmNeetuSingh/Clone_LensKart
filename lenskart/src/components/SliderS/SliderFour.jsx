import React from "react";

import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

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
      zIndex="1"
      cursor="pointer"
    />
  );
}

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
      left="30px"
      top="50%"
      zIndex="1"
      cursor="pointer"
    />
  );
}

const SliderFour = () => {
  const settings = {
    autoplay: false,
    Infinity: false,
    speeed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  const arr = [
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s15407-c1-sunglasses_g_2710_07_02_2023.jpg",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-blue-full-rim-round-vincent-chase-livewire-vc-s14505-c5-polarized-sunglasses_g_7702.jpg",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/gold-brown-gradient-full-rim-square-john-jacobs-jj-tints-jj-s12473-c2-sunglasses_g_8651_front.jpg",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/grey-tortoise-full-rim-wayfarer-vincent-chase-polarized-classics-vc-s16746-c1-sunglasses_img_5624_04_03_2024.jpg",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Vincent-Chase-VC-S14457-C3-Sunglasses_G_7067.jpg",
    "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Vincent-Chase-VC-S14457-C3-Sunglasses_G_7067.jpg",
  ];

  return (
    <Box w={"80%"} m={"auto"} pt={2} pb={2} position={"relative"}>
      <Slider {...settings}>
        {arr.map((ele, i) => {
          return <img src={ele} alt="slideer" key={i} />;
        })}
      </Slider>
    </Box>
  );
};

export default SliderFour;
