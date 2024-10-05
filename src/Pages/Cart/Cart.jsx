import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  SimpleGrid,
  Text,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const toast = useToast();

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  const handleRemove = (idToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== idToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: Math.max(1, (item.quantity || 1) + delta),
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleCheckout = () => {
    if (Object.values(shippingInfo).some((info) => info.trim() === "")) {
      toast({
        title: "Error",
        description: "Please fill out all shipping information.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Your order has been placed successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setCart([]);
      localStorage.removeItem("cart");
      setIsCheckoutOpen(false);
    }
  };

  useEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      {cart.length === 0 ? null : <Navbar />}
      {cart.length ? (
        <Box>
          {cart.map((ele) => (
            <Box
              key={ele.id}
              borderBottom="1px solid #ccc"
              p={4}
              w={{ base: "100%", md: "70%" }}
              m="auto"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Flex alignItems="center" mb={{ base: 4, md: 0 }}>
                  <Box w={80}>
                    <img src={ele.image} alt={ele.Header} />
                  </Box>
                  <Box ml={4}>
                    <Text color={"blue"} fontWeight={600} fontSize={"xl"}>
                      {ele.Header}
                    </Text>
                    <Text fontWeight={400} mb={2} fontSize={"lg"}>
                      ₹{ele.price * (ele.quantity || 1)}
                    </Text>
                    <Flex alignItems="center">
                      <Button
                        colorScheme="teal"
                        onClick={() => handleQuantityChange(ele.id, -1)}
                        disabled={(ele.quantity || 1) <= 1}
                      >
                        -
                      </Button>
                      <Text mx={4} fontSize={"lg"}>
                        {ele.quantity || 1}
                      </Text>
                      <Button
                        colorScheme="teal"
                        onClick={() => handleQuantityChange(ele.id, 1)}
                      >
                        +
                      </Button>
                    </Flex>
                    <Button
                      color={"black"}
                      fontWeight={400}
                      onClick={() => handleRemove(ele.id)}
                      ml={4}
                    >
                      Remove
                    </Button>
                    <Box>{ele.footer}</Box>
                  </Box>
                </Flex>
                <Flex alignItems="center">
                  <SimpleGrid gap={2}>
                    <Box
                      p={2}
                      border={"1px solid rgba(0,0,0,0.2)"}
                      textAlign="center"
                    >
                      <Text mb={2} fontWeight={600}>
                        Standard: Shipping & Handling Included
                      </Text>
                      <Text fontWeight={300} fontSize={"12px"}>
                        Estimated Delivery
                      </Text>
                      <Text fontWeight={600} color={"green"}>
                        5 to 6 Days
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Flex>
              </Flex>
            </Box>
          ))}

          <Box textAlign="right" p={4}>
            <Text fontSize={"2xl"} fontWeight={700}>
              Total Price: ₹{calculateTotalPrice()}
            </Text>
            <Button
              mt={4}
              colorScheme="teal"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Proceed to Checkout
            </Button>
          </Box>

          <Modal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Shipping Information</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl id="fullName" mb={4}>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    name="fullName"
                    value={shippingInfo.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl id="address" mb={4}>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl id="city" mb={4}>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl id="state" mb={4}>
                  <FormLabel>State</FormLabel>
                  <Input
                    type="text"
                    name="state"
                    value={shippingInfo.state}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl id="zipCode" mb={4}>
                  <FormLabel>Zip Code</FormLabel>
                  <Input
                    type="text"
                    name="zipCode"
                    value={shippingInfo.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="teal" onClick={handleCheckout}>
                  Complete Checkout
                </Button>
                <Button ml={3} onClick={() => setIsCheckoutOpen(false)}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        <Box>
          <Flex
            w={"85%"}
            justifyContent={"space-between"}
            m={"auto"}
            bg={"white"}
          >
            <Link to={"/"}>
              <img
                src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                alt="Logo"
              />
            </Link>
            <Flex>
              <img
                width={20}
                src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg"
                alt="Secure"
              />
              <Text mt={5} ml={2}>
                {" "}
                100% safe and secure
              </Text>
            </Flex>
          </Flex>

          <SimpleGrid
            justifyContent={"center"}
            m={"auto"}
            bg={"#FBF9F7"}
            textAlign="center"
          >
            <Text fontSize={"30px"} fontWeight={500}>
              Your Cart is Empty
            </Text>
            <Link to={"/"}>
              <Button colorScheme={"teal"}>Continue Shopping</Button>
            </Link>
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default Cart;
