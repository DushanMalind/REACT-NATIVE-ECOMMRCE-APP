import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {collection, getDocs, getFirestore, orderBy, query, where} from "firebase/firestore";
import {app} from "../../firebaseConfig";
import {useUser} from "@clerk/clerk-expo";

export default function MyProduct() {
    const db=getFirestore(app);
    const {user}=useUser();

    useEffect(()=>{
        getUserPost();
    })

    const getUserPost=async ()=>{
        const q= query(collection(db,'UserPost'),where('userEmail','==',user?.primaryEmailAddress?.emailAddress));
        const snapshot=await getDocs(q);

        snapshot.forEach((doc)=>{
            console.log(doc.data());
        });
    }
    return (
        <View>
            <Text>MyProduct</Text>
        </View>
    );
}
