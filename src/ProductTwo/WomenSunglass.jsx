import React from 'react'
import { Flex, Select, SimpleGrid, Switch, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { WomenSunglassessProducts as data } from '../json/WomenSunglassess';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProductList from '../ProductOne/ProductList';
import { Link } from 'react-router-dom';
const WomenSunglass = () => {
   
    const [sortedData, setSortedData] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
      window.scroll({
        top: 0,
        behavior: "instant",
      });
    }, []);
   useEffect(() => {
     if (sortBy === "desc") {
       setSortedData(
         [...data].sort((a, b) => Number(a.price) - Number(b.price))
       );
     } else if (sortBy === "asc") {
       setSortedData(
         [...data].sort((a, b) => Number(b.price) - Number(a.price))
       );
     } else {
       setSortedData(data);
     }
   }, [sortBy]);

   const handleSorting = (e) => {
     setSortBy(e.target.value);
   };
  return (
    <>
      <Navbar />
      <Flex
        justifyContent="space-around"
        alignItems="center"
        p="5px"
        bg="#e2e8f0"
        border="1px"
        borderColor="gray.400"
        gap={50}
      >
        <Text as="b">SUNGLASSES</Text>
        <Flex alignItems="center">
          <Text fontWeight="bold" mr="5px" color="green">
            VIEW FRAMES
          </Text>
          <Switch colorScheme="green" isChecked size="lg" />
          <Text ml="5px">VIEW 3D TRY ON</Text>
        </Flex>
        <Flex>
          <Flex alignItems="center">
            {sortBy === "asc" && <AiOutlineArrowDown color="green" />}
            {sortBy === "desc" && <AiOutlineArrowUp color="green" />}
            <Text fontWeight="bold" color="green">
              SortBy
            </Text>
          </Flex>
          <Select
            border="2px"
            borderRadius="3px"
            borderColor="black"
            ml="4px"
            p="0px"
            onChange={handleSorting}
          >
            <option value="">Select</option>
            <option value="desc">Price : low to high</option>
            <option value="asc">Price : high to low</option>
          </Select>
        </Flex>
      </Flex>
      <Flex>
        <ProductList />
        <SimpleGrid
          gridTemplateColumns={"repeat(3,1fr)"}
          ml={10}
          gap={5}
          w={"60%"}
          mt={6}
        >
          {sortedData.map((ele) => (
            <SimpleGrid
              key={ele.id}
              cursor="pointer"
              borderRadius={10}
              w={300}
              boxShadow="xs"
              rounded="md"
            >
             
                <img src={ele.image} alt="" />
                <Text mt={8} ml={10} fontWeight={700}>
                  ₹{ele.price}
                </Text>
                <Text
                  ml={8}
                  mt={2}
                  fontWeight={400}
                  fontSize={"18px"}
                  color={"rgb(0, 96, 169)"}
                  _hover={{ textDecoration: "underline" }}
                >
                  {ele.Header}
                </Text>
                <Text
                  ml={8}
                  mt={2}
                  fontWeight={200}
                  fontSize={"14px"}
                  color={"rgb(0, 96, 169)"}
                  _hover={{ textDecoration: "underline" }}
                >
                  {ele.Text}
                </Text>
                <Text
                  bgGradient="linear(to-r, #F8F2E0, white)"
                  mt={2}
                  p={2}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#B69C53"}
                  _hover={{ textDecoration: "underline" }}
                >
                  {ele.footer}
                </Text>
            
            </SimpleGrid>
          ))}
        </SimpleGrid>
      </Flex>
      <Footer />
    </>
  );
}

export default WomenSunglass
