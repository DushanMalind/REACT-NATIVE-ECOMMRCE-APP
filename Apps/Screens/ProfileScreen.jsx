import React from 'react';
import {Image, Text, View} from 'react-native';
import {useUser} from "@clerk/clerk-expo";

export default function ProfileScreen() {

    const {user}=useUser();

    return (
        <View className="p-5 py-8">
            <View className="items-center mt-5">
            <Image source={{uri:user?.imageUrl}}
                     className="w-[100px] h-[100px] rounded-full"
            />
            <Text className="text-[24px] font-bold mt-3">{user?.fullName}</Text>
            <Text className="text-[18px] text-gray-500">{user?.primaryEmailAddress?.emailAddress}</Text>
            </View>
        </View>
    );
}
