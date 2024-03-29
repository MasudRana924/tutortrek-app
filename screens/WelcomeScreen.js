import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
            <View className="flex-1 flex justify-around my-4">
                <Text
                    className="text-white font-bold text-4xl text-center">
                    Tutor Trek
                </Text>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/welcome.png")}
                        style={{ width: 350, height: 350 }} />
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        className="py-3 bg-white mx-7 rounded-xl">
                        <Text
                            className="text-xl font-bold text-center "
                        >
                            Let's get Started
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center gap-4">
                        <TouchableOpacity onPress={() => navigation.navigate('TutorLogin')}>
                            <Text className="font-semibold bg-violet-500 text-white p-2 rounded-xl">Teacher </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold bg-violet-500 text-white p-2 rounded-xl"> Student</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}