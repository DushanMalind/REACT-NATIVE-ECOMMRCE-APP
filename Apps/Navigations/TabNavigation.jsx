import React from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screen/HomeScreen";
import ExploreScreen from "../Screen/ExploreScreen";
import AddPostScreen from "../Screen/AddPostScreen";
import ProfileScreen from "../Screen/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="explore" component={ExploreScreen}></Tab.Screen>
            <Tab.Screen name="addpost" component={AddPostScreen}></Tab.Screen>
            <Tab.Screen name="profile" component={ProfileScreen}></Tab.Screen>
        </Tab.Navigator>
    );
}
