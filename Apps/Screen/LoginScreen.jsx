import React from 'react';
import {Button, Image, Text, View} from 'react-native';

export default function LoginScreen() {
    return (
        <View>
            <Image source={require('../../assets/images/login.jpg')}
             className="w-full h-[400px] object-cover"/>
            <View className="p-8">
                <Text className="text-[30px] font-bold">Home Market</Text>
                <Text className="text-[18px] text-slate-600 mt-6">You Can Sell And By product.Make Real Money</Text>
                <View className="p-4 bg-amber-400 rounded-full mt-20">
                    <Text className="text-black text-center text-[18px]">Get Started</Text>
                    {/*<Button title={"hr"}></Button>*/}
                </View>
            </View>
        </View>
    );
}
