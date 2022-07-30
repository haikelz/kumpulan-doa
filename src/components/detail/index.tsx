import { Flex, Text, Heading, Tag } from "@chakra-ui/react";
import { IdetailDoa } from "src/interface";
import ModalKeterangan from "../modalKeterangan";

const Detail = ({ item }: IdetailDoa) => {
  return (
    <Flex
      flexDir={"column"}
      textAlign={"center"}
      justify={"center"}
      alignItems={"center"}
      py={{ base: "4", md: "0" }}
      h={"full"}
      minH={"100vh"}
    >
      <Heading>{item.nama}</Heading>
      {item.keterangan === null ? null : (
        <ModalKeterangan keterangan={item.keterangan} />
      )}
      {item.id_doa === "20" ? (
        <Text fontSize={"lg"} mt={"2"} letterSpacing={"wide"}>
          {item.id_doa === "20" ? item.keterangan[0] : null}
        </Text>
      ) : null}
      <Text
        fontWeight={"extrabold"}
        mt={"4"}
        fontSize={"4xl"}
        letterSpacing={"widest"}
      >
        {item.id_doa === "20" ? item.keterangan[1] : item.lafal}
      </Text>
      <Text
        mt={"1"}
        fontSize={"lg"}
        fontWeight={"semibold"}
        letterSpacing={"wide"}
      >
        {item.id_doa === "20" ? item.keterangan[2] : item.transliterasi}
      </Text>
      <Text fontSize={"lg"} mt={"1"} letterSpacing={"wide"}>
        <Tag fontWeight={"bold"}>Artinya: </Tag>{" "}
        {item.id_doa === "20" ? item.keterangan[3] : item.arti}
      </Text>
    </Flex>
  );
};

export default Detail;
