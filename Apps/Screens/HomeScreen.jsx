import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Header from "../Components/HomeScreen/Header";
import Slider from "../Components/HomeScreen/Slider";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "../../firebaseConfig";
import Categories from "../Components/HomeScreen/Categories";
import LatestltemList from "../Components/HomeScreen/LatestltemList";


export default function HomeScreen(){
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);
    const [categoryList,setCategoryList] = useState([]);

    useEffect(()=>{
        getSliders();
        getCategoryList();
        getLatestItemsList();
    },[]);

    /*
    * Get all sliders from firebase
    * */

    const getSliders=async ()=>{
        setSliderList([]);
        const querySnapshot = await getDocs(collection(db, "Sliders"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            /*console.log(doc.id, " => ", doc.data());*/
            setSliderList(sliderList=>[...sliderList, doc.data()]);
        });
    }

    /*
    * Get all categories from firebase
    * */

    const getCategoryList= async () => {
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db,'Category'));

        querySnapshot.forEach((doc)=>{
            // console.log(doc.id,doc.data());
            console.log("Docs:",doc.data());
            setCategoryList(categoryList=>[...categoryList,doc.data()]);
        })
    }

    /*
    * Item List
    * */

    const getLatestItemsList=async ()=>{
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db,'UserPost'));

        querySnapshot.forEach((doc)=>{
            // console.log(doc.id,doc.data());
            console.log("Docs:",doc.data());
            setCategoryList(categoryList=>[...categoryList,doc.data()]);
        })
    }

    return (
        <View className="py-10 px-6 bg-white flex-1">
            <Header/>
            <Slider sliderList={sliderList}/>
            <Categories categoryList={categoryList}/>
            <LatestltemList/>
        </View>
    );
}

