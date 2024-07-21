import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {app} from "../../../firebaseConfig";
import {collection, getDocs, getFirestore} from "firebase/firestore";

export default function Slider() {
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);

    useEffect(()=>{
        getSliders();
    },[]);

    /*
    * Get all sliders from firebase
    * */

    const getSliders=async ()=>{
        const querySnapshot = await getDocs(collection(db, "Sliders"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }

    return (
        <View>
            <Text>Slider</Text>
        </View>
    );
}
