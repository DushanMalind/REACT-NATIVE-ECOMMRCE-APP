import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {collection, getDocs, getFirestore, orderBy, query} from "firebase/firestore";
import {app} from "../../firebaseConfig";
import LatestltemList from "../Components/HomeScreen/LatestltemList";

export default function ExploreScreen() {
    const db = getFirestore(app);
    const [productList,setProductList]=useState([]);

    useEffect(()=>{
        getAllProducts();
    },[]);

    const getAllProducts=async ()=>{
        setProductList([]);
        const q = query(collection(db, 'UserPost'),orderBy('createdAt','desc'));
        const snapshot =await getDocs(q);
        snapshot.forEach((doc)=>{
            /*console.log(doc.data());*/
            setProductList(productList=>[...productList,doc.data()]);
        });
    }



    return (
        <ScrollView className="p-5 py-8">
            <Text className="text-[24px] font-bold">Explore Other</Text>
            <LatestltemList latestItemList={productList}/>
        </ScrollView>
    );
}
