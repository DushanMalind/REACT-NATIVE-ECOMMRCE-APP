import React from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen";
import ExploreScreen from "../Screens/ExploreScreen";
import AddPostScreen from "../Screens/AddPostScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const Tab = createBottomTabNavigator();


export default function TabNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen}/>
            <Tab.Screen name="explore" component={ExploreScreen}/>
            <Tab.Screen name="addPost" component={AddPostScreen}/>
            <Tab.Screen name="profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
}
