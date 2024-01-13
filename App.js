import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, requireNativeComponent } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/login.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
