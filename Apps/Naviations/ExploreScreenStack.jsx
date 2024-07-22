import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import ExploreScreen from "../Screens/ExploreScreen";
import ProductDetail from "../Screens/ProductDetail";

const Stack = createStackNavigator();

export default function ExploreScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='explore-tab' component={ExploreScreen}/>
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
