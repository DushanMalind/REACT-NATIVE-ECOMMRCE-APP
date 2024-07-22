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
        const q=query(collection(db,'UserPost'),where('category','==',params.category));
        const snapshot = await getDocs(q);
        snapshot.forEach((doc)=>{
            console.log(doc.data());
            setItemList(itemList=>[...itemList,doc.data()]);
        });
    }

    return (
        <View>
            <LatestltemList latestItemList={itemList}/>
        </View>
    );
}
