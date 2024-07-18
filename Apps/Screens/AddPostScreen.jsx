import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

import { getFirestore,getDocs,collection } from "firebase/firestore";
import {app} from "../../firebaseConfig";
import {Formik} from "formik";
import {Picker} from "@react-native-picker/picker";



export default function AddPostScreen() {

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

    return (
        <View className="p-10">
            <Text className="text-[27px] font-blod">Add Post</Text>
            <Text className="text-[16px] text-gray-500 mb-7">Start New Selling</Text>
            <Formik
                initialValues={{title:'',desc:'',category:'',address:'',price:'',image:''}}
                onSubmit={values => console.log(values)}
            >
                {({handleChange,handleBlur,handleSubmit,values,setFieldValue})=>(
                   <View>
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
                           numberOfLines={5}
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


                       <TouchableOpacity onPress={handleSubmit} className="p-4 bg-amber-400 rounded-full mt-10">
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
