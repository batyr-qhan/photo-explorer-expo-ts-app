import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Field from "../components/Field";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { description, url, author } = route.params;

  return (
    <ScrollView
      style={{ backgroundColor: "#20232a" }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={{ flex: 1, padding: 24 }}>
        <Field title="Description" text={description} />
        <Field title="Author" text={author} />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
  },
  imageContainer: {
    flex: 1,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
