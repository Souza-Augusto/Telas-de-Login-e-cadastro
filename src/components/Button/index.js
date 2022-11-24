import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Button({
  style,
  titleStyle,
  title,
  bottomless,
  ...props
}) {
  return (
    <>
      <TouchableOpacity {...props} style={[styles.Container, style && style]}>
        <Text style={[styles.Title, titleStyle && titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
