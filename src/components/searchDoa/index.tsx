import { Input } from "@chakra-ui/react";
import { Event, Search } from "src/interface";

type HandleSearch = (event: Event) => void;

const SearchDoa = ({ setSearch }: Search) => {
  const handleSearch: HandleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Input
      mt="4"
      mb="2"
      type="text"
      placeholder="Cari Doa...."
      maxW={{ base: "full", md: "50%" }}
      onChange={handleSearch}
    />
  );
};

export default SearchDoa;
