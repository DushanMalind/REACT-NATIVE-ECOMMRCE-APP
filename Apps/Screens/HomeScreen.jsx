import React from 'react';
import {Text, View} from 'react-native';
import Header from "../Components/HomeScreen/Header";

export default function HomeScreen(){
    return (
        <View className="py-10 px-6 bg-white flex-1">
            <Header/>
        </View>
    );
}

