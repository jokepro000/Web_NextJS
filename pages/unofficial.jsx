import { Box } from "@chakra-ui/react";
import Footer from "../public/components/Footer";
import Navbar from "../public/components/Navbar";
import RecipOrForum from "../public/components/Unofficial/RecipOrForum";




export default function Unofficial() {
    return (
        <Box>
        <Navbar/>
        <Box mt={100}>
        <RecipOrForum/>
        </Box>
        <Footer/>
        </Box>
    )
}