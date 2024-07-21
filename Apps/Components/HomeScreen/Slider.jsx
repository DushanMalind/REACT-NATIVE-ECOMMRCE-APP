import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';


export default function Slider({sliderList}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % sliderList.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [sliderList.length]);

    return (
        <View className="mt-5">
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index}) => (
                    <View>
                        <Image source={{uri:item?.image}}
                               className="w-[330px] h-[200px] object-contain mr-3 rounded-lg"
                        />
                    </View>
                )}
            />
        </View>
    );
}
