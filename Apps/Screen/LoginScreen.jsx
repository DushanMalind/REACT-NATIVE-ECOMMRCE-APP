import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import * as WebBrowser from "expo-web-browser";
import {useOAuth} from "@clerk/clerk-expo";
import {useWarmUpBrowser} from "../../hooks/warmUpBrowser";
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                 setActive({session: createdSessionId});
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <View>
            <Image source={require('../../assets/images/login.jpg')}
             className="w-full h-[400px] object-cover"/>
            <View className="p-8 bg-white mt-[-20px] rounded-t-3xl shadow-md">
                <Text className="text-[30px] font-bold">Home Market</Text>
                <Text className="text-[18px] text-slate-600 mt-6">You Can Sell And By product.Make Real Money</Text>
                <TouchableOpacity onPress={onPress} className="p-4 bg-amber-400 rounded-full mt-20">
                    <Text className="text-black text-center text-[18px]">Get Started</Text>
                    {/*<Button title={"hr"}></Button>*/}
                </TouchableOpacity>
            </View>
        </View>
    );
}
