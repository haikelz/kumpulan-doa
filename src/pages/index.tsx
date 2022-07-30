import { memo, useState } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import { Idoa } from "src/interface";
import axios, { AxiosResponse } from "axios";
import Layout from "../components/layout";
import DoaCard from "../components/doaCard";
import Judul from "../components/judul";
import SearchDoa from "src/components/searchDoa";

export const getStaticProps = async () => {
  try {
    const response: AxiosResponse = await axios({
      method: "get",
      url: "https://tanyadoa-api.herokuapp.com/all",
    });

    return {
      props: {
        doa: response.data.data,
      },
    };
  } catch (err) {
    console.error(err);
  }
};

const Home = ({ doa }: Idoa) => {
  const [search, setSearch] = useState("");

  return (
    <Layout title="Kumpulan Doa sehari-hari">
      <Flex
        flexDir={"column"}
        justify={"center"}
        alignItems={"center"}
        py={"6"}
      >
        <Judul />
        <SearchDoa setSearch={setSearch} />
        <Grid
          mt={"4"}
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          }}
          templateRows={"repeat(1, minmax(0, 1fr))"}
          gap={"6"}
        >
          <DoaCard doa={doa} search={search} />
        </Grid>
      </Flex>
    </Layout>
  );
};

export default memo(Home);
