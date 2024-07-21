import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function PostItem({item}) {
    return (
        <TouchableOpacity className="flex-1 m-2 p-2 rounded-lg border-[1px] border-slate-200">
            <Image source={{uri:item.image}}
                   className="w-full h-[140px] rounded-lg"
            />
            <View>
                <Text className="text-[15px] font-bold mt-2">{item.title}</Text>
                {/*<Text className="text-[12px] text-gray-500">{item.desc}</Text>*/}
                <Text className="text-[18px] font-bold bg-yellow">$ {item.price}</Text>
                <Text className="text-[10px] mt-1 text-amber-400 text-center bg-amber-100 p-[2px] rounded-full px-1 w-[70px]">{item.category}</Text>
            </View>
        </TouchableOpacity>
    );
}
