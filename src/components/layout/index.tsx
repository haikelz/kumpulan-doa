import { Box, Container, Flex } from "@chakra-ui/react";
import { Layout } from "src/interface";
import Head from "next/head";
import Option from "../option";
import Navbar from "../navbar";
import BackToTop from "../backToTop";

const Layout = ({ children, title }: Layout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Container maxW={{ base: "full", md: "90%" }}>
        <Flex justify="center" flexDirection="column" alignItems="center">
          <Box
            display={{ base: "none", md: "flex" }}
            position="fixed"
            top="0"
            right="0"
            p="3"
          >
            <Option />
          </Box>
          {children}
          <Box
            position="fixed"
            display={{ base: "none", md: "inline" }}
            right="4"
            bottom="4"
          >
            <BackToTop />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
