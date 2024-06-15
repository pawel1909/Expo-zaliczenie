import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

// Import do stworzenia dolnych zakładek: (npm install @react-navigation/bottom-tabs)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import widoków
import CalendarView from './views/CalendarView';
import TestView from './views/TestView';
import WeatherView from './views/WeatherView';
import MyMapView from './views/MapView';
import ToDoList from './views/ToDoList';
import AddEventForm from './views/AddEventView';

// import Elementów nawigatora
import { NavigatorParams } from './interfaces/NavigatorParams';

import { eventsURL } from './data/ApiURL';

// Definiowanie Tab
const Tab = createBottomTabNavigator<NavigatorParams>();


export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator initialRouteName='CalendarView'>
        <Tab.Screen
          name='CalendarView'
          component={CalendarView}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name='calendar' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='AddEventForm'
          component={AddEventForm}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name='plus' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='TestView'
          component={TestView}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name='bug' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='WeatherView'
          component={WeatherView}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name='cloud' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='MyMapView'
          component={MyMapView}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name='map' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='ToDoList'
          component={ToDoList}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name='check' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
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
