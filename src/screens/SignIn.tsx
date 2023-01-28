import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Center, Image, ScrollView, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type FormDataProps = {
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos."),
});

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignIn(data: FormDataProps) {
    console.log(data);
  }

  function handleSignUp() {
    navigation.navigate("signUp");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={10} pb={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
        </Center>

        <Center mt="24">
          <Text color="white" fontSize="sm" fontFamily="body" mb={3}>
            Ainda não tem acesso?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleSignUp}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
