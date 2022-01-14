import React from 'react'
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/Home';
import PopularMoviesScreen from './screens/Popular';
import RecommendedMoviesScreen from './screens/Recommended';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedMovies: {
    screen: RecommendedMoviesScreen,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: {backgroundColor: "white"},
        labelStyle: {color: "black"},
        indicatorStyle: {backgroundColor: "black"}
      }
    }
  },
  PopularMovies: {
    screen: PopularMoviesScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: {backgroundColor: "white"},
        labelStyle: {color: "black"},
        indicatorStyle: {backgroundColor: "black"}
      }
    }
  }
});

const AppStackNavigator = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {headerShown: false}},
  AppTopNavigation: {
    screen: AppTopNavigation, 
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: "white",
      headerTitle: "Recommended Movies",
      headerStyle: {backgroundColor: "#D500F9"},
      headerTitleStyle: {color: "white", fontWeight: "bold", fontSize: RFValue(18)}
    }
  }
},
{initialRouteName: "Home"}
);

const AppContainer = createAppContainer(AppStackNavigator);