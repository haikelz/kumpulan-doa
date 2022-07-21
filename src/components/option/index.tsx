import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  useColorMode,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  MoonIcon,
  RepeatClockIcon,
  SunIcon,
} from "@chakra-ui/icons";
import Link from "next/link";

const Option = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode: boolean = colorMode === "dark";
  const bg: string | string = useColorModeValue("gray.200", "gray.700");

  return (
    <Box right={"0"} top={"0"} zIndex={"10"}>
      <Menu>
        <MenuButton
          bg={bg}
          _hover={{ bg: bg }}
          _active={{ bg: bg }}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Menu
        </MenuButton>
        <MenuList>
          <Link href="/" passHref>
            <MenuItem>
              <Flex justify={"center"} alignItems={"center"} gap={"3"}>
                <RepeatClockIcon />
                <Text>Home</Text>
              </Flex>
            </MenuItem>
          </Link>
          <MenuItem onClick={toggleColorMode}>
            {isDarkMode ? (
              <Flex justify={"center"} alignItems={"center"} gap={"3"}>
                <SunIcon />
                <Text>Light Mode</Text>
              </Flex>
            ) : (
              <Flex justify={"center"} alignItems={"center"} gap={"3"}>
                <MoonIcon />
                <Text>Dark Mode</Text>
              </Flex>
            )}
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Option;
