import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ScrollContainer: {
    flex: 1,
    backgroundColor: "#38A69D",
  },
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5,
  },
  Title: {
    color: "#ffff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: "15%",
    marginBottom: "10%",
    paddingStart: "5%",
  },
  InputIcon: {
    marginRight: -20,
  },
  ForgotPasswordButton: {
    backgroundColor: "transparent",
    marginVertical: 0,
  },
  ForgotPassword: {
    color: "#a1a1a1",
    fontWeight: "normal",
  },
});

export default styles;
