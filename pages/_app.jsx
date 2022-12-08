import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
