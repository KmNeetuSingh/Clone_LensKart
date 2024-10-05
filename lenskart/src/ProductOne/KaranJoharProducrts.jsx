import { useParams } from "react-router-dom";
import { Box, Button, Heading, SimpleGrid, useToast } from "@chakra-ui/react";
import { KaranaJoharProduct } from "../json/KaranJohar";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const KaranJoharProducts = () => {
  const { id } = useParams();
  const toast = useToast();
  console.log("Route id:", id); 
  console.log(
    "Available product ids:",
    KaranaJoharProduct.map((item) => item.id)
  );
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "auto", 
    });
  }, []);

  const selectedItem = KaranaJoharProduct.find((item) => item.id === id);
  console.log("Selected item:", selectedItem);
  if (!selectedItem) {
    return (
      <Box>
        <Navbar />
        <Heading as="h2" size="lg" textAlign="center" mt={8}>
          Product not found.
        </Heading>
        <Footer />
      </Box>
    );
  }

  const { image, Header, price, Text, footer } = selectedItem;

  function handleCart() {
    try {
      let arr = JSON.parse(localStorage.getItem("cart")) || [];
      arr.push(selectedItem);
      localStorage.setItem("cart", JSON.stringify(arr));

      toast({
        description: "Added to Cart!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        description: "Failed to add to cart.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box>
      <Navbar />
      <SimpleGrid
        columns={{ base: 1, md: 2 }} // Responsive columns
        w={"60%"}
        m={"auto"}
        gap={6}
        mt={8}
        mb={8}
      >
        <Box border={"1px solid black"}>
          <img
            src={image.trim()}
            alt={Header}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box border={"1px solid black"} textAlign={"center"} p={4}>
          <Heading fontSize={"lg"} mb={2}>
            {Header}
          </Heading>
          <Heading fontSize={"md"} mb={2}>
            ₹{price}
          </Heading>
          <Box fontSize={"md"} mb={4}>
            {Text}
          </Box>
          <Button
            w={"30%"}
            m={"auto"}
            _hover={{ bg: "blue.900", color: "white" }}
            onClick={handleCart}
          >
            Add to Cart
          </Button>
          <Box bgGradient="linear(to-r, #F8F2E0, white)" mt={4} p={2}>
            <Heading fontSize={"md"}>{footer}</Heading>
          </Box>
        </Box>
      </SimpleGrid>
      <Footer />
    </Box>
  );
};

export default KaranJoharProducts;
