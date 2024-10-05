import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <Box>
      <Navbar />
      <Box w={40} m={"auto"}>
        <Text fontSize="4xl" as={"b"}>
          Queries
        </Text>
      </Box>
      <Box w={"45%"} m={"auto"} p={5}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" textAlign={"left"} flex="1">
                  The frame size does not fit me
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <Text>
                  In case the frame size does not fit, you can easily exchange
                  or return the product by getting in touch with us
                </Text>
                <br />
                <Button
                  bg={"white"}
                  h={12}
                  w={60}
                  border={"1px solid aqua"}
                  color={"aqua"}
                >
                  CALL US
                </Button>
                <br />
                <Text color={"gray"}>Wait time under 2 min(s)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" textAlign={"left"} flex="1">
                  The power seems incorrect
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <Text>
                  {" "}
                  Eyeglasses with new power generally require a week for the eye
                  to adjust.Therefore, we recommend a week’s trial before you
                  decide to return/exchange.However, if you still think that the
                  power is not correct, please get in touch with us to exchange
                  or return.
                </Text>
                <br />
                <Button
                  bg={"white"}
                  h={12}
                  w={60}
                  border={"1px solid aqua"}
                  color={"aqua"}
                >
                  CALL US
                </Button>
                <br />
                <Text color={"gray"}>Wait time under 2 min(s)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" textAlign={"left"} flex="1">
                  The product does not meet my expectation
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <Text>
                  {" "}
                  Lenskart has a 14 day no questions asked return policy. To
                  exchange/return get in touch with us .
                </Text>
                <br />
                <Button
                  bg={"white"}
                  h={12}
                  w={60}
                  border={"1px solid aqua"}
                  color={"aqua"}
                >
                  CALL US
                </Button>
                <br />
                <Text color={"gray"}>Wait time under 2 min(s)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" textAlign={"left"} flex="1">
                  The product is damaged
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <Text>
                  {" "}
                  While our 3-step quality check ensures that each product
                  reaches you in perfect condition, in the unlikely event that
                  you receive a product that is damaged, broken,or not what you
                  ordered, Lenskart is there for you! We will do our best to
                  rectify the error. Get in touch with us.
                </Text>
                <br />
                <Button
                  bg={"white"}
                  h={12}
                  w={60}
                  border={"1px solid aqua"}
                  color={"aqua"}
                >
                  CALL US
                </Button>
                <br />
                <Text color={"gray"}>Wait time under 2 min(s)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" textAlign={"left"} flex="1">
                  I have changed my mind
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6}>
              <Box>
                <Text>
                  {" "}
                  Lenskart has a 14 day no questions asked return policy. To
                  exchange/return get in touch with us
                </Text>
                <br />
                <Button
                  bg={"white"}
                  h={12}
                  w={60}
                  border={"1px solid aqua"}
                  color={"aqua"}
                >
                  CALL US
                </Button>
                <br />
                <Text color={"gray"}>Wait time under 2 min(s)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
          </Box>
          <Footer/>
    </Box>
  );
}

export default Contact
