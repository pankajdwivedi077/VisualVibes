import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxWidth={Container.md} padding={0} >
            {/* Left hand-side */}
            <Box display={{base:"none", md:"block"}}>
               <Image src='/auth.jpg' h={550} alt='Phone img'/>
            </Box>

            {/* Right hand-side */}
           <VStack spacing={4} >

           </VStack>
        </Container>
    </Flex>
  )
}

export default AuthPage