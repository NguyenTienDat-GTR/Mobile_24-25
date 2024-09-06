import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundImage:
          'linear-gradient(to bottom, #C7F4F6, #D1F4F6, #E5F4F5, #00CCF9',
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={'https://picsum.photos/200'}
          style={{ width: '5rem', height: '5rem' }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Pressable
          style={{
            backgroundColor: 'yellow',
            border: 'none',
            width: '4rem',
            textAlign: 'center',
          }}>
          LOGIN
        </Pressable>
        <Pressable
          style={{
            backgroundColor: 'yellow',
            border: 'none',
            width: '4rem',
            textAlign: 'center',
          }}>
          SIGN UP
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          fontFamily: 'Roboto',
          fontSize: '1rem',
          fontWeight: 'bold',
          justifyContent: 'flex-end',
        }}>
        <text style={{ marginBottom: 20 }}>HOW WE WORK?</text>
      </View>
    </View>
  );
};

export default YourApp;
