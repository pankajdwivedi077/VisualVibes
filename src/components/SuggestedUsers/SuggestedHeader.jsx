import { Avatar, Text, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name='Visual Vibes' size={"lg"} src='/logo.png'/>
            <Text fontSize={12} fontWeight={"bold"}>
            VisualVibes
            </Text>
        </Flex>
        <Link 
         as={RouterLink}
         to={"/auth"}
         fontSize={14}
         color={"blue.400"}
         style={{textDecoration: "none"}}
         cursor={"pointer"}
        >
            Log out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader