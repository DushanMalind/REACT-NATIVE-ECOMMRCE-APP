import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

export default function LatestltemList({latestItemList}) {
    return (
        <View className="mt-3">
            <Text className="font-bold text-[20px]">Best Items</Text>
            <FlatList
                data={latestItemList}
                numColumns={2}
                renderItem={({item, index}) => (
                    <View className="flex-1 m-2 p-2 rounded-lg border-[1px] border-slate-200">
                        <Image source={{uri:item.image}}
                               className="w-full h-[140px] rounded-lg"
                        />
                        <View>
                            <Text className="text-[15px] font-bold mt-2">{item.title}</Text>
                            {/*<Text className="text-[12px] text-gray-500">{item.desc}</Text>*/}
                            <Text className="text-[18px] font-bold mt-2 bg-yellow">$ {item.price}</Text>
                            <TouchableOpacity className="bg-amber-400 p-2 rounded-md mt-2">
                                <Text className="text-center text-white">Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
