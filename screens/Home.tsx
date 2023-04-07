import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

import { useEffect, useState } from "react";

import "react-native-url-polyfill/auto";

import { createApi } from "unsplash-js";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { NavigationProps, RootStackParamList } from "../App";

import { API_KEY } from "@env";

const serverApi = createApi({
  accessKey: API_KEY,
});

const screenWidth = Dimensions.get("window").width - 16;
const numColumns = 2;
const tileSize = screenWidth / numColumns;

type PhotoProps = {
  id: number;
  // width: number;
  // height: number;
  urls: {
    full: string;
    large: string;
    regular: string;
    raw: string;
    small: string;
  };
  // color: string | null;
  user?: {
    username: string;
    name: string;
  };
  description: string;
};

const PhotoComp: React.FC<PhotoProps> = ({ id, urls, user, description }) => {
  const navigation = useNavigation<NavigationProps["navigation"]>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", {
          id: id,
          description: description,
          url: urls.full,
          author: user?.username,
        });
      }}
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        marginHorizontal: 8,
        height: tileSize,
        width: tileSize,
      }}
    >
      <Image
        style={{
          resizeMode: "cover",
          height: "100%",
          width: "100%",
          borderRadius: 8,
        }}
        source={{ uri: urls.full }}
      />
    </Pressable>
  );
};

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  const [data, setPhotosResponse] = useState<any>(null);

  useEffect(() => {
    serverApi.photos
      .list({})
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(result) => result.id}
        data={data?.response?.results}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "center" }}
        renderItem={({ item }) => (
          <PhotoComp
            id={item.id}
            urls={item.urls}
            user={item.user}
            description={item.alt_description}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingBottom: 16,
  },
});
