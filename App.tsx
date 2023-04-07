import { StatusBar } from "expo-status-bar";
import "react-native-url-polyfill/auto";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DetailsScreen from "./screens/DetailsScreen";

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    id: string | number;
    name?: string;
    description: string;
    url: string;
    author?: string;
  };
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerBackTitle: "",
            headerStyle: {
              backgroundColor: "#7a7a7a",
            },
            headerShadowVisible: true,
          }}
        >
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitleStyle: {
                fontFamily: "Montserrat_500Medium",
              },
            }}
          />
          <RootStack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerTitleStyle: {
                fontFamily: "Montserrat_500Medium",
              },
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
// });
