import React from 'react'
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SignIn from './SignIn.jsx';
const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef()
  const navigate = useNavigate()

    const [input, setInput] = useState({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      password: "",
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input))
    navigate('/')
    alert("Ready to SignIn click on SignIn given below");
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
        Sign Up
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* Form component with onSubmit */}
            <form onSubmit={handleSubmit}>
              <FormControl>
                <ModalHeader>Create your account</ModalHeader>
              </FormControl>

              <FormControl mt={4}>
                <Input
                  placeholder="Last name"
                  name="lastName"
                  value={input.lastName}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <InputGroup>
                  <InputLeftAddon children="+91" />
                  <Input
                    type="tel"
                    placeholder="Mobile*"
                    name="mobile"
                    value={input.mobile}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                  />
                </InputGroup>
              </FormControl>

              <FormControl mt={4}>
                <Input
                  placeholder="Email*"
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  placeholder="Password*"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </FormControl>

              <Flex mt={4} color={"blue"}>
                <Link>Got a Referral Code?</Link>
                <Text mt={1} fontSize={"xs"}>
                  (Optional)
                </Text>
              </Flex>

              <Flex mt={4}>
                <Checkbox fontSize={"sm"} defaultChecked>
                  <Text fontSize={"xs"}>Get updates on Whatsapp</Text>
                </Checkbox>
                <Box w={6}>
                  <img
                    src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                    alt=""
                  />
                </Box>
              </Flex>

              <Flex mt={4}>
                <Text mt={1} fontSize={"xs"}>
                  By creating this account, you agree to our
                </Text>
                <Text color={"darkblue"} textDecoration={"underline"}>
                  <Link>Privacy Policy</Link>
                </Text>
              </Flex>

              <Box m={"auto"} mt={4}>
                <Button type="submit" borderRadius={15} w={"100%"}>
                  Create an Account
                </Button>
              </Box>

              <Flex mt={5} justifyContent={"center"}>
                <Text mt={1} fontSize={"xs"}>
                  Have an account?
                </Text>
                <Text color={"darkblue"}>
                <SignIn/>
                </Text>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignUp

