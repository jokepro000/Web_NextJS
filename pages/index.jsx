import Navbar from "../public/components/Navbar";
import CommonCard from "../public/components/Home/CommonCard";
import Footer from "../public/components/Footer";
import Link from "next/link";

import {
  Text,
  Button,
  Box,
  Heading,
  Flex,
  Spacer,
  Stack,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import { GetAllColMenu } from "./services/strapi/col_menu_webs";
import moment from "moment/moment";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAllMenu();
  }, []);

  const fetchAllMenu = async () => {
    const json = await GetAllColMenu();
    console.log(json.data.data);
    sortLatestMenu(json.data.data);
    const pageAmount = Math.ceil(json.data.data.length/5);
    localStorage.setItem('pageAmount', pageAmount)
  };
  const sortLatestMenu = (data) => {
    const sortedData = data.sort(
      (a, b) => moment(a.attributes.updatedAt) - moment(b.attributes.updatedAt)
    );
    console.log("hello");
    setData(sortedData.reverse());
  };

  return (
    <Box>
      <Navbar />
      <Heading size="2xl" align="center" height="36" mt={50}>
        สูตรทำอาหารล่าสุด
      </Heading>
      <VStack spacing={20} align="stretch">
        {data.slice(0,3).map((val) => (
            <CommonCard
              key={val.id}
              img={val.attributes.imSrc_menu_web}
              title={val.attributes.title_menu_web}
              des={val.attributes.description_menu_web}
              id={val.id}
            />
        ))}
      </VStack>
      <Box height="20px"></Box>
      <Center>
        <Link href="/recipe">
          <Button colorScheme="blue" variant="solid">
            ดูสูตรอาหารทั้งหมด
          </Button>
        </Link>
      </Center>
      <Box height="20px"></Box>
      <Footer />
    </Box>
  );
}
