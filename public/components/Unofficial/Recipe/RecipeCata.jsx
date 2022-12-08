import { Box, VStack, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GetRecipeApi } from "../../../../pages/services/strapi/forumPost";

export default function ForumCata() {

  return (
    <Box>
      <VStack spacing={0}>
        <Box
          w="60%"
          h="100%"
          backgroundColor="#FC8181"
          fontSize="20px"
          color="black"
        >
          <Text ml="20px">หมวดอาหาร</Text>
        </Box>

        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="/recipeunoffpages/th">
            <Text ml="60px" mt="14px">
              อาหารไทย
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="/recipeunoffpages/eu">
            <Text ml="60px" mt="14px">
              อาหารยุโรป
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="/recipeunoffpages/jp">
            <Text ml="60px" mt="14px">
              อาหารญี่ปุ่น
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="/recipeunoffpages/ch">
            <Text ml="60px" mt="14px">
              อาหารจีน
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="/recipeunoffpages/in">
            <Text ml="60px" mt="14px">
              อาหารอินเดีย
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />

        <Box height="80px"></Box>
      </VStack>
    </Box>
  );
}
