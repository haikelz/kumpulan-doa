import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Judul = () => {
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Flex justify="center" alignItems="center" gap="2">
        <Heading>Doa Harian</Heading>
        <Image
          src="https://raw.githubusercontent.com/haikelz/kumpulan-doa/master/public/img/doa-harian.png"
          width="35px"
          height="35px"
          alt="Logo"
          priority
        />
      </Flex>
      <Text fontSize="lg" fontWeight="medium">
        Kumpulan Doa sehari-hari
      </Text>
    </Box>
  );
};

export default Judul;
