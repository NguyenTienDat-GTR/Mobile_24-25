import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AddTask() {
  const navigation = useNavigation();
  const route = useRoute();
  const [taskContent, setTaskContent] = useState('');
  const [tasks, setTasks] = useState([]); // State để lưu trữ danh sách task hiện tại

  const { data, email } = route.params;

  const handleBack = () => {
    navigation.navigate('Home', { email });
  };

  const handleFinish = async () => {
    try {
      // Tìm ID lớn nhất trong danh sách hiện có
      const maxId = Math.max(...tasks.map((task) => task.taskID));
      const newTaskID = maxId + 1;

      if (taskContent === '') {
        alert('Content is require!');
        return;
      }

      // Tạo đối tượng task mới
      const newTask = {
        taskID: newTaskID,
        content: taskContent,
      };

      // Gửi yêu cầu POST tới API để thêm task mới
      const response = await axios.post(
        `https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp/`,
        newTask
      );

      // Cập nhật danh sách task của user
      const updatedTasks = [...tasks, response.data];

      // Xóa nội dung input sau khi thêm task thành công
      setTaskContent('');

      // Quay trở lại trang Home sau khi thêm task thành công
      navigation.navigate('Home', { task: updatedTasks });
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Có lỗi xảy ra khi thêm task.');
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        'https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp'
      ); // Lấy danh sách task

      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      alert('Có lỗi xảy ra khi lấy danh sách task.');
    }
  };

  useEffect(() => {
    fetchTasks(); // Lấy danh sách task khi component được mount
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.btnBack} onPress={handleBack}>
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
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          ADD YOUR TASK
        </Text>
      </View>
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.txtAddTask}
          placeholder="input your task....."
          value={taskContent}
          onChangeText={setTaskContent}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btnFinish} onPress={handleFinish}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>FINISH</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: '10rem', height: '10rem' }}
          source={{ uri: 'https://picsum.photos/200' }}
        />
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
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTaskContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: '0.5rem',
  },
  txtAddTask: {
    borderWidth: 1,
    borderColor: '#9095A0',
    borderRadius: 5,
    width: '80%',
    height: '2.5rem',
    margin: '0 auto',
    paddingHorizontal: '0.5rem',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100vw',
    height: 'auto',
  },
  btnFinish: {
    backgroundColor: '#00BDD6',
    height: '2.5rem',
    width: '7rem',
    textAlign: 'center',
    borderRadius: '0.5rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
  },
});
