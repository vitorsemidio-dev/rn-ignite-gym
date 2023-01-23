import { Input as InputNativeBase, IInputProps } from "native-base";

type InputProps = IInputProps;

export function Input({ ...rest }: InputProps) {
  return (
    <InputNativeBase
      bg="gray.700"
      h={14}
      px={4}
      color="white"
      borderWidth={1}
      borderColor="gray.700"
      fontSize="md"
      fontFamily="body"
      mb={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
}
