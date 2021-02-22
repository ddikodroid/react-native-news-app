import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CategoryScreen2, HomeScreen2, SearchNewsScreen2 } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { TabBarCustomButton } from '../components'

const MainTab = createBottomTabNavigator()

const MainTabNavigator2 = () => {
  return (
    <NavigationContainer>
      <MainTab.Navigator
        initialRouteName='Headline' tabBarOptions={{
          title: 'Headline News',
          showLabel: false
        }}
      >
        <MainTab.Screen
          name='Search' component={SearchNewsScreen2} options={{
            tabBarLabel: 'Search News',
            tabBarIcon: ({ focused }) => (
              <Icon
                name='search'
                color={focused ? '#fafafa' : '#78909c'}
                size={35}
                resizeMode='contain'
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />
          }}
        />
        <MainTab.Screen
          name='Headline' component={HomeScreen2} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <Icon
                name='home'
                color={focused ? '#fafafa' : '#78909c'}
                size={35}
                resizeMode='contain'
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />
          }}
        />
        <MainTab.Screen
          name='Category' component={CategoryScreen2} options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({ focused }) => (
              <Icon
                name='list'
                color={focused ? '#fafafa' : '#78909c'}
                size={35}
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

export default MainTabNavigator2
