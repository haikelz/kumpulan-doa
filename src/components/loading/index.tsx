import { Flex, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex justify={"center"} alignItems={"center"} h={"100vh"}>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        Loading....
      </Text>
    </Flex>
  );
};

export default Loading;
