import React, { useEffect } from 'react'
import { Box, Button, Heading, SimpleGrid, useToast } from "@chakra-ui/react"; import { useParams } from 'react-router-dom';
import { KidsProducts } from '../json/KidProducts';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
 const KidProduct = () => {
  const {id} = useParams()
  const toast= useToast()

   const selectedItem = KidsProducts.find(item => (item.id) === id)
   const { image, Header, price, Text, footer } = selectedItem;

   useEffect(() => {
     window.scroll({
       top: 0,
       behavior:"auto"
     })
   }, [])
   
   function handleCart() {
     let arr = JSON.parse(localStorage.getItem('cart')) || []
     arr.push(selectedItem)
     localStorage.setItem('cart', JSON.stringify(arr))

       toast({
         description: " Add To Cart!",
         status: "success",
         duration: 9000,
         isClosable: true,
       });
   }
     
  return (
    <Box>
      <Navbar />
      <SimpleGrid
        gridTemplateColumns={"repeat(2,1fr)"}
        w={"60%"}
        m={"auto"}
        gap={1}
      >
        <Box border={"1px solid black"} mt={8} mb={8}>
          <img src={image} alt="" />
        </Box>
        <SimpleGrid
          border={"1px solid black"}
          mt={8}
          mb={8}
          textAlign={"center"}
          pt={2}
        >
          <Heading fontSize={"lg"}>{Header}</Heading>
          <Heading fontSize={"md"}> ₹{price}</Heading>
          <Heading fontSize={"md"}>{Text}</Heading>
          <Button
            w={"30%"}
            m={"auto"}
            _hover={{ bg: "blue.900", color: "white" }}
            onClick={handleCart}
          >
            Add to Cart
          </Button>
          <Box bgGradient="linear(to-r, #F8F2E0,  white)">
            <Heading fontSize={"md"}>{footer}</Heading>
          </Box>
        </SimpleGrid>
      </SimpleGrid>
      <Footer/>
    </Box>
  );
}

export default KidProduct
