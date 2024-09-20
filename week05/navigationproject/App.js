import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./Screen01"
import PickColorScreen from "./Screen02"

const Stack = createStackNavigator();

export default function App  () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="pickColor" component={PickColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
