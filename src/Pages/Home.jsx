import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box, Flex, Image,SimpleGrid,Text } from "@chakra-ui/react";
import SliderOne from '../components/SliderS/SliderOne';
import SliderTwo from '../components/SliderS/SliderTwo';
import { Link } from 'react-router-dom';
import SliderThree from '../components/SliderS/SliderThree';
import SliderFour from '../components/SliderS/SliderFour';
import SliderFive from '../components/SliderS/SliderFive';
import Slidersix from '../components/SliderS/Slidersix';
import Video from '../components/Video/Video';
import Footer from '../components/Footer/Footer';

const Home = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant"
    })
  })
  return (
    <>
      <Navbar />
      <Box overflow={"hidden"}>
        <Box p={1}>
          <Image src="https://static5.lenskart.com/media/uploads/festive-desk-2-29Sep.png" />
        </Box>
        <SliderOne />
        <Box p={1}>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
            alt="Do banner"
          />
        </Box>
        <SliderTwo />
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as={"h3"} size={"lg"} fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "_____________PREMIUM EYEWEAR_____________"
              : "______________________________________PREMIUM EYEWEAR___________________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <Link to={"/premiumproduct"}>
            <img
              src="https://static1.lenskart.com/media/desktop/img/16-sep-24/r1.jpeg"
              alt="PREMIUM EYEWEAR-"
            />
          </Link>
        </Box>

        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "___________ AS SEEN ON SHARK TANK_________"
              : "_____________________AS SEEN ON SHARK TANK_______________________"}
          </Text>
        </Box>
        <Box p={1}>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
            alt="AS SEEN ON SHARK TANK"
          />
        </Box>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "----AS SEEN ON MOUNI ROY----"
              : "____________________________AS SEEN ON MOUNI ROY____________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <Link to={"/mouniroyproduct"}>
            <img
              src=" https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif"
              alt="Mouni Roy"
            />
          </Link>
        </Box>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "_____AS SEEN ON KARAN JOHAR_____"
              : "________________________AS SEEN ON KARAN JOHAR_________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <Link to={"/karanjoharproduct"}>
            <img
              src=" https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
              alt="AS SEEN ON KARAN JOHAR"
            />
          </Link>
        </Box>

        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "----TRENDING SUNGLASSES----"
              : "_____________________________TRENDING SUNGLASSES___________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif "
            alt="TRENDING SUNGLASSES"
          />
        </Box>

        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "----------BOOK EYE TEST AT HOME-----------"
              : "________________________________ BOOK EYE TEST AT HOME________________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <img
            src="https://static5.lenskart.com/media/uploads/hechome11.png"
            alt="BOOK EYE TEST AT HOME"
          />
        </Box>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "--AQUACOLOR - GLAM UP WITH COLOR LENSES--"
              : "_______________________AQUACOLOR - GLAM UP WITH COLOR LENSES______________________"}
          </Text>
        </Box>
        <Box p={1}>
          <img
            src=" https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
            alt="AQUACOLOR - GLAM UP WITH COLOR LENSES"
          />
        </Box>

        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "--------FIND THE PERFECT FIT--------"
              : "___________________FIND THE PERFECT FIT_________________"}
          </Text>
        </Box>
        <Flex gap={5} w={"80%"} margin={"auto"}>
          <SimpleGrid gap={2} w={"50%"}>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg  "
              alt="left 1st"
            />
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
              alt="left2nd"
            />
          </SimpleGrid>
          <SimpleGrid gap={2} w={"50%"}>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
              alt="right1st"
            />
            <img
              src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
              alt="right2nd"
            />
            <img
              src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
              alt="right3rd"
            />
          </SimpleGrid>
        </Flex>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "--- INTRODUCING OJOS WEAR - SUBSCRIBE & SAVE---"
              : "______________________INTRODUCING OJOS WEAR - SUBSCRIBE & SAVE ________________________"}
          </Text>
        </Box>
        <Box p={1}>
          <img
            src=" https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
            alt=" INTRODUCING OJOS WEAR - SUBSCRIBE & SAVE "
          />
        </Box>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "--- CONTACT LENSES & MORE---"
              : "________________________CONTACT LENSES & MORE___________________"}
          </Text>
        </Box>

        <SimpleGrid
          gridTemplateColumns={"repeat(2,1fr)"}
          w={"70%"}
          m={"auto"}
          gap={5}
        >
          <img
            src=" https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg"
            alt="left"
          />
          <img
            src=" https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg"
            alt="right"
          />
        </SimpleGrid>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "--- BUY IT YOUR WAY---"
              : "___________________________BUY IT YOUR WAY _________________________"}
          </Text>
        </Box>
        <SimpleGrid
          gridTemplateColumns={"repeat(2,1fr)"}
          gap={5}
          w={"80%"}
          m={"auto"}
        >
          <img
            src=" https://static1.lenskart.com/media/desktop/img/republic/celb-new/call.png"
            alt="Call"
          />
          <img
            src=" https://static1.lenskart.com/media/desktop/img/republic/celb-new/wts-up.png"
            alt="Whatapp"
          />
          <img
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg"
            alt="hto"
          />
          <img
            src=" https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg"
            alt="stores"
          />
        </SimpleGrid>
        <Box
          textAlign={{ base: "center", md: "center" }}
          m={2}
          fontFamily={"sans-serif"}
        >
          <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "--- OUR BRANDS---"
              : "_______________________OUR BRANDS _________________________"}
          </Text>
        </Box>

        <Box p={1}>
          <img
            src=" https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
            alt="OUR BRANDS"
          />
        </Box>

        <Flex w={"80%"} justifyContent={"space-between"} m={"auto"} mb={0}>
          <Box
            textAlign={{ base: "center", md: "center" }}
            m={2}
            fontFamily={"sans-serif"}
          >
            <Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
              {windowWidth <= 768 ? "EYEGLASSES" : " EYEGLASSES  "}
            </Text>
          </Box>
          <Box cursor={"pointer"}>
            <Text
              as="h3"
              size="lg"
              mt={2}
              fontSize={[11, 9, 14, 19]}
              color={"darkcyan"}
            >
              View Range
            </Text>
          </Box>
        </Flex>
        <Box mt={0} textAlign={"center"}>
          <Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "_______________________________________________________"
              : "____________________________________________________________________________________________"}
          </Text>
        </Box>
        <SliderThree />
        <Flex w={"80%"} justifyContent={"space-between"} m={"auto"} mb={0}>
          <Box
            textAlign={{ base: "center", md: "center" }}
            m={2}
            fontFamily={"sans-serif"}
          >
            <Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
              {windowWidth <= 768 ? "SUNGLASSES" : " SUNGLASSES  "}
            </Text>
          </Box>
          <Box cursor={"pointer"}>
            <Text
              as="h3"
              size="lg"
              mt={2}
              fontSize={[11, 9, 14, 19]}
              color={"darkcyan"}
            >
              View Range
            </Text>
          </Box>
        </Flex>
        <Box mt={0} textAlign={"center"}>
          <Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "_______________________________________________________"
              : "____________________________________________________________________________________________"}
          </Text>
        </Box>
        <SliderFour />
        <Box p={1}>
          <img
            src=" https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg "
            alt="OUR BRANDS"
          />
        </Box>
        <Flex w={"80%"} justifyContent={"space-between"} m={"auto"} mb={0}>
          <Box
            textAlign={{ base: "center", md: "center" }}
            m={2}
            fontFamily={"sans-serif"}
          >
            <Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
              {windowWidth <= 768 ? "EYEGLASSES" : " EYEGLASSES  "}
            </Text>
          </Box>
          <Box cursor={"pointer"}>
            <Text
              as="h3"
              size="lg"
              mt={2}
              fontSize={[11, 9, 14, 19]}
              color={"darkcyan"}
            >
              View Range
            </Text>
          </Box>
        </Flex>
        <Box mt={0} textAlign={"center"}>
          <Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "_______________________________________________________"
              : "____________________________________________________________________________________________"}
          </Text>
        </Box>
        <SliderThree />
        <Flex w={"80%"} justifyContent={"space-between"} m={"auto"} mb={0}>
          <Box
            textAlign={{ base: "center", md: "center" }}
            m={2}
            fontFamily={"sans-serif"}
          >
            <Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
              {windowWidth <= 768 ? "SUNGLASSES" : " SUNGLASSES  "}
            </Text>
          </Box>
          <Box cursor={"pointer"}>
            <Text
              as="h3"
              size="lg"
              mt={2}
              fontSize={[11, 9, 14, 19]}
              color={"darkcyan"}
            >
              View Range
            </Text>
          </Box>
        </Flex>
        <Box mt={0} textAlign={"center"}>
          <Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "_______________________________________________________"
              : "____________________________________________________________________________________________"}
          </Text>
        </Box>
        <SliderFour />
        <Box p={1}>
          <img
            src=" https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg "
            alt="OUR BRANDS"
          />
        </Box>
        <Flex w={"80%"} justifyContent={"space-between"} m={"auto"} mb={0}>
          <Box
            textAlign={{ base: "center", md: "center" }}
            m={2}
            fontFamily={"sans-serif"}
          >
            <Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
              {windowWidth <= 768 ? "CONTACT LENSES" : " CONTACT LENSES "}
            </Text>
          </Box>
          <Box cursor={"pointer"}>
            <Text
              as="h3"
              size="lg"
              mt={2}
              fontSize={[11, 9, 14, 19]}
              color={"darkcyan"}
            >
              View Range
            </Text>
          </Box>
        </Flex>
        <Box mt={0} textAlign={"center"}>
          <Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "_____________________________________________________"
              : "___________________________________________________________________________________________ "}
          </Text>
        </Box>
        <SliderFive />
        <Flex w={"80%"} justifyContent={"space-between"} m={"auto"} mb={0}>
          <Box
            textAlign={{ base: "center", md: "center" }}
            m={2}
            fontFamily={"sans-serif"}
          >
            <Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
              {windowWidth <= 768
                ? "COLOR CONTACT LENSES"
                : "  COLOR CONTACT LENSES "}
            </Text>
          </Box>
          <Box cursor={"pointer"}>
            <Text
              as="h3"
              size="lg"
              mt={2}
              fontSize={[11, 9, 14, 19]}
              color={"darkcyan"}
            >
              View Range
            </Text>
          </Box>
        </Flex>

        <Box mt={0} textAlign={"center"}>
          <Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
            {windowWidth <= 768
              ? "____________________________________________________"
              : "_______________________________________________________________________________________________ "}
          </Text>
        </Box>
        <Slidersix />
        <Box p={1}>
          <img
            src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg  "
            alt="OUR BRANDS"
          />
        </Box>

        <Video />
        <Footer/>
      </Box>
    </>
  );
}

export default Home
