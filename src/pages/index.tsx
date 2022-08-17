import { LINK_LIST_DOA } from "src/utils/data";
import { memo, useState } from "react";
import { Flex, Grid } from "@chakra-ui/react";
import { useFetch } from "src/hooks/useFetch";
import Layout from "../components/layout";
import DoaCard from "../components/doaCard";
import Judul from "../components/judul";
import SearchDoa from "src/components/searchDoa";
import Loading from "src/components/loading";
import Error from "src/components/error";

const Home = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useFetch(LINK_LIST_DOA);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Layout title="Kumpulan Doa sehari-hari">
      <Flex flexDir="column" justify="center" alignItems="center" py="6">
        <Judul />
        <SearchDoa setSearch={setSearch} />
        <Grid
          mt="4"
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          }}
          templateRows="repeat(1, minmax(0, 1fr))"
          gap="6"
        >
          <DoaCard doa={data} search={search} />
        </Grid>
      </Flex>
    </Layout>
  );
};

export default memo(Home);
