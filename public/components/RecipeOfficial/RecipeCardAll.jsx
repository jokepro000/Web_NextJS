import CommonCard from "../Home/CommonCard";
import { VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetPageColMenu } from "../../../pages/services/strapi/col_menu_webs";
import NavPage from "../NavPage";

export default function RecipeCardAll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchAllMenu();
  }, [page]);

  const fetchAllMenu = async () => {
    const json = await GetPageColMenu(page);
    setData(json.data.data);
    console.log(json.data.data);
  };

  const pageOnClick = (cbValue) => {
    setPage(cbValue);
  }

  return (
    <Box>
      <VStack spacing={20} align="stretch">
        {data.map((val) => (
          <CommonCard
            key={val.id}
            img={val.attributes.imSrc_menu_web}
            title={val.attributes.title_menu_web}
            des={val.attributes.description_menu_web}
            id={val.id}
          />
        ))}
      </VStack>
      <Box height="20px" />
      <NavPage onCallback={pageOnClick} currentPage={page}/>
      <Box height="20px" />
    </Box>
  );
}
