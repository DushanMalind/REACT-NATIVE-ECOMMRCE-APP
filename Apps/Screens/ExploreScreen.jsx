import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {collection, getDocs, getFirestore, orderBy, query} from "firebase/firestore";
import {app} from "../../firebaseConfig";

export default function ExploreScreen() {
    const db = getFirestore(app);

    useEffect(()=>{
        getAllProducts();
    },[]);

    const getAllProducts=async ()=>{
        const q = query(collection(db, 'UserPost'),orderBy('createdAt','desc'));
        const snapshot =await getDocs(q);
        snapshot.forEach((doc)=>{
            console.log(doc.data());
        });
    }



    return (
        <View className="p-5 py-8">
            <Text className="text-[24px] font-bold">Explore Other</Text>
        </View>
    );
}
