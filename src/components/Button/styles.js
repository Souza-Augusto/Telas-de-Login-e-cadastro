import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  Container: {
    width: width * 0.65,
    height: height / 16,
    backgroundColor: "#38A69D",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    marginVertical: 20,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default styles;
