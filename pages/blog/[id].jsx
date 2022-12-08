import Navbar from "../../public/components/navbar";
import Footer from "../../public/components/Footer";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BlogDesc from "../../public/components/RecipeOfficial/BlogDesc";
import { GetColMenu } from "../services/strapi/col_menu_webs";

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [menuJsonRecipe, setMenuJsonRecipe] = useState([]);
  const [menuJsonIngre, setMenuJsonIngre] = useState([]);

  useEffect(() => {
    if (id) {
      fetchMenu();
    }
  }, [id]);

  const fetchMenu = async () => {
    const json = await GetColMenu(id); 
    if (json.status === 200) {
      setTitle(json.data.data.attributes.title_menu_web);
      setDesc(json.data.data.attributes.description_menu_web);
      setImg(json.data.data.attributes.imSrc_menu_web);
      setMenuJsonRecipe(json.data.data.attributes.ingreRecipeJson_menu_web.arrayMenu.recipe);
      setMenuJsonIngre(json.data.data.attributes.ingreRecipeJson_menu_web.arrayMenu.ingre);
      setError(false);
    } else {
      setError(true);
      setErrorMsg(json.message);
    }
  };

  return !isError ? (
    <Box>
      <Navbar />
      <VStack>
        <BlogDesc
          title={title}
          des={desc}
          img={img}
          recipe={menuJsonRecipe}
          ingredient={menuJsonIngre}
        />
      </VStack>
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
