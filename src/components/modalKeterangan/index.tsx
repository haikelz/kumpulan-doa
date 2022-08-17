import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { ModalKeterangan } from "src/interface";

const ModalKeterangan = ({ keterangan }: ModalKeterangan) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mt="2" onClick={onOpen}>
        Keterangan
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keterangan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{keterangan}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr="3" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalKeterangan;
