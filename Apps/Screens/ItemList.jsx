import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useRoute} from "@react-navigation/native";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {app} from "../../firebaseConfig";
import LatestltemList from "../Components/HomeScreen/LatestltemList";

export default function ItemList() {
    const {params}=useRoute();
    const db = getFirestore(app);
    const [itemList, setItemList] = useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        /*console.log("Category:",params.category);*/
        params&&getItemListByCategory();
    },[params])

    const getItemListByCategory=async ()=>{
        setItemList([]);
        setLoading(true);
        const q=query(collection(db,'UserPost'),where('category','==',params.category));
        const snapshot = await getDocs(q);
        setLoading(false);
        snapshot.forEach((doc)=>{
            console.log(doc.data());
            setItemList(itemList=>[...itemList,doc.data()]);
            setLoading(false);
        });
    }

    return (
        <View className="p-2">
            {loading?
                <ActivityIndicator className="mt-20" size='large' color='#FFCA4B'/>
                :
            itemList?.length>0?
            <LatestltemList latestItemList={itemList}
                            heading={'Best Post'}
            />
                :<Text className="p-5 text-[20px] text-gray-500 justify-center text-center mt-24">No Post Found</Text>}
        </View>
    );
}
