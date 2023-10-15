import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import List from './app/screens/List';
// import CalculatorScreen from './app/screens/Calculator';
import Details from './app/screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';
import UploadScreen from './app/screens/UploadScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { LogBox } from 'react-native';
import CalculatorScreen from './app/screens/Calculator';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator()
const InsideStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function InsideLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notification"
        component={List}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Photo"
        component={Details}
        options={{
          tabBarLabel: 'Photo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="image"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upload Text"
        component={UploadScreen}
        options={{
          tabBarLabel: 'Upload Text',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document"
              size={size}
              color={color}
            />
          ),
        }}
      />


      <Tab.Screen
        name="Calculator"
        component={UploadScreen}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'inside' : 'Login'}>
        {user ? (
          <Stack.Screen name="inside" component={InsideLayout} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
