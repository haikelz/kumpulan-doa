import { Flex, Spinner, Text } from "@chakra-ui/react";
import Head from "next/head";

const Loading = () => {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <Flex gap="2" justify="center" alignItems="center" h="100vh">
        <Text fontWeight="bold" fontSize="2xl">
          Loading
        </Text>
        <Spinner />
      </Flex>
    </>
  );
};

export default Loading;
