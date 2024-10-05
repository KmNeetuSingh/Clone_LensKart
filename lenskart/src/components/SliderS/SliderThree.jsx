import React from 'react'

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


const SliderThree = () => {

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
     " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688470121-img_7893.jpg",
     " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-gold-full-rim-rectangle-lenskart-air-essentials-la-e13517-c2-eyeglasses_csvfile-1695816767916-g_7546_27_09_2023.jpg",
     " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/olive-full-rim-wayfarer-lenskart-hustlr-lh-e16985-w-c2-eyeglasses_img_2273_14march24.jpg",
     " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/crystal-full-rim-wayfarer-lenskart-hustlr-lh-e16985-w-c5-eyeglasses_img_2262_14march24.jpg",
     " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13634-ful-ram-ale-metl-stlbr-c1-eyeglasaas_g_4921.jpg",
     " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0533.jpg",
   ];
  
  return (
    <Box w={"80%"} m={"auto"} pt={2} pb={2} position={"relative"}>
      <Slider {...settings}>
        {arr.map((ele, i) => {
          return (
             <img src={ele} alt="slideer" key={i} />
           )
         })}
      </Slider>

</Box>
  )
}

export default SliderThree
