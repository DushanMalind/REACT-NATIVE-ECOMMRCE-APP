import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import PostItem from "./PostItem";

export default function LatestltemList({latestItemList,heading}) {
    return (
        <View className="mt-3">
            <Text className="font-bold text-[20px]">{heading}</Text>
            <FlatList
                data={latestItemList}
                numColumns={2}
                renderItem={({item, index}) => (
                    <PostItem item={item}/>
                )}
            />
        </View>
    );
}
