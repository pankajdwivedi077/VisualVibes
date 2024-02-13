import { Tooltip, Box, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Button } from "@chakra-ui/react" 
import { SearchLogo } from "../../assets/contants"
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";
import { useRef } from "react";

const Search = () => {

 const { isOpen, onClose, onOpen } = useDisclosure();
 const { isLoading, user, getUserProfile, setUser } = useSearchUser();
 const searchRef = useRef(null);

 const handleSearchUser = (e) => {
  e.preventDefault()
  getUserProfile(searchRef.current.value)
 }

 console.log(user)

  return (
    <>
    <Tooltip
    hasArrow
    label={"Search"}
    placement='right'
    ml={1}
    openDelay={500}
    display={{base: "block", md: 'none'}}
   >
    <Flex
     alignItems={"center"}
     gap={4}
     _hover={{bg: "whiteAlpha.400"}}
     borderRadius={6}
     p={2}
     w={{base:10,md:"full"}}
     justifyContent={{base: "center",md:"flex-start"}}
     onClick={onOpen}
     >
    <SearchLogo />
    <Box display={{base:"none",md:"block"}}>
     Search
    </Box>
    </Flex>
   </Tooltip>

   <Modal
    isOpen={isOpen}
    onClose={onClose}
    motionPreset="slideInLeft"
   >

    <ModalOverlay />
    <ModalContent bg={"black"} border={"1px soid grey"} maxW={"400px"}>
     <ModalHeader>Serach user</ModalHeader>
     <ModalCloseButton />
     <ModalBody pb={6}>
      <form onSubmit={handleSearchUser}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input placeholder="visualvibes"
          ref={searchRef} />
        </FormControl>
        <Flex w={"full"} justifyContent={"flex-end"}>
          <Button type="submit" ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
            Search
          </Button>
        </Flex>
      </form>
      {user && <SuggestedUser user={user} setUser={setUser} /> }
     </ModalBody>
      
    </ModalContent>

   </Modal>
   </>
  )
}

export default Search