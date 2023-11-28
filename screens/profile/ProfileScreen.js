import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <View className="h-28" style={{ backgroundColor: themeColors.bg }}>
            <SafeAreaView className="flex flex-row mt-4 items-center">
                <View className="flex-row justify-start">
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        className="p-2  ml-4">
                        <ArrowLeftIcon size="20" color="white" />
                    </TouchableOpacity>
                </View>
                <Text className="text-xl  text-white font-semibold">Profile</Text>
            </SafeAreaView>
            <View className="bg-white border border-white rounded-lg ml-4 mr-4 mt-24 ">

               <View className="flex  mt-4  items-center justify-center">
               <Image source={require("../../assets/images/avatar.jpg")}
                    style={{ width: 200, height: 200, borderRadius: 20 }} />
               </View>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value="Masud Rana"
                    className="border border-gray-200 rounded-lg mt-8"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    // value={text}
                    value="masud15-924@diu.edu.bd"
                    className="border border-gray-200 text-gray-700 rounded-lg "
                />
                <View className="">
                    <TouchableOpacity
                        className="py-3 m-4 rounded-xl mb-64" style={{ backgroundColor: themeColors.bg }}>
                        <Text
                            className="text-xl text-white font-bold text-center "
                        >
                            Save Changes
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 48,
        margin: 16,
        borderWidth: 1,
        padding: 10,
    },
});
