import React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
  stylesExtra?: object;
};

const CustomText: React.FC<Props> = ({ children, stylesExtra }) => {
  return <Text style={[styles.text, stylesExtra]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "Montserrat_500Medium",
  },
});

export default CustomText;
