import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { tr } from 'framer-motion/client';
import axios from 'axios';
import FrameSizeType from './FrameSizeType';
const ProductList = () => {

  const [products,setProducts] = useState([])
  const [isLoding,setIsLoding] = useState(false)
  const [page, setPage] = useState(1)
  
  const fetchproduct = () => {
    setIsLoding(true)
    axios(
      `https://easy-pink-bull-shoe.cyclic.app/Products?_page=${page}&_limit=9`
    )
      .then(res => {
        setProducts(res.data) 
      setIsLoding(false)
      })
    .catch(err=>console.log(err)
    )
  }
  useEffect(() => {
    fetchproduct()
  },[page])
  return (
    <Flex m={0} px={"2%"}>
      <Box m={0}>
        <Box my={"20px"}>
          <Box m={4}>
            {" "}
            <Text fontWeight="bold" mb="3px" w={40} color="blackAlpha.600">
              Age Group
            </Text>
            <Checkbox w={40} colorScheme="green">
              8-10 yrs
            </Checkbox>
          </Box>
          <Text fontWeight="bold" mb="3px" w={40} color="blackAlpha.600">
            FRAME TYPE
          </Text>
          <Flex gap={5}>
            <FrameSizeType
              src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
              type="FullRim"
            />
            <FrameSizeType
              src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
              type="HalfRim"
            />
            <FrameSizeType
              src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
              type="Rimless"
            />
          </Flex>
        </Box>

        <Box mb="20px">
          <Text fontWeight="bold" mb="3px" color="blackAlpha.600" w={40}>
            FRAME SHAPE
          </Text>
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                type="Rectangle"
              />
            </GridItem>
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                type="Round"
              />
            </GridItem>
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                type="Cat Eye"
              />
            </GridItem>
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                type="Square"
              />
            </GridItem>
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                type="Geometric"
              />
            </GridItem>
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png"
                fil="wayfarer"
                type="Wayfarer"
              />
            </GridItem>
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                type="Aviator"
              />
            </GridItem>
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png"
                type="Hexago..."
              />
            </GridItem>
            <GridItem>
              <FrameSizeType
                src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png"
                type="Clubmas..."
              />
            </GridItem>
          </Grid>
        </Box>

        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">FRAME COLOR</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green">Black ({26})</Checkbox>
                <Checkbox colorScheme="green">Blue ({28})</Checkbox>
                <Checkbox colorScheme="green">White ({85})</Checkbox>
                <Checkbox colorScheme="green">Gold ({25})</Checkbox>
                <Checkbox colorScheme="green">Silver ({54})</Checkbox>
                <Checkbox colorScheme="green">Green ({95})</Checkbox>
                <Checkbox colorScheme="green">Pink ({65})</Checkbox>
                <Checkbox colorScheme="green">Red ({55})</Checkbox>
                <Checkbox colorScheme="green">Yellow ({15})</Checkbox>
                <Checkbox colorScheme="green">voilet ({100})</Checkbox>
                <Checkbox colorScheme="green">Silver ({20})</Checkbox>
                <Checkbox colorScheme="green">Green ({44})</Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">BRANDS</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green"> Vincent Chase({443})</Checkbox>
                <Checkbox colorScheme="green">Lenskart Air({397})</Checkbox>
                <Checkbox colorScheme="green"> LENSKART HUSTLR({52})</Checkbox>
                <Checkbox colorScheme="green"> OJOS({43})</Checkbox>
                <Checkbox colorScheme="green"> Lenskart STUDIO({21})</Checkbox>
                <Checkbox colorScheme="green"> Lenskart Air LA({2})</Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">FRAME SIZE</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green"> Extra Narrow({60})</Checkbox>
                <Checkbox colorScheme="green">Narrow({188}) </Checkbox>
                <Checkbox colorScheme="green">Medium({453}) </Checkbox>
                <Checkbox colorScheme="green">Wide({194})</Checkbox>
                <Checkbox colorScheme="green">Extra Wide({63}) </Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">PRICE</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green">
                  Rs. 1500 - Rs. 1999({904})
                </Checkbox>
                <Checkbox colorScheme="green">
                  {" "}
                  Rs. 2000 - Rs. 2499({3})
                </Checkbox>
                <Checkbox colorScheme="green">
                  Rs. 3000 - Rs. 3499(51){" "}
                </Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">GENDER</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green">Unisex({836})</Checkbox>
                <Checkbox colorScheme="green"> Women({117})</Checkbox>
                <Checkbox colorScheme="green"> Kids({4}) </Checkbox>
                <Checkbox colorScheme="green"> Men({1}) </Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">WEIGHT GROUP</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
                <Checkbox colorScheme="green"> Kids({4}) </Checkbox>
                <Checkbox colorScheme="green"> Men({1}) </Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">METRIALS</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
                <Checkbox colorScheme="green"> Kids({4}) </Checkbox>
                <Checkbox colorScheme="green"> Men({1}) </Checkbox>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">PRESCRIPTION TYPE</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
                <Checkbox colorScheme="green"> Kids({4}) </Checkbox>
                <Checkbox colorScheme="green"> Men({1}) </Checkbox>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">COLLECTION</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
                <Checkbox colorScheme="green"> Kids({4}) </Checkbox>
                <Checkbox colorScheme="green"> Men({1}) </Checkbox>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span">GLASS COLOR</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
                <Checkbox colorScheme="green"> Kids({4}) </Checkbox>
                <Checkbox colorScheme="green"> Men({1}) </Checkbox>
                <Checkbox colorScheme="green"> Light({650})</Checkbox>
                <Checkbox colorScheme="green"> Average(301)</Checkbox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
}

export default ProductList
