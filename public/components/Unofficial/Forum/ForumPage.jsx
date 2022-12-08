import { Box, Center, Heading, Text, Image } from "@chakra-ui/react";
import { imgUrl } from "../../../../pages/services/constants";
export default function ForumPage({ title,imgForum,bodyforum }) {
  console.log(title,imgForum,bodyforum)
  return (
    <Center>
      <Box backgroundColor="white" h="400px" />
      <Box w={1000} backgroundColor="#FEB2B2">
        <Heading fontSize="50px" ml="40px" mt="40px" color="#3182CE">
          {title}
        </Heading>
        <Center>
          <Image mt="50px" src={imgUrl+imgForum} boxSize="400px"></Image>
          </Center>
        <Text
          color="black"
          ml="10px"
          mt="40px"
          w={970}
          fontSize="20px"
          noOfLines={100}
        >
          {bodyforum}
        </Text>
        <Box backgroundColor="#FEB2B2" h="50px" />
      </Box>
    </Center>
  );
}
