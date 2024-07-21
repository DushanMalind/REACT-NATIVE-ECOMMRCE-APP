import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';


export default function Slider({sliderList}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef();

    useEffect(() => {
        if (sliderList.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % sliderList.length);
            }, 3000); // Change slide every 3 seconds

            return () => clearInterval(interval); // Clean up the interval on component unmount
        }
    }, [sliderList]);

    useEffect(() => {
        if (flatListRef.current && sliderList.length > 0) {
            flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
        }
    }, [currentIndex, sliderList]);

    if (sliderList.length === 0) {
        return <Text className="text-[16px] text-center">No items to display</Text>;
    }

    return (
        <View className="mt-5">
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index}) => (
                    <View>
                        <Image source={{uri:item?.image}}
                               className="w-[310px] h-[200px] object-contain mr-3 rounded-lg"
                        />
                    </View>
                )}
            />

        </View>
        /*<View className="mt-5">
            <FlatList
                ref={flatListRef}
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <View>
                        <Image source={{uri: item?.image}}
                               className="w-[330px] h-[200px] object-contain mr-3 rounded-lg"
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                onScrollToIndexFailed={() => {}}
            />
        </View>*/
    );
}
