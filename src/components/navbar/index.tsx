import { Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Option from "../option";

const Navbar = () => {
  const bg: string | string = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      display={{ base: "flex", md: "none" }}
      w={"full"}
      top={"0"}
      bg={bg}
      position={"fixed"}
      h={"14"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"3"}
      zIndex={"10"}
    >
      <Flex justify={"center"} alignItems={"center"} gap={"2"}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Doa Harian
        </Text>
        <Image src="/img/doa-harian.png" width="30px" height="30px" />
      </Flex>
      <Option />
    </Box>
  );
};

export default Navbar;
