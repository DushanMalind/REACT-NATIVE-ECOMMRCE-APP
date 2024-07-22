import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ItemList from "../Screens/ItemList";

const Stack = createStackNavigator();

export default function HomeScreeStackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={HomeScreen}
                          options={{headerShown:false}}
            />
            <Stack.Screen name='item-list' component={ItemList}
                          options={({ route }) => ({ title: route.params.category ,
                              headerStyle:{
                                    backgroundColor:'#FFCA4B'
                                },
                                headerTintColor:'#fff'

                          })}
            />
        </Stack.Navigator>
    );
}
