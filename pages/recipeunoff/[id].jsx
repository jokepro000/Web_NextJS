import { Box, VStack } from "@chakra-ui/react";
import Footer from "../../public/components/Footer";
import Navbar from "../../public/components/Navbar";
import RecipeBlog from "../../public/components/Unofficial/Recipe/RecipeBlog";
import { GetRecipeId } from "../services/strapi/forumPost";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";



export default function RecipeUnoffId() {
  const router = useRouter();
  const { id } = router.query;
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [titleRecipe, setTitle] = useState([]);
  const [ImgSrcRecipeApi, setImg] = useState([]);
  const [bodyRecipe, setBodyForum] = useState([]);

  useEffect(() => {
    if (id) {
      fetchRecipeData();

    }
  }, [id]);

  const fetchRecipeData = async () => {
    const json = await GetRecipeId(id);
    if (json.status === 200) {
      console.log(json.data.data)
      setTitle(json.data.data.attributes.recipe_titile);
      setImg(json.data.data.attributes.recipe_img_src);
      setBodyForum(json.data.data.attributes.recipe_body);
      setError(false);
    } else {
      setError(true);
      setErrorMsg(json.message);
    }
  }
  return !isError ? (
    <Box>
      <Navbar />
      <RecipeBlog title={titleRecipe} imgSrc={ImgSrcRecipeApi} bodyRecipe={bodyRecipe}  />
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
