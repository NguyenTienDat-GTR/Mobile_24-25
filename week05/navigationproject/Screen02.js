import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const PickColorScreen = () => {
  const [currentColor, setCurrentColor] = useState('blue');

  const navigation = useNavigation();

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const colorInfoText = {
    blue: 'xanh',
    red: 'đỏ',
    black: 'đen',
    silver: 'bạc',
  };

  const colorImage = {
    blue: require('./assets/vs_blue.png'),
    red: require('./assets/vs_red.png'),
    black: require('./assets/vs_black.png'),
    silver: require('./assets/vs_silver.png'),
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image style={styles.imgPhone} source={colorImage[currentColor]} />
        <View style={styles.textInfo}>
          <Text style={styles.txtPhoneName}>
            Điện Thoại Vsmart Joy 3 <br />
            Hàng chính hãng
          </Text>
          <View style={styles.colorInfo}>
            <Text style={styles.colorInfoText}>
              Màu:
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'roboto',
                  fontSize: '0.9rem',
                  margin: '0.4rem',
                }}>
                {colorInfoText[currentColor]}
              </Text>
            </Text>
            <Text style={styles.colorInfoText}>
              Cung cấp bởi <b>Tiki Tradding</b>
            </Text>
            <Text style={styles.colorInfoText}>
              <b>1.790.000 đ</b>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.colorContainer}>
        <Text style={styles.txtPickColor}>Chọn một màu bên dưới:</Text>
        <View style={styles.color}>
          <Pressable
            style={styles.color1}
            onPress={() => handleColorChange('silver')}
          />
          <Pressable
            style={styles.color2}
            onPress={() => handleColorChange('red')}
          />
          <Pressable
            style={styles.color3}
            onPress={() => handleColorChange('black')}
          />
          <Pressable
            style={styles.color4}
            onPress={() => handleColorChange('blue')}
          />
        </View>
        <Pressable
          style={styles.buttonComplete}
          onPress={() => {
            navigation.navigate('main', { selectedColor: currentColor });
          }}>
          <Text style={styles.txtComplete}>XONG</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '28%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imgPhone: {
    width: '8.75rem',
    height: '10rem',
    margin: '0.4rem',
  },
  txtPhoneName: {
    fontFamily: 'roboto',
    fontSize: '0.9rem',
    margin: '0.4rem',
  },
  colorInfo: {
    margin: '0.4rem',
  },
  colorInfoText: {
    fontFamily: 'roboto',
    fontSize: '0.9rem',
    margin: '0.4rem',
  },
  colorContainer: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: '72%',
  },
  txtPickColor: {
    fontFamily: 'roboto',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '0.4rem',
  },
  color: {
    flex: 4,
    gap: '0.6rem',
    alignItems: 'center',
    marginTop: '0.6rem',
  },
  color1: {
    backgroundColor: '#E0FFFF',
    width: '5rem',
    height: '5rem',
  },
  color2: {
    backgroundColor: '#F30D0D',
    width: '5rem',
    height: '5rem',
  },
  color3: {
    backgroundColor: '#000000',
    width: '5rem',
    height: '5rem',
  },
  color4: {
    backgroundColor: '#234896',
    width: '5rem',
    height: '5rem',
  },
  buttonComplete: {
    width: '90%',
    height: "3rem",
    backgroundColor: '#1952E294',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CA1536',
    marginTop: "0.8rem",
    borderRadius: "0.5rem",
    alignSelf: 'center',
    marginVertical: "0.6rem",
  },
  txtComplete: {
    fontFamily: 'Roboto',
    fontSize: "1.8rem",
    color: 'white',
  },
});

export default PickColorScreen;
