import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/contants'
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from '../Modals/CommentsModal';

const PostFooter = ({ post, creatorProfile, isProfilePage}) => {

  //  if (!creatorProfile) {
  //   return null; // Return null or a loading indicator if creatorProfile is not available yet
  // }

  const { isCommenting, handlePostComent } = usePostComment();
  const [comment,setComment] = useState('');

  const authUser = useAuthStore((state) => state.user);

  const commentRef = useRef(null);

  const { handleLikePost,isLiked,likes } = useLikePost(post);
  const { isOpen,onClose,onOpen } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComent(post.id,comment)
    setComment("");
  }

  return (
    <>
     <Box my={10} marginTop={"auto"}>
     <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4} > 
     <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
					{!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
				</Box>
       <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
        <CommentLogo />
       </Box>
     </Flex>
     <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
     </Text>

      {isProfilePage && (
        <Text
         fontSize="12"
         color={"gray"}
        >Posted {timeAgo(post.createdAt)} </Text>
      )}

     {!isProfilePage && (
      <>
        <Text fontWeight={700} fontSize={"sm"}>
       {creatorProfile?.username} {" "}
       <Text as='span' fontWeight={400}>
        {post.caption}
       </Text>
     </Text>
     {post.comments.length > 0 && (
      <Text color={"gray"} fontSize={"sm"} cursor={"pointer"} onClick={onOpen}>
      view all {post.comments.length} comments
   </Text>
     )}
    {/* Commnets modal only in homepage */}
    {isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null }
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
        <Input variant={"flushed"} placeholder={'Add a comment...'} fontSize={14} value={comment} onChange={(e) => setComment(e.target.value)} ref={commentRef} />
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