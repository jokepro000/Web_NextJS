import {
  Image,
  Box,
  Center,
  Heading,
  Avatar,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import { imgUrl } from "../../../pages/services/constants"; 
export default function BlogDesc({ title, des, img, recipe, ingredient }) {
  // const myArrayIngre = ingredient.split("\n");
  // const myArrayRecipe = recipe.split("\n");
  return (
    <Box maxW="700px">
      <Box h="80px"></Box>
      <Center>
        <Image src={imgUrl+img} alt="Dan Abramov" />
      </Center>
      <Box h="5px"></Box>
      <Box h="10px" bg="white"></Box>
      <Box bg="white">
        <Heading size="md" ml="30px" color="black">
          {title}
        </Heading>
        <Box h="10px"></Box>
        <HStack ml="10px">
          <Avatar name="Logo" src="../images/f16.JPG" />
          <Box h="15px"></Box>
          <Text color="black">ชื่อ User</Text>
        </HStack>
        <Text color="black" ml="10px" noOfLines={10}>
          {des}
        </Text>
      </Box>
      <Box h="20px" bg="white"></Box>
      <Box bg="white">
        <Heading size="md" ml="30px" color="black">
          ส่วนผสม
        </Heading>
        <Box h="15px"></Box>
        <UnorderedList color="black" ml="30px">
          {
            ingredient.map((val) => 
              <ListItem>{val}</ListItem>
            )
          }  
        </UnorderedList>
      </Box>
      <Box h="20px" bg="white"></Box>
      <Box bg="white">
        <Heading size="md" ml="30px" color="black">
          วิธีทำ
        </Heading>
        <Box h="15px"></Box>
        <OrderedList color="black" ml="30px" spacing={3}>
          {
            recipe.map((val) =>
            <ListItem>{val}</ListItem>
            )
          }
        </OrderedList>
      </Box>
      <Box h="50px"></Box>
    </Box>
  );
}

// function callApi() {
//   axios({
//     method: "get",
//     url: "http://localhost:1337/api/col-menu-webs/1",
//     headers: {'Authorization': 'bearer 644e3b2d3a91bf021c60649ce95fd3ac89c347664c2eb593f6ef98e0d15f188b415d39e99c93a31226bc7e331f1244cd9cf3fb2d1251c04916962d30309c286c17f1f7e54d4ff47abba9bac0c6479409e71775dd4704da6fc79075d45f0d924f68f043498b2b09581ddccf695d66710895ecfb69725879f7bf38ccf0ea0f4859'},
//   }).then(function (response) {
//     const data = response.data.data;
//     console.log(response.data);
// $('#title').text(data.attributes.title);
// $('#detail').text(data.attributes.detail);
// $('#image').attr("src",data.attributes.imageSrc);
// });

// }
// export async function getServerSideProps() {
//   const{API_URL} = process.env

//   const res = await fetch(`${API_URL}/col-menu-webs`)
//   const data = await res.json()

//   return {
//     props: {
//         movies: data
//     }
//   }
// }
