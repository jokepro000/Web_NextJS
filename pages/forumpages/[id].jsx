import { Box, Heading, VStack, Text, Divider } from "@chakra-ui/react";
import Footer from "../../public/components/Footer";
import Navbar from "../../public/components/Navbar";
import ForumPages from "../../public/components/Unofficial/Forum/ForumPages";
import { GetForumApi } from "../services/strapi/forum_api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Forumpages() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  const [thaiCate, setThaiCate] = useState([]);
  const [euCate, setEuCate] = useState([]);
  const [japanCate, setJapanCate] = useState([]);
  const [chCate, setChCate] = useState([]);
  const [indiaCate, setIndiaCate] = useState([]);

  const [thaiIdCate, setThaiIdCate] = useState([]);
  const [euIdCate, setEuIdCate] = useState([]);
  const [japanIdCate, setJapanIdCate] = useState([]);
  const [chIdCate, setChIdCate] = useState([]);
  const [indiaIdCate, setIndiaIdCate] = useState([]);

  const fetchAllForum = async () => {
    const json = await GetForumApi();
    console.log(json.data.data);
    sortCateForum(json.data.data);
  };
  useEffect(() => {
    if (id) {
      fetchAllForum();
    }
  }, [id]);

  const sortCateForum = (data) => {
    setThaiCate(
      data.map((val) => {
        if (val.attributes.cateForum === "A. อาหารไทย") {
          return val.attributes.title_forum;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setThaiIdCate(
      data.map((val) => {
        if (val.attributes.cateForum === "A. อาหารไทย") {
          return val.id;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setEuCate(
      data.map((val) => {
        if (val.attributes.cateForum === "B. อาหารยุโรป") {
          return val.attributes.title_forum;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setEuIdCate(
      data.map((val) => {
        if (val.attributes.cateForum === "B. อาหารยุโรป") {
          return val.id;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setJapanCate(
      data.map((val) => {
        if (val.attributes.cateForum === "C. อาหารญี่ปุ่น") {
          return val.attributes.title_forum;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setJapanIdCate(
      data.map((val) => {
        if (val.attributes.cateForum === "C. อาหารญี่ปุ่น") {
          return val.id;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setChCate(
      data.map((val) => {
        if (val.attributes.cateForum === "D. อาหารจีน") {
          return val.attributes.title_forum;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setChIdCate(
      data.map((val) => {
        if (val.attributes.cateForum === "D. อาหารจีน") {
          return val.id;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setIndiaCate(
      data.map((val) => {
        if (val.attributes.cateForum === "E. อาหารอินเดีย") {
          return val.attributes.title_forum;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
    setIndiaIdCate(
      data.map((val) => {
        if (val.attributes.cateForum === "E. อาหารอินเดีย") {
          return val.id;
        }
      }).filter((e) => {
        return e !== undefined
      })
    );
  };
  return (
    <Box>
      <Navbar />
      <Heading size="2xl" align="center" height="36" mt={50}>
        โพสต์
      </Heading>
      {id === "th" && <ForumPages title={thaiCate} id={thaiIdCate} />}
      {id === "eu" && <ForumPages title={euCate} id={euIdCate} />}
      {id === "jp" && <ForumPages title={japanCate} id={japanIdCate} />}
      {id === "ch" && <ForumPages title={chCate} id={chIdCate} />}
      {id === "in" && <ForumPages title={indiaCate} id={indiaIdCate} />}
      <Footer />
    </Box>
  );
}
