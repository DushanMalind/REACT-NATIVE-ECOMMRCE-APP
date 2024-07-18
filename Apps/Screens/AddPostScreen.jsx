import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import { getFirestore,getDocs,collection } from "firebase/firestore";
import {app} from "../../firebaseConfig";



export default function AddPostScreen() {

    const db = getFirestore(app);

    useEffect(()=>{
        getCategoryList();
    },[]);

    const getCategoryList= async () => {
        const querySnapshot = await getDocs(collection(db,'Category'));

        querySnapshot.forEach((doc)=>{
            // console.log(doc.id,doc.data());
            console.log("Docs:",doc.data());
        })
    }

    return (
        <View>
            <Text>AddPostScreen</Text>
        </View>
    );
}
