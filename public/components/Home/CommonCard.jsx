import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { GetPageColMenu } from "../../../pages/services/strapi/col_menu_webs";
import { imgUrl } from "../../../pages/services/constants";
const CommonCard = ({title, des, img, id}) => {
  return (
    <Center>
      <Link href={`/blog/${id}`}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        w={1000}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={imgUrl+img}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2">
              {des}
            </Text>
          </CardBody>
        </Stack>
      </Card>
      </Link>
    </Center>
  );
};

export default CommonCard;
