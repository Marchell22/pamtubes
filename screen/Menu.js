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



const home = ({ navigation }) => {
  const img = require("../assets/latar.png");
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.backgroudcolour}>
        <View style={styles.header}>
          <Text style={{ fontSize: 25, top: 40, left: 30 }}>
            Selamat Datang,
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 25, top: 40, left: 30 }}>
            Tomu Petra
          </Text>
           <Image style={{width : 200, height : 200, left : 220, top : -80}} source={require('../assets/logo.png')}></Image>  
        </View>
        <Text style={{color: "#ffff", fontWeight: "bold", fontSize: 20, top: 60, left: 125}}>
          LAYANAN KAMI
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Pemesanan")}>
           <Text style={styles.button}>Pemesanan</Text>
           <Image style={{top: 20, left : 80}} source={require("../assets/keranjang.png")}></Image>
        </TouchableOpacity>      
        <TouchableOpacity onPress={() => navigation.navigate("History")}>
           <Text style={styles.button}>History</Text>
           <Image style={{top: 25, left : 80}} source={require("../assets/history.png")}></Image>
        </TouchableOpacity>  
        <View style={styles.flet}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Octicons
              name="home"
              size={24}
              color="black"
              style={{ top: 20, left: 40 }}
            />

            <Text style={{ top: 20, left: 25, fontWeight: "bold" }}>
              Beranda
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <Ionicons
              name="md-chatbox-ellipses-outline"
              size={30}
              color="black"
              style={{ top: -30, left: 190 }}
            />
            <Text style={{ top: -30, left: 190, fontWeight: "bold" }}>
              Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Akun")}>
            <MaterialCommunityIcons
              name="account-outline"
              size={34}
              color="black"
              style={{ right: -330, top: -83 }}
            />
            <Text style={{ fontWeight: "bold", right: -330, top: -83 }}>
              Akun
            </Text>
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
  backgroudcolour: {
    flex: 1,
    backgroundColor: "rgba(148, 215, 244, 0.8)",
  },
  header: {
    backgroundColor: "#CDD8E3",
    borderRadius: 10,
    width: "100%",
    height: "15%",
  },
  // flet: {
  //   backgroundColor: "#CDD8E3",
  //   borderRadius: 10,
  //   marginTop: 40,
  //   width: "90%",
  //   marginLeft: 20,
  // },
  flet: {
    backgroundColor: "#CDD8E3",
    borderRadius: 20,
    height: "20%",
    marginTop: 300,
  },
  button: {
    marginLeft: 50,
    marginRight: 50,
    top: 80,
    justifyContent: "center",
    backgroundColor: "#CDD8E3",
    padding: 30,
    borderRadius: 20,
    paddingHorizontal: 98,
    fontSize: 15,
    fontWeight: "bold",
    color: "#00203FFF",
    borderWidth: 2,
    borderColor: "#00203FFF",
  },
});
export default home;