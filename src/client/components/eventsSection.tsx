import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';

import { SECTION_MAX_WIDTH } from './constants';
import { PrimaryButton } from './primaryButton';

export function EventsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      spacing={8}
      px={{ base: 6, md: 32 }}
      my={16}
      align="start"
      width="full"
      maxW={SECTION_MAX_WIDTH}
    >
      <Heading size="2xl">Upcoming Events</Heading>
      <Text flex={1} color="gray.400">
        We host a variety of events throughout the year, including workshops,
        talks, and social events. Check out our calendar for more information.
      </Text>
      <PrimaryButton onClick={onOpen}>View Calendar</PrimaryButton>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="6xl">
        <ModalOverlay />
        <ModalContent bg="gray.900" height="calc(100% - 128px)">
          <ModalHeader>Events</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              title="SSI Events"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=dGd1YnM2ZXUxZDQzbmRyMDRqZ2lkcmZvY3ZqNzBpcTBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=anVnYmNnZjNkbDB2ZnRtNjlzNWVrYTI4NDgyNXI0dHNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=a2xnbDBpZ200Yjlpc2EwNjcxaDVxdGdqNzdkdTRiNW9AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=bW44b2RkY2puMzUwb3JjZmI3Nmt2dmx1YTc2NmxzN3JAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=dDltbG9pMG5jNmFydDJqczRnM2FjZDZxb3Rqa3U4aDBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Nm5lN2c1Y2hsdnNpZ2dkcTF0MmZqc2pqNHQ2YTNyMHFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZGFmOTRtZjR2MHM1NWZjYTB2N3Npcjgybmp1MGVwNWdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23AD1457&color=%23F4511E&color=%230B8043&color=%233F51B5&color=%238E24AA&color=%23EF6C00&color=%238E24AA"
              width="100%"
              height="100%"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
