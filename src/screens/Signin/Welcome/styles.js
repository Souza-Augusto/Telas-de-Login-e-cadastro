import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#38A69D",
  },
  ContainerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ContainerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    margintop: 28,
    marginBottom: 12,
  },
  Text: {
    color: "#a1a1a1",
  },
  Button: {
    position: "absolute",
    backgroundColor: "#38A69D",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;
