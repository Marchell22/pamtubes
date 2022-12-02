import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text,TouchableOpacity, Image, View, ImageBackground, TextInput } from 'react-native';


export default function App({navigation}) {
  const img = require('../assets/latar.png')
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.backgroudcolour}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.button}>
              <AntDesign name="back" size={24} color="black" style={styles.button} />
            </View>
        </TouchableOpacity>
        <Image style={styles.picture} source={require('../assets/logo.png')} >
        </Image>
        <View style={styles.sign}>
          <Text style={styles.sign2}>No.HP atau Email :</Text>
          <TextInput style={styles.sign3}></TextInput>
          <Text style={styles.sign4}>Password :</Text>
          <TextInput style={styles.sign5}></TextInput>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("history")}>
          <View style={styles.login1}>
          <Text style = {styles.login2}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudcolour: {
    flex: 1,
    backgroundColor : 'rgba(148, 215, 244, 0.8)',
  },
  picture: {
    resizeMode: "contain",
    width: 400,
    height: 400,
    top: 50,
  },
  button: {
    top: 30,
    left : 15,
  },
  sign: {
    backgroundColor: "#CDD8E3",
    padding: 50,
    borderRadius: 10,
    width: "90%",
    left: 20,
    top : -80
  },
  sign2: {
    left: -35,
    top: -40
  },
  sign3: {
    backgroundColor :"#FFF",
    left: -35,
    top: -30,
    borderRadius: 100,
    width : 340,
  },
  sign4: {
    left: -35,
    top: -20
  },
  sign5: {
    backgroundColor :"#FFF",
    left: -35,
    top: -10,
    borderRadius: 100,
    width : 340,
  },
  login1: {
    borderRadius: 10,
    backgroundColor: "#CDD8E3",
    width: "30%",
    padding: 5,
    left: 150,
    top : -60,
  },
  login2: {
    fontWeight: "bold",
    left : 41
  }

});
