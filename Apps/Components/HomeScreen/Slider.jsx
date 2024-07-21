import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';


export default function Slider({sliderList}) {
    return (
        <View>
            <FlatList
                data={sliderList}
                renderItem={({item,index}) => (
                    <View>
                        <Text>{index}</Text>
                    </View>
                )}
            />
        </View>
    );
}
