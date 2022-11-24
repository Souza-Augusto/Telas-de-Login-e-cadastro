import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Container } from "../../../components";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import AuthContext from "../../../contexts/auth";

export default function Home(props) {
  const { user, signOut } = useContext(AuthContext);

  const { width, height } = Dimensions.get("window");

  return (
    <Container style={{ backgroundColor: "#38A69D" }}>
      {/* {console.log("user", user)} */}

      <TouchableOpacity
        onPress={() => signOut()}
        style={{
          width: width / 3,
          height: width / 3,
          borderRadius: width / 3 / 2,
          backgroundColor: "#3CB371",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderWidth: 2,
          borderColor: "#fff",
          elevation: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          A
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        Steve Jobs
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          alignSelf: "center",
          marginTop: "20",
        }}
      >
        Email
      </Text>
    </Container>
  );
}
