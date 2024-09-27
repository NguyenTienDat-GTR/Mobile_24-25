import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://6544382b5a0b4b04436c2915.mockapi.io/Product'
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [product]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imgReturn_header}
          source={require('./assets/return.png')}
        />
        <Text style={styles.txtChat}>Chat</Text>
        <Image
          style={styles.imgCart}
          source={require('./assets/cart-check.png')}
        />
      </View>
      <View style={styles.title_header}>
        <Text style={{ wrapText: 'wrap' }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!
        </Text>
      </View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item} >
            <Image style={styles.img} source={{ uri: item.image }} />
            <View style={styles.infoSp}>
              <Text
                style={styles.titleSp}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text style={styles.shop}>Shop {item.shop}</Text>
            </View>
            <Pressable style={styles.buttonChat}>
              <Text style={styles.buttonChatText}>CHAT</Text>
            </Pressable>
          </View>
        )}
        numColumns={1}
      />
      <View style={styles.bottom}>
        <Image style={styles.imgMenu} source={require('./assets/menu.png')} />
        <Image style={styles.imgHome} source={require('./assets/home.png')} />
        <Image
          style={styles.imgReturn_bottom}
          source={require('./assets/return_1.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    height: '3.1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:"auto"
  },
  txtChat: {
    fontFamily: 'Roboto',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    margin: '0.4rem',
  },
  title_header: {
    height: '3.1rem',
    fontSize: '1.5rem',
    borderBottomWidth: '0.05rem',
    borderBottomColor: '#C4C4C8',
    padding: '0.4rem',
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCart: {
     width: '1rem',
    height: '1rem',
    margin: '0.6rem',
    marginRight: '1.4rem',
  },
  bottom: {
    position: 'fixed',
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    height: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: '0',
    width: '100%',
  },
  imgReturn_header: {
    width: '1rem',
    height: '1rem',
    margin: '0.6rem',
  },
  imgReturn_bottom: {
    width: '1rem',
    height: '1rem',
    margin: '0.6rem',
  },
  imgHome: {
    width: '1rem',
    height: '1rem',
    margin: '0.6rem',
  },
  imgMenu: {
     width: '1rem',
    height: '1rem',
    margin: '0.6rem',
  },
  item: {
    flexDirection: 'row',
    padding: '0.6rem',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0.3rem',
  },
  titleSp: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginRight: '0.6rem',
    flex: 1,
  },
  infoSp: {
    flexDirection: 'column',
    flex: 1,
  },
  shop: {
    fontSize: '0.9rem',
  },
  img: {
    width: '4.4rem',
    height: '4.4rem',
    marginRight: '0.6rem',
  },
  buttonChat: {
    backgroundColor: 'red',
    width: '4rem',
    height: '2.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:"15%"
  },
  buttonChatText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight:'bold'
  },
});
