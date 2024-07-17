import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function LoginScreen() {
    return (
        <View>
            <Image source={require('../../assets/images/login.jpg')}
            className="w-full h-[400px] object-cover"
            />
            <View className="p-8">
                <Text className="text-[30px] font-bold">Home Market</Text>
                <Text className="text-[18px] text-gray-500 mt-6">You can
                Sell Items, Buy Items, Make a Wishlist and many more.
                </Text>
                <TouchableOpacity className="p-4 bg-amber-400 rounded-full mt-20">
                    <Text className="text-center text-[18px]">Get Stared</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
