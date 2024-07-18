import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button, TouchableOpacity, Image, ToastAndroid} from 'react-native';

import { getFirestore,getDocs,collection } from "firebase/firestore";
import {app} from "../../firebaseConfig";
import {Formik} from "formik";
import {Picker} from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";



export default function AddPostScreen() {

    const [image, setImage] = useState(null);
    const db = getFirestore(app);
    const [categoryList,setCategoryList] = useState([]);

    useEffect(()=>{
        getCategoryList();
    },[]);

    const getCategoryList= async () => {
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db,'Category'));

        querySnapshot.forEach((doc)=>{
            // console.log(doc.id,doc.data());
            console.log("Docs:",doc.data());
            setCategoryList(categoryList=>[...categoryList,doc.data()]);
        })
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const OnSubmitMethod=(value)=>{
        value.image=image;
        console.log("Values:",value);
    }

    return (
        <View className="p-10">
            <Text className="text-[27px] font-blod">Add Post</Text>
            <Text className="text-[16px] text-gray-500 mb-7">Start New Selling</Text>
            <Formik
                initialValues={{title:'',desc:'',category:'',address:'',price:'',image:''}}
                onSubmit={values => OnSubmitMethod(values)}
                validate={(values)=>{
                    const errors={}
                    if (!values.title){
                        console.log("Title not Present");
                        ToastAndroid.show("Title is required",ToastAndroid.SHORT);
                        errors.name="Title is required";
                    }
                    return errors;
                }}
            >
                {({handleChange,handleBlur,handleSubmit,values,setFieldValue,errors})=>(
                   <View>
                       <TouchableOpacity onPress={pickImage}>
                           {image?
                               <Image source={{uri:image}}  style={{width:100,height:100,borderRadius:15}}/>
                           :<Image source={require('../../assets/images/placeholder.jpg')}
                                   style={{width:100,height:100,borderRadius:15}}/>}
                       </TouchableOpacity>
                       <TextInput
                           style={styles.input}
                           placeholder="Title"
                           value={values?.title}
                           onChangeText={handleChange('title')}
                       />

                       <TextInput
                           style={styles.input}
                           placeholder="Description"
                           value={values?.desc}
                           numberOfLines={4}
                           onChangeText={handleChange('desc')}
                       />

                       <TextInput
                           style={styles.input}
                           placeholder="Price"
                           value={values?.price}
                           keyboardType='number-pad'
                           onChangeText={handleChange('price')}
                       />

                       {/*List*/}
                       <View style={{borderRadius:10,borderWidth:1,marginTop:15}}>
                       <Picker
                           selectedValue={values?.category}
                           onValueChange={itemValue=>setFieldValue('category',itemValue)}
                           style={styles.input}
                       >
                           {categoryList&&categoryList.map((item,index)=>(
                               <Picker.Item key={index} label={item?.name} value={item?.name}/>
                           ))}
                       </Picker>
                       </View>

                       <TextInput
                           style={styles.input}
                           placeholder="Addess"
                           value={values?.address}
                           onChangeText={handleChange('address')}
                       />


                       <TouchableOpacity onPress={handleSubmit} className="p-4 bg-amber-400 rounded-full mt-6">
                           <Text className="text-center text-[16px] font-bold">Submit</Text>
                       </TouchableOpacity>
                       {/*<Button
                               className="mt-7"
                               title="submit"/>*/}

                   </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        padding:10,
        fontSize:17,
        borderRadius:10,
        paddingHorizontal:17,
        marginBottom:5,
        marginTop:10,
        textAlignVertical:'top',
        paddingTop:15


    }
});
