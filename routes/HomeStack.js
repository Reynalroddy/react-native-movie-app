
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
// import ReviewDetails from '../screens/reviewDetails'

// import Header from '../shared/header';
const Stack = createStackNavigator()

const HomeStack = ({navigation}) => {
  return (
   
      <Stack.Navigator  
    //   initialRouteName="Home"
     /*  screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
      }} */>
        <Stack.Screen name='Home' component={Home} /* options={{header: () => <Header navigation={navigation} title='GameZone'/>}, {headerStyle: {
          backgroundColor: "red",
          height: 60,
        },
        headerTintColor: "#444",} }*/ />
       {/*  <Stack.Screen
 name='ReviewDetails' component={ReviewDetails} options={{ title: 'Review Details' }} /> */}

      </Stack.Navigator>
   
  )
}

export default HomeStack;