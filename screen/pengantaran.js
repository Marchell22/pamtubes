import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, Image, View, ImageBackground, TextInput, FlatList, ScrollView, SafeAreaView, Modal, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, {useState} from 'react';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};


const history = ({navigation}) => {
  const img = require('../assets/latar.png');
  const [visible, setVisible] = React.useState(false);
  return (
    <ImageBackground source={img} style={styles.container}>
        <View style={styles.backgroudcolour}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{alignItems : "flex-start", left : 20, top : 85 }}>
                        <AntDesign name="back" size={30} color="black" style={styles.button} />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 30, top: 50, left: 60, letterSpacing : 1 }}>Pengantaran</Text>
                <Image style={{width : 200, height : 200, left : 230, top : -70}} source={require('../assets/logo.png')}></Image>  
            </View>
            <View style={styles.flet}>
              <Text style={{ marginTop: 20, marginLeft: 20 }}>Alamat Anda :</Text>
              <TextInput style={styles.sign}></TextInput>
              <Text style={{ marginTop: 20, marginLeft: 20 }}>No.Handphone :</Text>
              <TextInput style={styles.sign1}></TextInput>
              <Text style={{ marginTop: 20, marginLeft: 20 }}>Nama Penerima :</Text>
              <TextInput style={styles.sign2}></TextInput>
              <Text style={{ marginTop: 20, marginLeft: 20 }}>Tanggal Pengantaran :</Text>
              <TextInput style={styles.sign3}></TextInput>
              <Text style={{ marginTop: 20, marginLeft: 20 }}>Bukti Pembayaran :</Text>
             <View style={styles.sign4}>
            <AntDesign style={styles.add} name="plus" size={24} color="black" />
            <Text style={{left : 100, letterSpacing : 1, fontWeight : "bold"}}>Add Image</Text>
          </View>
          <ModalPoup visible={visible}>
            <View style={{backgroundColor: "#FFF", top : 300, borderRadius : 20, width : "90%", left :20}}>
        <View style={{alignItems: 'center'}}>
         <MaterialIcons name="thumb-up" size={24} color="black" style={{top : 15}} />
        </View>
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          Permintaan sedang di Proses, Klik Ok untuk kembali ke menu
        </Text>
        <View style={{alignItems: 'center'}}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Text style ={{color : "#2596BE", top : - 10}}>OK</Text>
            </TouchableOpacity>
          </View>
            </View>
        </View>    
      </ModalPoup>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <View style={styles.kirim}>
                  <Text style = {{marginTop : 10, marginLeft : 28, letterSpacing: 0.5, fontWeight : "bold" }}>Kirim</Text>
                </View>
              </TouchableOpacity>
            </View>
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
  header :{
    backgroundColor: "#CDD8E3",
    borderRadius: 10,
    width: "100%",
    height: "20%",
    top : -20
  },
  flet: {
    width: "80%",
    height: "70%",
    borderRadius : 20,
    backgroundColor: "#CDD8E3",
    marginTop: 10,
    marginLeft: 38,
    borderWidth : 2
  },
  sign: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    left: 20,
    top: 10,
    borderWidth: 2
  },
   sign1: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    left: 20,
    top: 10,
    borderWidth: 2
  },
    sign2: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    left: 20,
    top: 10,
    borderWidth: 2
  },
    sign3: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    left: 20,
    top:10,
    borderWidth: 2
  },
    sign4: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "87%",
    height : "15%",
    left: 20,
    top: 10,
    borderWidth: 2
  },
  kirim: {
    width: "30%",
    height: "23%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 100,
    borderWidth : 2
  },
  add: {
    left: 70,
    top : 20
  }
});
export default history;