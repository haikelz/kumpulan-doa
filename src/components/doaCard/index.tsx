import { Flex, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import { Idoa } from "src/interface";
import { memo } from "react";
import Link from "next/link";

const DoaCard = ({ doa, search }: Idoa) => {
  const bg = useColorModeValue("blue.400", "blue.500");

  return (
    <>
      {doa
        .filter((value) => {
          if (search === "") {
            return value;
          } else if (value.nama.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((item) => (
          <Link href={`/detail-doa/${item.id_doa}`} key={item.id_doa}>
            <Flex
              flexDirection={"column"}
              p={"3"}
              bg={bg}
              rounded={"md"}
              cursor={"pointer"}
              border={"2px"}
              transition={"0.2s ease-in-out"}
              _hover={{ background: "red.400" }}
            >
              <Text fontWeight={"bold"} fontSize={"xl"}>
                {item.id_doa}.
              </Text>
              <Text fontWeight={"semibold"} fontSize={"lg"}>
                {item.nama}
              </Text>
              <Flex gap={"3"} mt={"2"}>
                {item.kata_kunci
                  .sort()
                  .slice(1, 4)
                  .map((tag, index) => (
                    <Tag key={index++}>{tag === "" ? null : tag}</Tag>
                  ))}
              </Flex>
            </Flex>
          </Link>
        ))}
    </>
  );
};

export default memo(DoaCard);
