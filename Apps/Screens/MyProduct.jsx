import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {collection, getDocs, getFirestore, orderBy, query, where} from "firebase/firestore";
import {app} from "../../firebaseConfig";
import {useUser} from "@clerk/clerk-expo";
import LatestltemList from "../Components/HomeScreen/LatestltemList";
import {useNavigation} from "@react-navigation/native";

export default function MyProduct() {
    const db=getFirestore(app);
    const {user}=useUser();
    const [productList,setProductList]=useState([]);
    const navigation=useNavigation();

    useEffect(()=>{
        user&&getUserPost();
    },[user])

    useEffect(()=>{
        navigation.addListener('focus',(e)=>{
            console.log(e);
            getUserPost();
        })
    },[navigation])

    const getUserPost=async ()=>{
        setProductList([]);
        const q= query(collection(db,'UserPost'),where('userEmail','==',user?.primaryEmailAddress?.emailAddress));
        const snapshot=await getDocs(q);

        snapshot.forEach((doc)=>{
            console.log(doc.data());
            setProductList(productList=>[...productList,doc.data()]);
        });
    }
    return (
        <View>
            <LatestltemList latestItemList={productList}
                            heading={'My All Product'}

            />
        </View>
    );
}
