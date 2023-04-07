import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomText from "./CustomText";

type Props = {
  title: string;
  text?: string;
};

const Field: React.FC<Props> = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <CustomText
        stylesExtra={{
          marginBottom: 8,
        }}
      >
        {title}
      </CustomText>
      <View style={styles.textField}>
        <CustomText>{text}</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  textField: {
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: "grey",
    borderRadius: 8,
  },
});

export default Field;
