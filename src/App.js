import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./routes/index";
import { AuthProvider } from "./contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={"#38A69D"} barStyle={"light-content"} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
