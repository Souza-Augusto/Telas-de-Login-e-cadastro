import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Container } from "../../../components";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <Container style={styles.Container}>
      <View style={styles.ContainerLogo}>
        <Animatable.Image
          animation={"flipInY"}
          style={{ width: "100%" }}
          source={require("../../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        delay={600}
        animation={"fadeInUp"}
        style={styles.ContainerForm}
      >
        <Text style={styles.Title}>
          Monitore, organize seus dados de qualquer lugar!
        </Text>
        <Text style={styles.Text}>Seja Bem vindo!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.Button}
        >
          <Text style={styles.ButtonTitle}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </Container>
  );
}
