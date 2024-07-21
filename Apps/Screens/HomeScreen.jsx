import React from 'react';
import {Text, View} from 'react-native';
import Header from "../Components/HomeScreen/Header";
import Slider from "../Components/HomeScreen/Slider";

export default function HomeScreen(){
    return (
        <View className="py-10 px-6 bg-white flex-1">
            <Header/>
            <Slider/>
        </View>
    );
}

