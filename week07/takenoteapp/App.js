import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './pages/Home'
import AddTask from './pages/AddTask'
import EditTask from './pages/EditTask'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="add" component={AddTask} />
        <Stack.Screen name="edit" component={EditTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
