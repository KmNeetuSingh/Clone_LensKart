import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import SignUp1 from "./SignUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
   const [input, setInput] = useState({
     mobile: "",
     email: "",
     password: "",
   });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem('user'))
    if (input.email === loggeduser.email && input.password === loggeduser.password)
    {
      localStorage.setItem('Loggedin', true)
      navigate('/')
      toast({
        title: "Account Created",
        description: "We've created  account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    else {
      alert("'wrong Email or Password'");
    }
  }

  return (
    <>
      <Button
        mt={-2}
        bg={"white"}
        p={1}
        _hover={{ bg: "white" }}
        onClick={onOpen}
      >
        SignIn
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader p={1}>
            <Box>
              <img
                src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
                alt=""
              />
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleLogin}>
              <SimpleGrid gap={5}>
                <Box>
                  <Text fontSize={"2xl"}>Sign In</Text>
                </Box>
                <Box>
                  <Input
                    m={"auto"}
                    ml={"5"}
                    w={"93%"}
                    required
                    outline={"none"}
                    borderRadius={15}
                    placeholder="Mobile/Email"
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Input
                    m={"auto"}
                    ml={"5"}
                    w={"93%"}
                    required
                    type="password"
                    outline={"none"}
                    borderRadius={15}
                    placeholder="password"
                    name="password"
                    value={input.password}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                  />
                </Box>

                <Flex>
                  <Checkbox fontSize={"xs"} defaultChecked>
                    {" "}
                    <Text fontSize={"xs"}> Get updates on Whatsapp </Text>{" "}
                  </Checkbox>
                  <Box w={6}>
                    {" "}
                    <img
                      src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                      alt=""
                    />
                  </Box>
                </Flex>
                <Button
                  m={"auto"}
                  ml={"5"}
                  w={"93%"}
                  borderRadius={15}
                  type="submit"
                >
                  Sign In
                </Button>

                <Flex gap={1}>
                  NewMember?
                  <Box color={"blue"}>
                    {" "}
                    <SignUp1 />{" "}
                  </Box>{" "}
                </Flex>
              </SimpleGrid>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignIn
