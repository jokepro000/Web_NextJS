import { Box, VStack, Heading } from "@chakra-ui/react";
import Footer from "../../public/components/Footer";
import Navbar from "../../public/components/Navbar";
import RecipePage from "../../public/components/Unofficial/Recipe/RecipePage";
import { GetRecipeApi } from "../services/strapi/forumPost";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function RecipeUnoff() {
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
    const json = await GetRecipeApi();
    console.log('TEST', json);
    console.log(json.data.data);
    sortCateRecipe(json.data.data);
  };
  useEffect(() => {
    if (id) {
      fetchAllForum();
    }
  }, [id]);

  const sortCateRecipe = (data) => {
    setThaiCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "A. อาหารไทย") {
            return val.attributes.recipe_titile;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setThaiIdCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "A. อาหารไทย") {
            return val.id;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setEuCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "B. อาหารยุโรป") {
            return val.attributes.recipe_titile;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setEuIdCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "B. อาหารยุโรป") {
            return val.id;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setJapanCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "C. อาหารญี่ปุ่น") {
            return val.attributes.recipe_titile;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setJapanIdCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "C. อาหารญี่ปุ่น") {
            return val.id;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setChCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "D. อาหารจีน") {
            return val.attributes.recipe_titile;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setChIdCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "D. อาหารจีน") {
            return val.id;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setIndiaCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "E. อาหารอินเดีย") {
            return val.attributes.recipe_titile;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
    setIndiaIdCate(
      data.map((val) => {
          if (val.attributes.cateRecipe === "E. อาหารอินเดีย") {
            return val.id;
          }
        }).filter((e) => {
          return e !== undefined;
        })
    );
  };

  return (
    <Box>
      <Navbar />
      <Heading size="2xl" align="center" height="36" mt={50}>
        โพสต์
      </Heading>
      {id === "th" && <RecipePage title={thaiCate} id={thaiIdCate} />}
      {id === "eu" && <RecipePage title={euCate} id={euIdCate} />}
      {id === "jp" && <RecipePage title={japanCate} id={japanIdCate} />}
      {id === "ch" && <RecipePage title={chCate} id={chIdCate} />}
      {id === "in" && <RecipePage title={indiaCate} id={indiaIdCate} />}
      <Footer />
    </Box>
  );
}
