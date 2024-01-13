import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, requireNativeComponent } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import Colors from "./App/Utils/Colors";

export default function App() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./assets/images/login.png')} 
          style={styles.loginImage}
      />
      <View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius: 15
    },
    subcontainer:{
        width:'100%',
        
    }
})

