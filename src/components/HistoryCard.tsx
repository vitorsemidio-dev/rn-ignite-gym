import { Heading, HStack, Text, VStack } from "native-base";

export function HistoryCard() {
  return (
    <HStack alignItems="center" bg="gray.600" mb={3} px={5} py={4} rounded="md">
      <VStack flex={1} mr={5}>
        <Heading color="white" fontSize="md" textTransform="capitalize">
          Costas
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color="gray.300" fontSize="md">
        08:56
      </Text>
    </HStack>
  );
}
