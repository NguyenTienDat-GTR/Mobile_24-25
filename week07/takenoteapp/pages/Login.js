import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  Text,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');


   const handleEmailSubmit = () => {
    // // Kiểm tra email có trong danh sách không
    // const userExists = data.find(user => user.email === email);
    // if (userExists) {
    //   navigation.navigate('Home',{user: userExists}); // Điều hướng tới Home nếu email hợp lệ
    // } else {
    //   alert('Email không hợp lệ.'); // Thông báo nếu email không có trong danh sách
    // }
     navigation.navigate('Home',{ email});
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: '12rem', height: '12rem' }}
          source={{ uri: 'https://picsum.photos/200' }}
        />
      </View>
      <View style={styles.title}>
        <Text style={{ color: '#8353E2', fontWeight: '700' }}>
          MANAGE YOUR TASK
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your email..." 
        value={email}
        onChangeText={setEmail}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btnStart}
          onPress={handleEmailSubmit}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>GET STARTED</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
  },
  title: {
    flex: 1,
    width: '100vw',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: 'auto',
  },
  input: {
    border: '1px solid #9095A0',
    borderRadius: 5,
    width: '80%',
    height: '3rem',
    margin: '0 auto',
    padding: '0.4rem',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: 'auto',
  },
  btnStart: {
    backgroundColor: '#00BDD6',
    height: '2.5rem',
    width: '7rem',
    textAlign: 'center',
    borderRadius: '0.5rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
