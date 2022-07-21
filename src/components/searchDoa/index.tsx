import { Input } from "@chakra-ui/react";
import { Ievent, Isearch } from "src/interface";

const SearchDoa = ({ setSearch }: Isearch) => {
  const handleSearch = (event: Ievent) => {
    setSearch(event.target.value);
  };

  return (
    <Input
      mt={{ base: "14", md: 4 }}
      mb={"4"}
      type={"text"}
      placeholder={"Cari Doa...."}
      maxW={{ base: "full", md: "50%" }}
      onChange={handleSearch}
    />
  );
};

export default SearchDoa;
