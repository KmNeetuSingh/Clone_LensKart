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
      transform="translateY(-50%)"
      zIndex="1"
      cursor="pointer"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      display="flex"
      alignItems="center"
      justifyContent="center"

    >
      {/* Example: Add an arrow icon */}
      ➡️
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
      left="30px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      cursor="pointer"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Example: Add an arrow icon */}
      ⬅️
    </Box>
  );
}

const SliderOne = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const imagePart = [
    "https://static1.lenskart.com/media/desktop/img/Aug24/Switch-Grip-Story/Desktop%20Banner.gif",
    "https://static1.lenskart.com/media/desktop/img/Aug24/HipHop/web%20bannerHipHop2ndSep.gif",
    "https://static5.lenskart.com/media/uploads/Web_Banner_eyesun-1.jpg",
    "https://static1.lenskart.com/media/desktop/img/June24/Crystal_acetate/web-option-1CAcetate.gif",
    "https://static1.lenskart.com/media/desktop/img/Aug24/DrivingGlasses/DrivingGlasses-Desktop-banner.jpg",
    "https://static1.lenskart.com/media/desktop/img/Aug24/Ulti-Matte/DesktopBannner.jpg",
    "https://static5.lenskart.com/media/uploads/Web_DesktopBannerCreaTR.png",
    "https://static1.lenskart.com/media/desktop/img/h24/sept/Reflector%20sunglasses/Desktop%20banner.png",
    "https://static1.lenskart.com/media/desktop/img/Aug24/6-aug-24/cs/Desktop-2.gif",
    "https://static1.lenskart.com/media/desktop/img/Aug24/22-aug-24/Other%20assets/New%20Web%20Banner.png",
    "https://static1.lenskart.com/media/desktop/img/Aug24/22-aug-24/blu/Desktop%20banner.png",
    "https://static5.lenskart.com/media/uploads/Web-bannerTentpole.jpg",
    "https://static5.lenskart.com/media/uploads/final-lpl-webbanner-1.gif",
    "https://static5.lenskart.com/media/uploads/web02apr.jpg",
    "https://static1.lenskart.com/media/desktop/img/Mar24/SheildShades/SheildShadesWebBanner.jpg",
    "https://static1.lenskart.com/media/desktop/img/republic/tr-flex/Desktop.jpg",
    "https://static1.lenskart.com/media/desktop/img/republic/future-classic/web.gif",
    "https://static1.lenskart.com/media/desktop/img/republic/petite/Web-banner%20option%202.jpg",
    "https://static1.lenskart.com/media/desktop/img/oct9/holiday-edit/Desktop.jpg",
    "https://static1.lenskart.com/media/desktop/img/sep22/jj-titanium/Web-Banner.gif",
    "https://static1.lenskart.com/media/desktop/img/republic/eco_jj/Desktop%20(2).gif",
    "https://static1.lenskart.com/media/desktop/img/republic/hustlr-ace/Hustlr_Ace_Desktop_Banner.gif",
    "https://static1.lenskart.com/media/desktop/img/2024/feb/IN/tentpole/web%20banner.jpg",
    "https://static1.lenskart.com/media/desktop/img/2024/feb/IN/Sobhita/Desktop.png",
    "https://static5.lenskart.com/media/uploads/webFloat_POP2124.jpg",``
  ];

  return (
    <Box
      width="99%"
      margin="auto"
      paddingTop={2}
      paddingBottom={2}
      position="relative"
    >
      <Slider {...settings}>
        {imagePart.map((ele, i) => (
          <Box key={i}>
            <img
              src={ele}
              alt={`Slide ${i + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderOne;
