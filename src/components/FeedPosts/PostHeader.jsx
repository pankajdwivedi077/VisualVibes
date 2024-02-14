import { Avatar, Box, Button, Flex, SkeletonCircle, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useFollowUser from '../../hooks/useFollowUser';

const PostHeader = ({ post, creatorProfile }) => {

  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);
  // if (!creatorProfile) {
  //   return null; // Return null or a loading indicator if creatorProfile is not available yet
  // }
  
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
           <Link to={`${creatorProfile.username}`} >
           <Avatar src={creatorProfile.profilePicUrl} alt="user profile pic" size={"sm"} />
           </Link>
        ) : (
          <SkeletonCircle size='10' />
        )}
       
        <Flex fontSize={12} fontWeight={"bold"} gap="2">
        {creatorProfile ? (
           <Link to={`${creatorProfile.username}`} >
           {creatorProfile.username}
           </Link>
          
        ) : (
          <SkeletonCircle w={"100px"} h={"10px"} />
        ) }
         <Box color={"gray.500"}>. 1w</Box>
       
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
        size={"xs"}
        bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white", 
        }}
        transition={"0.2s ease-in-out"}
        onClick={handleFollowUser}
        isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
