import {  Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4} >
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"} >
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text  fontSize={12} fontWeight={"bold"} color={"gray.400"}  cursor={"pointer"} _hover={{color: "gray.400"}}>
             See All
          </Text>
        </Flex>
        <SuggestedUser name='Bheem' followers={1200} avatar='https://m.media-amazon.com/images/I/41IuyAVi+wL._AC_UF894,1000_QL80_.jpg' />
        <SuggestedUser name='Raju' followers={33} avatar='https://m.media-amazon.com/images/S/pv-target-images/84e8ff53c2a3f32484447bbe789b35394c9bbdf025a64e6cce1ab727baca39eb.jpg' />
        <SuggestedUser name='RamSiya' followers={99} avatar='https://bit.ly/code-beast' />

        <Box
         fontSize={12}
         color={"gray.500"}
         mt={5}
         alignSelf={"start"}
        >
            <Link href='https://github.com/pankajdwivedi077' target='_blank' color="blue.500">Programmer GitHub</Link>
        </Box>

    </VStack>
  )
}

export default SuggestedUsers