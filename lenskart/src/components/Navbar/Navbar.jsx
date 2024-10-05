import { Box } from '@chakra-ui/react'
import React from 'react'
import MainNavbar from './MainNavbar'
import MiddleNav from './MiddleNav'
import DropDownNav from './DropDownNav'

const Navbar = () => {
  return (
      <Box w={"100%"}>
          <MainNavbar />
          <MiddleNav />
          <DropDownNav/>
  </Box>
  )
}

export default Navbar
