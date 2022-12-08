import Navbar from "../public/components/navbar";
import Footer from "../public/components/Footer";
import { Box, Heading, VStack, Text, Divider } from "@chakra-ui/react";
import ForumCata from "../public/components/Unofficial/Forum/ForumCata";
import NavPage from "../public/components/NavPage";
import Link from "next/link";

export default function ForumPage() {
  return (
    <Box>
      <Navbar />
      <Heading size="2xl" align="center" height="36" mt={50}>
        ฟอรั่ม
      </Heading>
      <ForumCata />
      <Box height="20px"></Box>
      <NavPage />
      <Box height="20px"></Box>
      <Footer />
    </Box>
  );
}
