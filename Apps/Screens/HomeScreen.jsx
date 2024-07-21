import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Header from "../Components/HomeScreen/Header";
import Slider from "../Components/HomeScreen/Slider";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "../../firebaseConfig";


export default function HomeScreen(){
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
            /*console.log(doc.id, " => ", doc.data());*/
            setSliderList(sliderList=>[...sliderList, doc.data()]);
        });
    }
    return (
        <View className="py-10 px-6 bg-white flex-1">
            <Header/>
            <Slider sliderList={sliderList}/>
        </View>
    );
}

