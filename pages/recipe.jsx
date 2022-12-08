import Navbar from "../public/components/navbar";
import Footer from "../public/components/Footer";
import { Box, Heading } from "@chakra-ui/react";
import CommonCard from "../public/components/Home/CommonCard";
import RecipeCardAll from "../public/components/RecipeOfficial/RecipeCardAll";


export default function Recipe() {

  return (
    <Box>
      <Navbar />
      <Heading size="2xl" align="center" height="36" mt={50}>
        สูตรทำอาหาร
      </Heading>
      
      <RecipeCardAll w={50}/>
      <Footer />
    </Box>
  );
}
