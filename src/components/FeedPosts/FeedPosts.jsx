import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'

const FeedPosts = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
     setTimeout(() => {
       setIsLoading(false)
     }, 2000)
    }, [])

  return (
    <Container maxW={"container.sm"} py={10} px={2} >

      {isLoading && [0,1,2,3].map((_,idx) => {
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size='10' />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height='10px' w={"200px"} />
              <Skeleton height='10px' w={"200px"} />
            </VStack>
        </Flex>  
        <Skeleton w={"full"}>
          <Box h={"500px"}>contents</Box>    
        </Skeleton>  
        </VStack>
      })}

      {!isLoading && (
        <>
        
        <FeedPost 
       img='/img2.jpg'
       username='eva'
       avatar='/img2.jpg'
       />
        <FeedPost 
       img='/img4.jpg'
       username='alice'
       avatar='/img4.jpg'
       />
         <FeedPost 
       img='/img3.jpg'
       username='lisa'
       avatar='/img3.jpg'
       />
         <FeedPost 
       img='/img1.jpg'
       username='lana'
       avatar='/img1.jpg'
       />

        </>
      )}
    </Container>
  )
}

export default FeedPosts