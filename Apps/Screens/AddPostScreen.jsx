import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

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
            <Formik
                initialValues={{title:'',desc:'',category:'',address:'',price:'',image:''}}
                onSubmit={values => console.log(values)}
            >
                {({handleChange,handleBlur,handleSubmit,values})=>(
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

                       <Picker
                           selectedValue={values?.category}
                           onValueChange={handleChange('category')}
                           style={styles.input}
                       >
                           {categoryList&&categoryList.map((item,index)=>(
                               <Picker.Item key={index} label={item?.name} value={item?.name}/>
                           ))}
                       </Picker>

                       <TextInput
                           style={styles.input}
                           placeholder="Addess"
                           value={values?.address}
                           onChangeText={handleChange('address')}
                       />

                       <Button onPress={handleSubmit}
                               className="mt-7"
                               title="submit"/>

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
