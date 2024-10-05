import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
  FlatList,
  CheckBox,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState({});
  const navigation = useNavigation();
  const route = useRoute();

  const { email} = route.params;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp'
      );
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData(); // Gọi lại fetchData khi quay lại Home
    });

    return unsubscribe;
  }, [navigation]);

  // Kiểm tra tham số refresh
  useEffect(() => {
    if (route.params?.refresh) {
      fetchData(); // Gọi lại fetchData nếu có tham số refresh
    }
  }, [route.params?.refresh]);

  const handleCheckboxChange = (taskID) => {
    setSelectedTasks((prevSelected) => ({
      ...prevSelected,
      [taskID]: !prevSelected[taskID],
    }));
  };

  const navigationToLogin = () => {
    navigation.navigate('login');
  };

  const handleAddTask = () => {
    navigation.navigate('add', { data });
  };

  const handleEditTask = (taskID) => {
    const taskToEdit = data.find((item) => item.taskID === taskID); // Tìm task cần edit
    if (taskToEdit) {
      // Kiểm tra xem taskToEdit có tồn tại không
      navigation.navigate('edit', { task: taskToEdit, email });
    }
  };

  const handleDeleteTask = async (taskID) => {
    try {
      // Gửi yêu cầu DELETE đến API
      console.log('Deleting taskID:', taskID);
      await axios.delete(
        `https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp/${taskID}`
      );

      // Cập nhật lại danh sách tasks
      const updatedTasks = data.filter((task) => task.taskID !== taskID);
      setData(updatedTasks);

      alert('Task đã được xóa thành công!');
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Có lỗi xảy ra khi xóa task.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.btnBack} onPress={navigationToLogin}>
          <Text style={{ fontWeight: 'bold' }}>Back</Text>
        </Pressable>
        <View style={styles.info}>
          <Image
            style={{ width: '3rem', height: '3rem', borderRadius: '50%' }}
            source={{ uri: 'https://picsum.photos/201' }}
          />
          <Text>Hi {email}</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.txtSearch} placeholder="search...." />
      </View>
      <View style={styles.listTask}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.taskID}
          style={{ width: '90%' }}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <CheckBox
                value={!!selectedTasks[item.taskID]}
                style={{ margin: 'auto' }}
                onValueChange={() => handleCheckboxChange(item.taskID)}
              />
              <Text style={styles.taskContent}>{item.content}</Text>
              <View style={styles.iconContainer}>
                <Pressable onPress={() => handleEditTask(item.taskID)}>
                  <Icon
                    name="edit"
                    size={24}
                    color="#4CAF50"
                    style={styles.icon}
                  />
                </Pressable>
                <Pressable onPress={() => handleDeleteTask(item.taskID)}>
                  <Icon
                    name="delete"
                    size={24}
                    color="#f44336"
                    style={styles.icon}
                  />
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={{
            backgroundColor: '#00BDD6',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('add', { data, email })}>
          <Text
            style={{
              fontSize: '2rem',
              textAlign: 'center',
              color: '#fff',
            }}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
    borderBottomWidth: 1,
    borderBottomColor: '#9095A0',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: '0.5rem',
  },
  txtSearch: {
    borderWidth: 1,
    borderColor: '#9095A0',
    borderRadius: 5,
    width: '80%',
    height: '2.5rem',
    margin: '0 auto',
    paddingHorizontal: '0.5rem',
  },
  listTask: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: '0.5rem',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    gap: '1rem',
    width: '94%',
    paddingRight: 80,
  },
  taskContent: {
    flex: 1,
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  icon: {
    marginHorizontal: '0.5rem',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBack: {},
});
