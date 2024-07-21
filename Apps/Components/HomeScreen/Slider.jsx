import React from 'react';
import {Text, View} from 'react-native';
import {app} from "../../../firebaseConfig";
import {getFirestore} from "firebase/firestore";

export default function Slider() {
    const db = getFirestore(app);
    const getSliders=()=>{

    }

    return (
        <View>
            <Text>Slider</Text>
        </View>
    );
}
