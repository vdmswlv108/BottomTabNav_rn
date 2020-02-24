import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import Home from './src/pages/Home';
import MyPage from './src/pages/MyPage';
import Search from './src/pages/Search';

function Main() {
  return (
    <View>
      <Home />
      <MyPage />
      <Search />
    </View>
  )
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, }) => {
            let iconName;
            let type;
            if (route.name === 'Home') {
              type = focused
                ? 'Entypo'
                : 'AntDesign'
              color = focused
                ? 'orange'
                : 'grey'
              iconName = 'home'
              size = 24
            } else if (route.name === 'MyPage') {
              type = 'MaterialIcons'
              iconName = 'person-outline'
              color = focused
                ? 'orange'
                : 'grey'
              size = 24
            } else if (route.name === 'Search') {
              type = 'Feather'
              iconName = 'search'
              color = focused
                ? 'orange'
                : 'grey'
              size = 24
            }
            // You can return any component that you like here!
            return <Icon type={type} name={iconName} style={{ color: color, fontSize: size }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'grey',
          style: {
            backgroundColor: '#FFF',
          }
        }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='MyPage' component={MyPage} />
        <Tab.Screen name='Search' component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}