import React, {useEffect, useState} from 'react';
import {Image, Linking, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetail({navigation}) {
    const {params}=useRoute();
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        console.log(params);
        params&&setProduct(params.product);
        shareButton();
    },[params,navigation])

    const shareButton=()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={()=>shareProduct()}
                >
                <Ionicons name="share-social-sharp" size={24} color="white"
                          style={{marginRight:10}}
                />
                </TouchableOpacity>
            ),
        });
    }


    const sendEmailMessage=()=>{
        //Linking.openURL(`mailto:${product.userEmail}?subject=Product Inquiry&body=Hello ${product.userName}, I am interested in your product ${product.title}. Please provide me more details.`);
        const subject="Product Inquiry "+product.title;
        const body="Hello "+product.userName+", I am interested in your product "+product.title+". Please provide me more details.";
        Linking.openURL(`mailto:${product.userEmail}?subject=${subject}&body=${body}`);
    }

    return (
        <ScrollView className="bg-white">
           <Image source={{uri:product.image}}
                    className="w-full h-[320px]"
           />
            <View className="p-3">
                <Text className="text-[24px] font-bold mt-2">{product?.title}</Text>
                <View className="items-baseline">
                <Text className="text-[15px] mt-1  text-center bg-amber-400  rounded-full px-2 p-1 w-[80px]">{product.category}</Text>
                </View>
                <Text className="text-[20px] font-bold mt-3">Description</Text>
                <Text className="text-[15px] text-gray-500">{product.desc}</Text>
                <Text className="text-[20px] font-bold bg-yellow">$ {product.price}</Text>
            </View>

            {/*
            User Info
            */}

            <View className="p-3 flex flex-row items-center gap-3 bg-amber-50 border-amber-300">
                <Image source={{uri:product.userImage}}
                       className="w-[30px] h-[30px] rounded-full"
                />
                <View>
                    <Text className="text-[18px] font-bold mt-2">{product.userName}</Text>
                    <Text className="text-[15px] text-gray-500">{product.userEmail}</Text>
                </View>
            </View>


            <TouchableOpacity className="z-40 bg-amber-400 rounded-full p-4 m-2"
                              onPress={()=>sendEmailMessage()}
            >
                <Text className="text-[18px] font-bold text-white text-center ">Send Message</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
