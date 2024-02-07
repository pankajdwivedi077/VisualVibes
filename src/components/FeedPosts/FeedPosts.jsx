import { Container } from '@chakra-ui/react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2} >
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
    </Container>
  )
}

export default FeedPosts