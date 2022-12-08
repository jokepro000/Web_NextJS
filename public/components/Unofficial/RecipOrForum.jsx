import { Box, VStack, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";

export default function RecipOrForum() {
  return (
    <Box>
      <VStack spacing={0}>
        <Box
          w="60%"
          h="100%"
          backgroundColor="#FC8181"
          fontSize="30px"
          color="black"
        >
          <Text ml="20px">หมวดอาหาร</Text>
        </Box>

        <Box
          w="60%"
          h="100px"
          backgroundColor="#CBD5E0"
          fontSize="40px"
          color="black"
        >
          <Link href="/recipeunoff">
            <Text ml="60px" mt="20px">
              สูตร
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="100px"
          backgroundColor="#CBD5E0"
          fontSize="40px"
          color="black"
        >
          <Link href="/forumpage">
            <Text ml="60px" mt="20px">
              ฟอรั่ม พูดคุย ถามคำถาม
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        

        <Box height="80px"></Box>
      </VStack>

    </Box>
  );
}
