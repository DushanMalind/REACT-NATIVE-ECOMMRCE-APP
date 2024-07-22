import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from "@react-navigation/native";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {app} from "../../firebaseConfig";
import LatestltemList from "../Components/HomeScreen/LatestltemList";

export default function ItemList() {
    const {params}=useRoute();
    const db = getFirestore(app);
    const [itemList, setItemList] = useState([]);

    useEffect(()=>{
        /*console.log("Category:",params.category);*/
        params&&getItemListByCategory();
    },[params])

    const getItemListByCategory=async ()=>{
        setItemList([]);
        const q=query(collection(db,'UserPost'),where('category','==',params.category));
        const snapshot = await getDocs(q);
        snapshot.forEach((doc)=>{
            console.log(doc.data());
            setItemList(itemList=>[...itemList,doc.data()]);
        });
    }

    return (
        <View className="p-2">
            {itemList?.length>0?
            <LatestltemList latestItemList={itemList}
                            heading={'Best Post'}
            />
                :<Text className="p-5 text-[20px] text-gray-500 justify-center text-center mt-24">No Post Found</Text>}
        </View>
    );
}
