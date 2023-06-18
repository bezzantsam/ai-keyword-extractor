import React from 'react'
import {Container, Box} from "@chakra-ui/react"
import Header from "./components/Header"
const App = () => {
  return (
    <Box bg="blue.600" color="white" height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header>

        </Header>
    <h1>My App</h1>
    </Container>
    </Box>
  )
}

export default App