import React, { useContext, useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AuthContext from "../../../contexts/auth";
import { Container, Input, Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import styles from "./styles";
import * as Api from "../../../services/Api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, signIn, saveUser, setLoading } = useContext(AuthContext);

  const navigation = useNavigation();

  async function login() {
    setLoading(true);
    const response = await Api.SignIn();
    if (email === response.user.email && password === response.user.password) {
      saveUser(response.user);
      signIn(response.token);
      setLoading(false);
      return;
    }
    alert("Esse usuário não está cadastrado, por favor efetue seu cadastro");
    setLoading(false);
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <Animatable.Text
          delay={600}
          animation={"fadeInLeft"}
          style={styles.Title}
        >
          Seja bem vindo!
        </Animatable.Text>
        <Animatable.View animation={"fadeInUp"} style={styles.Container}>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Usuário ou Email"
            autoCaptalize="none"
            afterIcon={
              <Entypo name="user" size={20} style={styles.InputIcon} />
            }
          />

          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            autoCaptalize="none"
            security
            afterIcon={
              <Entypo name="lock" size={20} style={styles.InputIcon} />
            }
          />

          <Button onPress={login} title="ACESSAR" />
          <Button
            style={styles.ForgotPasswordButton}
            titleStyle={styles.ForgotPassword}
            title="Esqueceu sua senha?"
          />
          <Button
            onPress={() => navigation.navigate("Registration")}
            style={styles.ForgotPasswordButton}
            titleStyle={styles.ForgotPassword}
            title="Não possui conta? Cadastre-se"
          />
        </Animatable.View>
      </ScrollView>
    </Container>
  );
}
