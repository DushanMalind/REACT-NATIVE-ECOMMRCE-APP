import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useUser} from "@clerk/clerk-expo";
import img from "../../assets/images/post.png";
import explore from "../../assets/images/explore.png";
import details from "../../assets/images/details.png";
import logout from "../../assets/images/logout.png";
export default function ProfileScreen() {

    const {user}=useUser();

    const menuList=[
        {
            id:1,
            name:'My Post',
            icon:img,
            path:'my-product'
        },
        {
            id:2,
            name:'Explore',
            icon:explore,
            path: 'explore'
        },
        {
            id:3,
            name:'Me Details',
            icon:details
        },
        {
            id:4,
            name:'LogOut',
            icon:logout
        }
    ]

    const onMenuPress=(item)=>{

    }

    return (
        <View className="p-5 py-8 bg-white flex-1">
            <View className="items-center mt-5">
            <Image source={{uri:user?.imageUrl}}
                     className="w-[100px] h-[100px] rounded-full"
            />
            <Text className="text-[24px] font-bold mt-3">{user?.fullName}</Text>
            <Text className="text-[18px] text-gray-500">{user?.primaryEmailAddress?.emailAddress}</Text>
            </View>

            <FlatList
                data={menuList}
                numColumns={3}
                style={{marginTop:20}}
                renderItem={({item, index}) => (
                     <TouchableOpacity className="flex-1 p-3 border-[1px] items-center m-4 rounded-lg border-amber-300
                     bg-amber-200 mx-2 mt-4"
                                       onPress={()=>onMenuPress(item)}
                     >
                         {item.icon&& <Image source={item?.icon}
                         className="w-[50px] h-[50px]"
                         />}
                         <Text className="text-[12px] mt-2 text-black">{item.name}</Text>
                     </TouchableOpacity>
                )}
            />

        </View>
    );
}
