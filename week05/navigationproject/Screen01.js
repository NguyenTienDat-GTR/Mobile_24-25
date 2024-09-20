import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
const MainScreen = ({ navigation }) => {
  const navigationPickColor = useNavigation();

  const navigationToPickColor = () => {
    navigationPickColor.navigate('pickColor');
  };

  //lấy dữ liệu color từ pickColor để thay đổi màu ảnh điện thoại
  const route = useRoute();
  const [selectedColor, setSelectedColor] = useState('blue');

  useEffect(() => {
    if (route.params) {
      const { selectedColor } = route.params;
      setSelectedColor(selectedColor);
    }
  }, [route.params]);
  const colorImage = {
    blue: require('./assets/vs_blue.png'),
    red: require('./assets/vs_red.png'),
    black: require('./assets/vs_black.png'),
    silver: require('./assets/vs_silver.png'),
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imgPhone} source={colorImage[selectedColor]} />
      <View>
        <Text style={styles.textNamePhone}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.containerInfo}>
          <View style={styles.groupStar}>
            <Image style={styles.star} source={require('./assets/star.png')} />
            <Image style={styles.star} source={require('./assets/star.png')} />
            <Image style={styles.star} source={require('./assets/star.png')} />
            <Image style={styles.star} source={require('./assets/star.png')} />
            <Image style={styles.star} source={require('./assets/star.png')} />
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
      </View>
      <View style={styles.containerPrice}>
        <Text>1.790.000 đ</Text>
        <Text style={styles.txtOriginalPrice}>1.790.000 đ</Text>
      </View>
      <View style={styles.containerSlogan}>
        <Text style={styles.txtSlogan}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
          style={styles.imgDetail}
          source={require('./assets/Group_1.png')}
        />
      </View>
      <Pressable style={styles.buttonPickColor} onPress={navigationToPickColor}>
        <Text style={styles.txtChooseColor}>4 MÀU-CHỌN MÀU</Text>
      </Pressable>
      <Pressable style={styles.buttonBuy}>
        <Text style={styles.txtBuy}>CHỌN MUA</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
  },
  imgPhone: {
    width: '80%',
    height: '60%',
  },
  containerInfo: {
    marginTop: '0.7rem',
    flexDirection: 'row',
  },
  textNamePhone: {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  groupStar: {
    flex: 1,
    flexDirection: 'row',
  },
  star: {
    width: '1.4rem',
    height: '1.5rem',
  },
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Roboto',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    gap:'0.5rem'
  },
  txtOriginalPrice: {
    opacity: 0.4,
    textDecorationLine: 'line-through',
  },
  containerSlogan: {
    marginTop: '0.6rem',
    flexDirection: 'row',
  },
  txtSlogan: {
    fontFamily: 'Roboto',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: 'red',
  },
  imgDetail: {
    width: '1.2rem',
    height: '1.2rem',
    left: '0.6rem',
    top: '0.06rem',
  },
  buttonPickColor: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    marginTop: '0.6rem',
    borderRadius: '1rem',
  },
  txtChooseColor: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    color: 'Black',
  },
  buttonBuy: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE0A0A',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #CA1536',
    marginTop: '0.6rem',
    borderRadius: '0.4rem',
  },
  txtBuy: {
    fontFamily: 'Roboto',
    fontSize: '1.9rem',
    color: 'white',
  },
});

export default MainScreen;
