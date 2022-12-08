import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Center,
} from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";
import {useEffect, useState} from 'react';

export default function NavPage({onCallback, currentPage}) {
  const [pageAmount, setState] = useState([]);

  useEffect(() => {
    const amountFromLocal = parseInt(localStorage.getItem('pageAmount'));
    const start = 1;
    const end = amountFromLocal;
    const range = [...Array(end - start + 1).keys()].map(x => x + start);
    setState(range);
  }, [])

  return (
    <Center>
      <Breadcrumb spacing="8px" separator="|" fontSize="larger">
        {
          pageAmount.map((val, index) => 
            <BreadcrumbItem fontWeight={currentPage === index+1 ? "bold" : "normal"}>
              <BreadcrumbLink onClick={() => onCallback(index+1)}>{index+1}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        }
      </Breadcrumb>
    </Center>
  );
}
