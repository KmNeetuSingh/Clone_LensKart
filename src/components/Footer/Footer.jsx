import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box bg={"#000042"} color={"white"} pt={10}>
      <Box display={["none", "none", "block", "block"]}>
        <SimpleGrid w={"92%"} m={"auto"} gap={5}>
          <Box>
            {" "}
            <Text fontSize="4xl">Buy The Best Eyewear From Lenskart</Text>
          </Box>
          <SimpleGrid>
            <Text>
              Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It
              Has Revolutionised The Eyewear Industry In The Country With Its
              Omni-Channel Approach. From An Ever-Growing Number Of Offline
              Stores Across Major Cities In The Country To Innovative
              Integration Of Technology While Purchasing Online, Lenskart Caters
              To Every Customer With Several Deals And Offers.
            </Text>{" "}
            <br />
            <Text>
              A One-Stop Online Solution For Purchasing Eyewear And Its
              Accessories, Lenskart Delivers Them Right At Your Doorstep With
              Convenient Methods Of Payment. Sunglasses as well as Eyeglasses
              Are Available For Men And Women In A Diverse Array Of Styles And
              Trendy Colours. If You Want To Try Out Contact Lenses, Pick The
              Ones Of Your Choice From The Extensive Variety Of Coloured Contact
              Lenses From Our Online Store.
            </Text>
          </SimpleGrid>
        </SimpleGrid>

        <Flex justifyContent={"space-around"} mt={10}>
          <Flex gap={7}>
            <Box>
              <Text fontSize="xl">Services</Text>
              <br />
              <Text fontSize="md">Store Locator</Text>
              <br />
              <Text fontSize="md">Buying Guide</Text>
              <br />
              <Text fontSize="md">Frame Size</Text>
              <br />
            </Box>

            <Box>
              <Text fontSize="xl">About Us</Text>
              <br />

              <Text fontSize="md">We Are Hiring</Text>
              <br />
              <Text fontSize="md">Refer And Earn</Text>
              <br />
              <Text fontSize="md">About us</Text>
              <br />
              <Text fontSize="md"> Lenskart Coupons</Text>
              <br />
            </Box>
            <Box>
              <Text fontSize="xl">Help</Text>
              <br />

              <Text fontSize="md">FAQs</Text>
            </Box>
          </Flex>
          <SimpleGrid>
            <Flex w={110} gap={4} ml={10}>
              <img src="src/components/assets/Footer/app-store.svg" alt="" />
              <img src="src/components/assets/Footer/play-store.svg" alt="" />
            </Flex>

            <Box>
              <Text textAlign={"center"}>Download Lenskart App to buy</Text>
              <Text>Eyeglasses, Sunglasses and Contact Lenses</Text>
            </Box>
          </SimpleGrid>
        </Flex>
        <Divider
          orientation="horizontal"
          color={"white"}
          w={"80%"}
          m={"auto"}
        />
        <Flex
          justifyContent={"space-between"}
          m={"auto"}
          mt={7}
          pb={7}
          w={"80%"}
        >
          <Flex gap={8}>
            <Text>T & C</Text>
            <Text>Privacy</Text>
            <Text>Disclaimer</Text>
          </Flex>
          <Flex gap={3}>
            <Text>Version 1.0.0 </Text>
            <Text>|| </Text>
            <Text>Follow Us</Text>
            <Flex gap={3} mt={1}>
              <RiFacebookFill />
              <FaInstagram />
              <FaTwitter />
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box display={["block", "block", "none", "none"]}>
        <Box>
          <Box ml={5} mb={3}>
            {" "}
            <Text fontSize="lg">Buy The Best Eyewear From Lenskart</Text>
            <Text fontSize="md">
              Lenskart Is The Leading E-Commerce Portal For Eyewear In India
            </Text>
          </Box>
          <Accordion allowToggle>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box as="span" textAlign="left">
                    Show more
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lenskart has Revolutionised The Eyewear Industry In The Country
                With Its Omni-Channel Approach. From An Ever-Growing Number Of
                Offline Stores Across Major Cities In The Country To Innovative
                Integration Of Technology While Purchasing Online, Lenskart
                Caters To Every Customer With Several Deals And Offers. A
                One-Stop Online Solution For Purchasing Eyewear And Its
                Accessories, Lenskart Delivers Them Right At Your Doorstep With
                Convenient Methods Of Payment. Sunglasses as well as Eyeglasses
                Are Available For Men And Women In A Diverse Array Of Styles And
                Trendy Colours. If You Want To Try Out Contact Lenses, Pick The
                Ones Of Your Choice From The Extensive Variety Of Coloured
                Contact Lenses From Our Online Store.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem></AccordionItem>
          </Accordion>
        </Box>
        <Accordion allowToggle>
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Eyeglasses
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lenskart has a wide range of styles that are highly fashionable.
              You can try out the full-rimmed and half-rimmed eyeglasses that
              come with various frame and temple materials such as acetate,
              stainless steel, TR-90, and metal, among others. Rimless
              spectacles also come in various styles with sporty and elegant
              temples. Various brands such as Ray-Ban, Oakley, Carrera, John
              Jacobs, Lee Cooper, and Oakley have an amazing variety of frame
              and temple styles. The browline, round, rectangular, square and
              wayfarer-shaped spectacles are some of the best styles of men’s
              eyeglasses and they come with sophisticated as well as sporty
              frame and temple colours. Spectacles with tortoise shell frames
              have a vintage appeal and you can easily choose from the various
              styles available at Lenskart. Top Brand Eyeglasses- Ray-Ban
              Eyeglasses, Carrera Eyeglasses, Oakley, Men Eyeglasses, Women
              Eyeglasses, John Jacob Eyeglasses Best Styles in Eyeglasses- Full
              rim Eyeglasses, Half Rim Eyeglasses, Rimless Eyeglasses, Cat Eye
              Eyeglasses, Aviator Shapes Eyeglasses, Wayfarer Shapes Eyeglasses
            </AccordionPanel>
          </AccordionItem>
          <Divider orientation="horizontal" w={"90%"} m={"auto"} />
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Sunglasses
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Sunglasses help protect the eyes from the damaging UV rays of the
              sun and, today, they have become an essential fashion accessory
              too. The classic styles of shades never go out of fashion as they
              are reiterated with each passing trend to suit one’s contemporary
              style sensibility. With different combinations of frame and lens
              colours, sunglasses appeal to all ages irrespective of gender.
              Luxury eyewear brands such as Linda Farrow and Tom Ford, among
              others have an excellent collection of aviator-shaped and cat-eye
              goggles that go an extra mile to create style and provide luxury.
              Vogue, Tommy Hilfiger, French Connection, Ray-Ban, John Jacobs and
              Vincent Chase, on the other hand, have plenty of sunglasses for
              women as well in various elegant colours and chic styles. Ray-Ban
              goggles are popular for their timeless frame designs such as the
              aviator-shaped,wayfarer-shaped and browline styles. These shades
              are available in plenty of colours on the frames and lenses that
              would go with any modern outfit effortlessly. Brands such as
              Carrera and Calvin Klein, among several others have excellent
              variations of the classic aviator-shaped and wayfarer-shaped
              goggles with sporty and suave lens colours. Sunglasses for men are
              available from the best brands such as Hugo Boss, Oakley and John
              Jacobs, among others, and are ideal for various occasions. Popular
              Sunglasses Brands- Ray Ban Sunglasses, Oakley Sunglasses, Carrera
              Sunglasses, IDEE Sunglasses
            </AccordionPanel>
          </AccordionItem>
          <Divider orientation="horizontal" w={"90%"} m={"auto"} />
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Contact Lenses
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lenskart has various types of contact lenses. Brands such as
              Aqualens, Bausch & Lomb, Johnson & Johnson, Acuvue, Alcon, and
              Purevision, among others have yearly, monthly, 2-weekly, and daily
              disposable contact lenses. Specially designed toric contact lenses
              are also available from these brands. Coloured contact lenses are
              available with and without power, and some of them have UV
              protection as well. The unique colours that you could try are
              amethyst, hazel, green, turquoise, blue, brown, and grey, which
              look quite stylish. Made from the best materials that allow ample
              oxygen supply to the eyes, these contact lenses sit perfectly on
              the eyes and can be worn anywhere. Lenskart also offers a wide
              range of contact lens accessories. To clean your contacts, you can
              get the best contact lens solutions from our online store, which
              are easy to use and effective in keeping your eyes healthy.
              Popular Contact Lenses Brands- Bausch & Lomb Contact Lenses, Ciba
              Vision Contact Lenses, Johnson & Johnson Contact Lenses Contact
              Lenses by Type- Monthly Disposable, Daily Disposable, Toric
              Contact Lenses Lenses Directory
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <br />
        <Divider orientation="horizontal" />
        <br />
        <Box ml={5}>
          <Text fontSize={"sm"}>Can we</Text>
          <Text as={"b"} fontSize={"lg"}>
            Help?
          </Text>
          <Text fontSize={"sm"}>Chat With Us</Text>
        </Box>{" "}
        <br />
        <Divider orientation="horizontal" w={"90%"} m={"auto"} />
        <br />
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  More about lenskart.com
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex gap={10} justifyContent={"space-around"}>
                <Box>
                  Store Locator <br />
                  Refer And Earn <br />
                  FAQ <br />
                  About Us <br />
                  Be A Franchise <br />
                  T & C <br />
                </Box>
                <Box>
                  Download App <br />
                  Buying Guide <br />
                  Disclaimer <br />
                  Frame Size <br />
                  Privacy
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <br />
        <Divider orientation="horizontal" w={"90%"} m={"auto"} />
        <br />
        <Box>
          <Text ml={5} fontSize={"lg"}>
            Follow Us
          </Text>

          <Flex ml={5} gap={2} mt={"3"} pb={5}>
            <RiFacebookFill />
            <FaInstagram />
            <FaTwitter />
          </Flex>
        </Box>
        <br />
        <Divider orientation="horizontal" w={"90%"} m={"auto"} />
        <Flex w={"90%"} m={"auto"}>
          <Box>
            <Link> © All Rights Reserved | www.lenskart.com</Link>
          </Box>
        </Flex>
        <br />
        <Divider orientation="horizontal" w={"90%"} m={"auto"} />
        <Box pb={5} textAlign={"right"} mr={5}>
          Version 1.0.0
        </Box>
      </Box>
    </Box>
  );
}

export default Footer
