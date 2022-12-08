import { Center } from "@chakra-ui/react";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        left: 0,
        bottom: 0,
        backgroundColor: "#C53030",
        width: "100%",
        height: "100%",
      }}
    >
      <Center>{` Web React NextJS MongoDB ${year}`}</Center>
    </footer>
  );
};

export default Footer;
