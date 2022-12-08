import { Box } from "@chakra-ui/react";
import Footer from "../../public/components/Footer";
import Navbar from "../../public/components/Navbar";
import ForumPage from "../../public/components/Unofficial/Forum/ForumPage";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GetForumId } from "../services/strapi/forum_api";

export default function ForumpageId() {
  const router = useRouter();
  const { id } = router.query;
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const [titleForum, setTitleForum] = useState([]);
  const [ImgSrcForumApi, setImgSrcForumApi] = useState([]);
  const [bodyForum, setBodyForum] = useState([]);


  useEffect(() => {
    if(id) {
      fetchMenu();
    }
  }, [id]);

  const fetchMenu = async () => {
    const json = await GetForumId(id);
    if (json.status === 200) {
      setTitleForum(json.data.data.attributes.title_forum);
      setImgSrcForumApi(json.data.data.attributes.imSrcForumApi);
      setBodyForum(json.data.data.attributes.body_forum);
      setError(false);
    } else {
      setError(true);
      setErrorMsg(json.message);
    }
  };

  return !isError ? (
    <Box>
      <Navbar />
      <ForumPage title={titleForum} imgForum={ImgSrcForumApi} bodyforum={bodyForum} />
      <Footer />
    </Box>
  ) : (
    <Box>
      <Navbar />
      <VStack>
        <p>{errorMsg}</p>
      </VStack>
      <Footer />
    </Box>
  );
}
