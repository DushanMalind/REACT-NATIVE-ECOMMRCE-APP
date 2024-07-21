import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

export default function Categories({categoryList}) {
    return (
        <View className="mt-5">
            <Text className="font-bold text-[20px]">Categories</Text>
            <FlatList
                data={categoryList}
                numColumns={4}
                renderItem={({item, index}) => (
                    <TouchableOpacity className="flex-1 items-center justify-center p-2 border-[1px] border-amber-300 m-1 h-[80px] rounded-lg bg-amber-100">
                        <Image source={{uri: item.icon}}
                               className="w-[40px] h-[40px]"
                        />
                        <Text className="text-[12px] mt-1">{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

