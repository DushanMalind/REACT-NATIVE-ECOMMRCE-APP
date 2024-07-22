import React from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen";
import ExploreScreen from "../Screens/ExploreScreen";
import AddPostScreen from "../Screens/AddPostScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreeStackNav from "./HomeScreeStackNav";
import ExploreScreenStack from "./ExploreScreenStack";
import ProfileScreenStack from "./ProfileScreenStack";

const Tab = createBottomTabNavigator();


export default function TabNavigation(){
    return (
        <Tab.Navigator screenOptions={{headerShown:false,
            tabBarActiveTintColor:'#F59E0B',
        }}>
            <Tab.Screen name="home" component={HomeScreeStackNav}
               options={{
                   tabBarLabel:({color})=>(
                          <Text style={{color:color,fontSize:12,marginBottom:3}}>Home</Text>
                   ),tabBarIcon:({color,size})=>(
                       <AntDesign name="home" size={size} color={color} />
                   )
               }}
            />
            <Tab.Screen name="explore" component={ExploreScreenStack}
                        options={{
                            tabBarLabel:({color})=>(
                                <Text style={{color:color,fontSize:12,marginBottom:3}}>Explore</Text>
                            ),tabBarIcon:({color,size})=>(
                                <Feather name="search" size={size} color={color} />
                            )
                        }}
            />
            <Tab.Screen name="addPost" component={AddPostScreen}
                        options={{
                            tabBarLabel:({color})=>(
                                <Text style={{color:color,fontSize:12,marginBottom:3}}>Add Post</Text>
                            ),tabBarIcon:({color,size})=>(
                                <AntDesign name="camera" size={size} color={color} />
                            )
                        }}
            />
            <Tab.Screen name="profile" component={ProfileScreenStack}
                        options={{
                            tabBarLabel:({color})=>(
                                <Text style={{color:color,fontSize:12,marginBottom:3}}>Profile</Text>
                            ),tabBarIcon:({color,size})=>(
                                <Ionicons name="person" size={size} color={color} />
                            )
                        }}
            />
        </Tab.Navigator>
    );
}
/*
options={{tabBarLabel:({focused})=>(
    <Text className={`text-[12px] mb-1 font-bold ${focused ? 'text-amber-400' : 'text-gray-500'}`}>
        Home</Text>*/
