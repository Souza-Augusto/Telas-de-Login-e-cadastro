import React, { useContext, useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AuthContext from "../../../contexts/auth";
import { Container, Input, Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import styles from "./styles";
import { SignUp } from "../../../services/Api";
import { useForm, Controller } from "react-hook-form";
import input_validator from "../../../helpers/validators/input_validator";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Registration() {
  const { signIn, saveUser, setLoading } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    resolver: input_validator,
  });

  const navigation = useNavigation();

  async function signUp(data) {
    setLoading(true);
    let response = await SignUp(data.name, data.email, data.password);
    saveUser(response.user);
    signIn(response.token);
    console.log("Token", response.token);
    console.log("data", data);
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
          Faça seu cadastro
        </Animatable.Text>
        <Animatable.View animation={"fadeInUp"} style={styles.Container}>
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Nome de Usuário"
                autoCaptalize="none"
                afterIcon={
                  <Entypo name="user" size={20} style={styles.InputIcon} />
                }
              />
            )}
          />
          {errors.name && (
            <Text
              style={{ color: "#DC1637", alignSelf: "center" }}
              adjustsFontSizeToFit
            >
              {errors.name.message}
            </Text>
          )}
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Email"
                autoCaptalize="none"
                afterIcon={
                  <Entypo name="email" size={20} style={styles.InputIcon} />
                }
              />
            )}
          />
          {errors.email && (
            <Text
              style={{ color: "#DC1637", alignSelf: "center" }}
              adjustsFontSizeToFit
            >
              {errors.email.message}
            </Text>
          )}

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Senha"
                autoCaptalize="none"
                security
                afterIcon={
                  <Entypo name="lock" size={20} style={styles.InputIcon} />
                }
              />
            )}
          />
          {errors.password && (
            <Text
              style={{ color: "#DC1637", alignSelf: "center" }}
              adjustsFontSizeToFit
            >
              {errors.password.message}
            </Text>
          )}

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Confirmar Senha"
                autoCaptalize="none"
                security
                afterIcon={
                  <Entypo name="lock" size={20} style={styles.InputIcon} />
                }
              />
            )}
          />
          {errors.confirm_password && (
            <Text
              style={{ color: "#DC1637", alignSelf: "center" }}
              adjustsFontSizeToFit
            >
              {errors.confirm_password.message}
            </Text>
          )}

          <Button onPress={handleSubmit(signUp)} title="ACESSAR" />

          <Button
            onPress={() => navigation.navigate("Login")}
            style={styles.ForgotPasswordButton}
            titleStyle={styles.ForgotPassword}
            title="LOGIN"
          />
        </Animatable.View>
      </ScrollView>
    </Container>
  );
}
