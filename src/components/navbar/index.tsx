import { Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";
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
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        Doa Harian
      </Text>
      <Option />
    </Box>
  );
};

export default Navbar;
