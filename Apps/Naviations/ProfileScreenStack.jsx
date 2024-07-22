import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import ProfileScreen from "../Screens/ProfileScreen";
import MyProduct from "../Screens/MyProduct";
import ProductDetail from "../Screens/ProductDetail";


const Stack = createStackNavigator();

export default function ProfileScreenStack() {
    return (
         <Stack.Navigator>
             <Stack.Screen name='prfile-tab' component={ProfileScreen}
                           options={{headerShown:false}}
             />
             <Stack.Screen name='my-product' component={MyProduct}
                           options={{
                               headerStyle:{
                                   backgroundColor:'#FFCA4B'
                               },
                               headerTintColor:'#fff',
                               headerTitle:"My Product"

                           }}
             />

             <Stack.Screen name='product-detail' component={ProductDetail}
                           options={{
                               headerStyle:{
                                   backgroundColor:'#FFCA4B'
                               },
                               headerTintColor:'#fff',
                               headerTitle:"Details"

                           }}
             />

         </Stack.Navigator>
    );
}
