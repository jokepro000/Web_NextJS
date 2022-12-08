  import {
    Box,
    Avatar,
    Input,
    Wrap,
    WrapItem,
    Text,
    Button,
    Link,
    Stack
  } from "@chakra-ui/react";
  import { Icon } from "@chakra-ui/react";
  import NextLink from 'next/link'

  import { GiCookingGlove } from "react-icons/gi";
  import { MdForum, MdAccountBox } from "react-icons/md";

  export default function Navbar() {
    return (
      <Box bg="#C53030" w="100%" p={4} color="white">
        <Wrap>
          <WrapItem>
            <NextLink href='/' >
            <Avatar name="Logo" src="../images/f16.JPG" />
            </NextLink>
          </WrapItem>
          <WrapItem>
            <NextLink href="/recipe" legacyBehavior passHref>
            <Link>
            <Box>
              <Icon as={GiCookingGlove} w={9} h={9} ml={150} />
              <Text fontSize="sm" ml={130} mt={-2}>
                สูตรทำอาหาร
              </Text>
            </Box>
            </Link>
            </NextLink>
          </WrapItem>
          <WrapItem>
            <NextLink href="/unofficial" legacyBehavior passHref>
            <Link>
            <Box>
              <Icon as={MdForum} w={9} h={9} ml={10} />
              <Text fontSize="sm" ml={39} mt={-2}>
                ฟอรั่ม
              </Text>
            </Box>
            </Link>
            </NextLink>
          </WrapItem>
          <WrapItem>
            <Input
              placeholder="หาสูตรอะไรอยู่?"
              w={700}
              size="lg"
              ml={100}
              mt={1}
              _placeholder={{ color: "black" }}
              bg="#CBD5E0"
            />
          </WrapItem>
          <WrapItem >
            <Avatar mt={1} bg="teal.500" ml={20}/>
            <Stack direction="row" spacing={6} mt={2} ml={4}>
              <NextLink href="/signin">
              <Button   colorScheme="blue" variant="solid">
                เข้าสู่ระบบ
                </Button>
              </NextLink>
              <NextLink href="/signup">
              <Button   colorScheme="pink" variant="solid">
                สมัครสมาชิก
              </Button>
              </NextLink>
            </Stack>
          </WrapItem>
        </Wrap>
      </Box>
    );
  }
