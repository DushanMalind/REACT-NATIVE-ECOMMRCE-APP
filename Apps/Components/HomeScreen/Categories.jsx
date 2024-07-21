import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';

export default function Categories({categoryList}) {
    return (
        <View className="mt-5">
            <Text className="font-bold text-[20px]">Categories</Text>
            <FlatList
                data={categoryList}
                renderItem={({item, index}) => (
                    <View>
                        <Image source={{uri: item.icon}}
                               className="w-[40px] h-[40px]"
                        />
                    </View>
                )}
            />
        </View>
    );
}

