import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

const Error = () => {
  return (
    <>
      <Head>
        <title>Error!</title>
      </Head>
      <Flex justify="center" alignItems="center" h="100vh">
        <Text fontWeight="bold" fontSize="2xl">
          Error!!
        </Text>
      </Flex>
    </>
  );
};

export default Error;
