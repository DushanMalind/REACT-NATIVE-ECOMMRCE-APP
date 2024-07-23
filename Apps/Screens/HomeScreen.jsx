import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from "../Components/HomeScreen/Header";
import Slider from "../Components/HomeScreen/Slider";
import {collection, getDocs, getFirestore, orderBy} from "firebase/firestore";
import {app} from "../../firebaseConfig";
import Categories from "../Components/HomeScreen/Categories";
import LatestltemList from "../Components/HomeScreen/LatestltemList";
import {useNavigation} from "@react-navigation/native";


export default function HomeScreen(){
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);
    const [categoryList,setCategoryList] = useState([]);
    const [latestItemList,setLatestItemList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigation=useNavigation();

    useEffect(()=>{
        getSliders();
        getCategoryList();
        getLatestItemsList();
    },[]);

    /*useEffect(()=>{
        navigation.addListener('focus',(e)=>{
            getLatestItemsList();
        })
    },[]);*/

    /*Post Add new refresh*/

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
        setLatestItemList([]);
        const querySnapshot = await getDocs(collection(db,'UserPost'),orderBy('createdAt','desc'));

        querySnapshot.forEach((doc)=>{
            // console.log(doc.id,doc.data());
            console.log("Docs:",doc.data());
            setLatestItemList(latestItemList=>[...latestItemList,doc.data()]);
        })
    }

    /*
   * Filtered lists based on search text
   */

    const handleSearch = (value) => {
        setSearchText(value);
    };

    const filteredSliders = sliderList.filter(slider =>
        slider.title && slider.title.toLowerCase().includes(searchText.toLowerCase())
    );
    const filteredCategories = categoryList.filter(category =>
        category.name && category.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const filteredLatestItems = latestItemList.filter(item =>
        item.title && item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <ScrollView className="py-10 px-6 bg-white flex-1">
            <Header  onSearch={handleSearch}/>
            <Slider sliderList={sliderList}/>
            <Categories categoryList={categoryList}/>
           {/* <LatestltemList latestItemList={latestItemList} heading={'Best Items'}/>*/}
            <LatestltemList latestItemList={filteredLatestItems} heading={'Best Items'}/>
        </ScrollView>
    );
}

