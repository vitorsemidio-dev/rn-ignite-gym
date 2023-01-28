import { Loading } from "@components/Loading";
import { AuthContext } from "@contexts/AuthContext";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Routes } from "@routes/index";
import { THEME } from "@theme/index";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider
        value={{
          id: "1",
          name: "Jane Doe",
          email: "johndoe@email.com",
          avatar: "johndoe.png",
        }}
      >
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}
