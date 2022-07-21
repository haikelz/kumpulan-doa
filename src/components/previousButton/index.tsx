import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { Iitem } from "src/interface";
import Link from "next/link";

// dalam hal ini, id nya masih dalam bentuk string, jadi kita ubah dulu ke integer dengan parseInt()
const PreviousButton = ({ item }: Iitem) => {
  return (
    <>
      {parseInt(item.id_doa) <= 1 ? null : (
        <Link href={`/detail-doa/${parseInt(item.id_doa) - 1}`} passHref>
          <Box position={"fixed"} left={"0"} bottom={"0"} p={"4"}>
            <Button colorScheme={"blue"}>
              <ArrowLeftIcon />
            </Button>
          </Box>
        </Link>
      )}
    </>
  );
};

export default PreviousButton;
