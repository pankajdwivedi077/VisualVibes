import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/contants'
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';

const PostFooter = ({ post,username, isProfilePage }) => {

  const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(1000);
  const { isCommenting, handlePostComent } = usePostComment();
  const [comment,setComment] = useState('');

  const authUser = useAuthStore((state) => state.user);

  const handleSubmitComment = async () => {
    await handlePostComent(post.id,comment)
    setComment("");
  }

	const handleLike = () => {
		if (liked) {
			setLiked(false);
			setLikes(likes - 1);
		} else {
			setLiked(true);
			setLikes(likes + 1);
		}
	};

  return (
    <>
     <Box my={10} marginTop={"auto"}>
     <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4} > 
       <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
         {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
       </Box>
       <Box cursor={"pointer"} fontSize={18}>
        <CommentLogo />
       </Box>
     </Flex>
     <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
     </Text>

     {!isProfilePage && (
      <>
        <Text fontWeight={700} fontSize={"sm"}>
       {username} {" "}
       <Text as='span' fontWeight={400}>
        Feeling good
       </Text>
     </Text>
     <Text color={"gray"} fontSize={"sm"}>
        view all comments
     </Text>
      </>
     )}

    {authUser && (
       <Flex
       alignItems={"center"}
       gap={2}
       justifyContent={"space-between"}
       w={"full"}
      > 
      <InputGroup>
        <Input variant={"flushed"} placeholder={'Add a comment...'} fontSize={14} value={comment} onChange={(e) => setComment(e.target.value)} />
        <InputRightElement>
         <Button 
          fontSize={14}
          color={'blue.500'}
          fontWeight={600}
          cursor={"pointer"}
          _hover={{color: "white"}}
          bg={"transparent"}
          onClick={handleSubmitComment}
          isLoading={isCommenting}
         >
             Post
         </Button>
        </InputRightElement>
      </InputGroup>
      </Flex>
    )}
     </Box>
    </>
  )
}

export default PostFooter