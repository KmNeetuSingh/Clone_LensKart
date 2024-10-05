import React, { useEffect, useState } from 'react'
import { Flex, Select, SimpleGrid, Switch, Text } from "@chakra-ui/react";
import { WomenProducts as womenData } from '../json/WomenProduct';
import Navbar from '../components/Navbar/Navbar';
import ProductList from '../ProductOne/ProductList';
import { Link } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
const Women = () => {
  const [sortedData,setSortedData] = useState([])
  const [sortBy,setSortBy] = useState('')

  useEffect(() => {
        if (sortBy === "desc") {
          setSortedData(
            [...womenData].sort((a, b) => Number(b.price) - Number(a.price))
          );
        } else if (sortBy === "asc") {
          setSortedData(
            [...womenData].sort((a, b) => Number(a.price) - Number(b.price))
          );
        } else {
          setSortedData(womenData);
        }

  }, [sortBy])
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
        <Text as={"b"}>EYEGLASSES</Text>
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
            <option value="asc">Price : low to high </option>
            <option value="desc">Price : high to low </option>
          </Select>
        </Flex>
      </Flex>

      <Flex>
        <ProductList />
        <SimpleGrid
          gridTemplateColumns={"repeat(3,1fr)"}
          gap={5}
          w={"60%"}
          mt={6}
          ml={10}
        >
          {sortedData.map((ele) => (
            <SimpleGrid
              key={ele.id}
              cursor={"pointer"}
              borderRadius={10}
              w={300}
              boxShadow="xs"
              rounded="md"
            >
              <Link to={`/womenproduct/${ele.id}`}>
                <img src={ele.image} alt="" />
                <Text mt={8} ml={10} fontWeight={700}>
                  {ele.price}
                </Text>
                <Text
                  mt={2}
                  ml={8}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"rgb(0, 96, 169)"}
                  _hover={{ textDecoration: "underline" }}
                >
                  {ele.Header}
                </Text>
                <Text
                  ml={8}
                  mt={2}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"rgb(0, 96, 169)"}
                  _hover={{ textDecoration: "underline" }}
                >
                  {ele.Text}
                </Text>
                <Text
                  bg={"#F8F2E0"}
                  mt={2}
                  p={2}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#B69C53"}
                  _hover={{ textDecoration: "underline" }}
                >
                  {ele.footer}
                </Text>
              </Link>
            </SimpleGrid>
          ))}
        </SimpleGrid>
      </Flex>
      <Footer/>
    </>
  );
}

export default Women
