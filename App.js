import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
} from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import Colors from "./App/Utils/Colors";

export default function App() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./assets/images/login.png")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
          <Text >
              Let's Find Professional Cleaning and Repair Services
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor:Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor:Colors.PRIMARY,
    height: "70%",
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20
  },
})
