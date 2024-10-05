import React from 'react'
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

export const SampleNextArrow = (props) => {
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
const SliderFive = () => {
  const settings = {
    autoplay: true,
    Infinity: true,
    speed: 200,
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
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-10h-dailies_csvfile-1706873774153-1_02_02_2024.jpg",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-24-h-contact-lens-30-lens-box-contact-lens_g_2766_1.jpg ",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-24h-toric-dailies_aqualens-24-h-daily-disposable-toric-contact-lens--30-lens-box_csvfile-1681127655690-144128.png.png",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-nxt-monthly_csvfile-1706625948211-artboard_12.jpg",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-10h-monthly_csvfile-1706697736381-1.jpg",
    " https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-24h-toric-monthly_aqualens-24h-toric-monthly---3lp_csvfile-1682208663780-135218.png.png ",
  ];
  return (
    <Box w={'80%'} m={'auto'} pt={2}pb={2} position={'relative'}>
      <Slider {...settings}>
        {
          arr.map((ele, i) => {
            return (
              <img src={ele} alt="slider" key={i} />
            )
          })
           }
      </Slider>

  </Box>
  )
}

export default SliderFive
