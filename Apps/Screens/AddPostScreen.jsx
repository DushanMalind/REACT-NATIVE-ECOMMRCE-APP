import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import { getFirestore,getDocs,collection } from "firebase/firestore";
import {app} from "../../firebaseConfig";



export default function AddPostScreen() {

    const db = getFirestore(app);
    const [categoryList,setCategoryList] = useState([]);

    useEffect(()=>{
        getCategoryList();
    },[]);

    const getCategoryList= async () => {
        const querySnapshot = await getDocs(collection(db,'Category'));

        querySnapshot.forEach((doc)=>{
            // console.log(doc.id,doc.data());
            console.log("Docs:",doc.data());
            setCategoryList(categoryList=>[...categoryList,doc.data()]);
        })
    }

    return (
        <View>
            <Text>AddPostScreen</Text>
        </View>
    );
}
