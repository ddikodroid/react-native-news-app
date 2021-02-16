import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CategoryScreen, HomeScreen, SearchNewsScreen } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLOR } from '../styles/Color'
import { WIDTH } from '../styles/Dimensions'
import TabBarCustomButton from '../components/TabBarCustomButton'

const MainTab = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <MainTab.Navigator
        initialRouteName='Headline' tabBarOptions={{
          title: 'Headline News',
          showLabel: false,
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLOR.white,
            elevation: 0
          }
        }}
      >
        <MainTab.Screen
          name='Search' component={SearchNewsScreen} options={{
            tabBarLabel: 'Search News',
            tabBarIcon: ({ focused }) => (
              <Icon
                name='search'
                color={focused ? COLOR.white : COLOR.secondary}
                size={WIDTH * 0.08}
                resizeMode='contain'
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />
          }}
        />
        <MainTab.Screen
          name='Headline' component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <Icon
                name='home'
                color={focused ? COLOR.white : COLOR.secondary}
                size={WIDTH * 0.08}
                resizeMode='contain'
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />
          }}
        />
        <MainTab.Screen
          name='Category' component={CategoryScreen} options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({ focused }) => (
              <Icon
                name='list'
                color={focused ? COLOR.white : COLOR.secondary}
                size={WIDTH * 0.08}
                resizeMode='contain'
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />
          }}
        />
      </MainTab.Navigator>
    </NavigationContainer>
  )
}

export default MainTabNavigator
