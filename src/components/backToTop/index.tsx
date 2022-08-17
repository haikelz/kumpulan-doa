import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useScroll } from "src/hooks/useScroll";
import { motion } from "framer-motion";
import { backToTopAnimation } from "src/utils/animation";

const BackToTop = () => {
  const [scroll] = useScroll();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scroll > 50 && (
        <motion.div {...backToTopAnimation}>
          <Button colorScheme="twitter" onClick={handleClick}>
            <ArrowUpIcon fontSize="22px" />
          </Button>
        </motion.div>
      )}
    </>
  );
};

export default BackToTop;
