import React from 'react'
import {Heading, Image, Text} from "@chakra-ui/react"
import logo from '../assets/light-bulb.svg'
const Header = () => {
  return (
    <>
    <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
    <Heading>AI Keyword Extractor</Heading>
    </>
  )
}

export default Header