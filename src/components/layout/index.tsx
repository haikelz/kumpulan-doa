import { Ilayout } from "src/interface";
import { Box, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Option from "../option";
import Navbar from "../navbar";

const Layout = ({ children, title }: Ilayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Container maxW={{ base: "full", md: "90%" }}>
        <Flex justify={"center"} flexDirection={"column"} alignItems={"center"}>
          <Box
            display={{ base: "none", md: "flex" }}
            position={"fixed"}
            top={"0"}
            right={"0"}
            p={"3"}
          >
            <Option />
          </Box>
          {children}
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
