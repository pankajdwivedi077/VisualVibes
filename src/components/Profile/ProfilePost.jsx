import { Flex, GridItem, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Box, Avatar, Divider, VStack  } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'

const ProfilePost = ({ img }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
   <GridItem
    cursor={"pointer"}
    borderRadius={4}
    overflow={"hidden"}
    borderColor={"1px solid whiteAlpha.300"}
    position={"relative"}
    aspectRatio={1/1}
    onClick={onOpen}
   >

    <Flex
     opacity={0}
     _hover={{opacity:1}}
     position={"absolute"}
     top={0}
     left={0}
     right={0}
     bottom={0}
     bg={"blackAlpha.700"}
     transition={"all 0.3s ease"}
     zIndex={1}
     justifyContent={"center"}
    >

      <Flex
       alignItems={"center"}
       justifyContent={"center"}
       gap={50}
      >

      <Flex>
        <AiFillHeart size={20} />
        <Text fontWeight={"bold"} ml={2}>7</Text>
      </Flex>

      <Flex>
        <FaComment size={20} />
        <Text fontWeight={"bold"} ml={2}>7</Text>
      </Flex>

      </Flex>

    </Flex>

    <Image src={img} alt='profile post' w={"100%"} h={"100%"} objectFit={"cover"} />

   </GridItem>

   <Modal isOpen={isOpen} onClose={onClose}
     isCentered={true}
     size={{base:"3xl", md:"5xl"}}
   >
        <ModalOverlay />
        <ModalContent>
       
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex gap={4} w={{base:"90%",sm:"70%",md:"full"}} mx={"auto"}>
                  <Box borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} flex={1.5} >
                    <Image src={img} alt='profile post' />
                  </Box>
                  <Flex flex={1} flexDirection={"column"} px={10} display={{base: "none",md:"flex"}}>
                    <Flex alignItems={"center"} justifyContent={"space-between"}>

                     <Flex alignItems={"center"} gap={4}>
                          <Avatar src='/logo.png' size={"sm"} name='visual vibes'/>
                          <Text fontWeight={"bold"} fontSize={12}>Visual Vibes</Text>
                     </Flex>

                     <Box _hover={{bg:"whiteAlpha.300", color:"red.600"}} borderRadius={4} p={1}>
                      <MdDelete size={20} cursor="pointer" />
                     </Box>
                     </Flex>
                     <Divider  my={4} bg={"gray.500"} />
                     <VStack w="full" alignItems={"start"} maxH={"350px"} overflow={"auto"}>

                        <Comment 
                         createdAt="1d ago"
                         username="visualvibes"
                         profilePic="/logo.png"
                         text={"sexy"}
                        />

                         <Comment 
                         createdAt="3h ago"
                         username="bheem"
                         profilePic={"https://m.media-amazon.com/images/I/41IuyAVi+wL._AC_UF894,1000_QL80_.jpg"}
                         text={"hot"}
                        />

                         <Comment 
                         createdAt="3d ago"
                         username="raju"
                         profilePic={"https://m.media-amazon.com/images/S/pv-target-images/84e8ff53c2a3f32484447bbe789b35394c9bbdf025a64e6cce1ab727baca39eb.jpg"}
                         text={"hell froze over"}
                        />

                     </VStack>
                     <Divider  my={4} bg={"gray.800"} />
                       <PostFooter isProfilePage={true}/>
                  </Flex>
            </Flex>
          </ModalBody>     
        </ModalContent>
      </Modal>

   </>
  )
}

export default ProfilePost