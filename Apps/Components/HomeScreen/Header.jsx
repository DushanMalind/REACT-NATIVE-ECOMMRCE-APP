import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {useUser} from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const {user} = useUser();
    return (
        <View>
            <View className="flex flex-row items-center gap-4">
                <Image source={{uri: user?.imageUrl}}
                       className="rounded-full w-10 h-10"
                />
                <View>
                    <Text className="text-[16px]">Welcome</Text>
                    <Text className="text-[20px] font-bold">{user?.fullName}</Text>
                </View>
            </View>

            {/*Search bar*/}
            <View className="p-2 px-5 mt-5 flex flex-row items-center  bg-amber-50 rounded-full border-[1px] border-amber-400">
                <Ionicons name="search" size={24} color="gray" />
                <TextInput placeholder='Search' className="ml-2 text-[18px]"
                           onChangeText={(value)=>console.log(value)}
                />
            </View>

        </View>
    );
}
