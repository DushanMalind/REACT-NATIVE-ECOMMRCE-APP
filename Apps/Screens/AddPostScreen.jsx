import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button, TouchableOpacity, Image, ToastAndroid} from 'react-native';

import { getFirestore,getDocs,collection, addDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import {app} from "../../firebaseConfig";
import {Formik} from "formik";
import {Picker} from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import {useUser} from "@clerk/clerk-expo";



export default function AddPostScreen() {

    const [image, setImage] = useState(null);
    const db = getFirestore(app);
    const [categoryList,setCategoryList] = useState([]);
    const storage = getStorage();
    const {user}=useUser();

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

    const OnSubmitMethod=async (value)=>{
        /*value.image=image;*/
        // console.log("Values:",value);
        const resp=await fetch(image);
        const blob=await resp.blob();
        const storageRef = ref(storage, 'communityPost/'+Date.now()+".jpg");

        uploadBytes(storageRef, blob).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        }).then((resp)=>{
            getDownloadURL(storageRef).then(async (downloadUrl)=>{
                console.log("URL:",downloadUrl);
                value.image=downloadUrl;
                value.userName=user.fullName;
                value.userEmail=user.primaryEmailAddress.emailAddress;
                value.userImage=user.imageUrl;

                const docRef=await addDoc(collection(db,"UserPost"),value);
                if (docRef.id){
                    console.log("Post Added Successfully");
                    //ToastAndroid.show("Post Added Successfully",ToastAndroid.SHORT);
                }
            })
        });
    }

    return (
        <View className="p-10">
            <Text className="text-[27px] font-blod">Add Post</Text>
            <Text className="text-[16px] text-gray-500 mb-7">Start New Selling</Text>
            <Formik
                initialValues={{title:'',desc:'',category:'',address:'',price:'',image:'',userName:'',userEmail:'',userImage:''}}
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
