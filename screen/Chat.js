import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const history = ({ navigation }) => {
  const img = require("../assets/latar.png");
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.backgroudcolour}>
     <SafeAreaView style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{alignItems : "flex-start", left : 20, top : 85 }}>
                        <AntDesign name="back" size={30} color="black" style={styles.button} />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 30, top: 50, left: 80, letterSpacing : 1, }}>Admin</Text>
                <Image style={{width : 200, height : 200, left : 230, top : -70}} source={require('../assets/logo.png')}></Image>  
            </SafeAreaView>
        <View style={styles.flet}>
          
          <TextInput style={{ top: 5, left: 20 }}>ketik pesan...</TextInput>
          <TouchableOpacity>
            <Ionicons name="send" size={24} color="black" style = {{top: -20, left : 330 }} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",
    width: 180,
    padding: 6,
    margin: 25,
    top: -50,
    color: "black",
    paddingHorizontal: 15,
    fontSize: 13,
  },
  backgroudcolour: {
    backgroundColor: "rgba(148, 215, 244, 0.8)",
    height: "100%",
  },
  header: {
    backgroundColor: "#CDD8E3",
    borderRadius: 10,
    width: "100%",
    height: "20%",
  },

  flet: {
    backgroundColor: "#CDD8E3",
    borderRadius: 15,
    height: "5%",
    marginTop: 580,
    marginLeft: 10,
      marginRight: 10,
    width : "80%"
  },
});
export default history;
