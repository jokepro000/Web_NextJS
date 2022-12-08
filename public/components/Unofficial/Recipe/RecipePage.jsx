import { Box, VStack, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

export default function RecipePage({title, id, bodyForum}) {
  useEffect(() => {
    console.log(title)
  },[title])
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
          <Text ml="20px">กระทู้ล่าสุด</Text>
        </Box>
         {Array.from(title).map((val,index) => ( //,index [index]
        <><Box
            w="60%"
            h="60px"
            backgroundColor="#CBD5E0"
            fontSize="20px"
            color="black"
          >

            <Link href={`/recipeunoff/${id[index]}`}>
              <Text ml="60px" mt="14px">
                {val}
              </Text>
            </Link>

          </Box><Divider w="60%" /></>
        ))}
        <Box height="80px"></Box>
      </VStack>
    </Box>
  );
}
