import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
export default function TeacherProfile() {
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <SafeAreaView className="flex ">
                <View className="flex-row justify-start">
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                        <ArrowLeftIcon size="20" color="white" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-6 ">
                    <Image source={require('../../assets/images/avatar.jpg')}
                        style={{ width: 150, height: 150, borderRadius: 70 }} />
                </View>
                <Text className="text-start text-sm text-white ml-4 mt-4 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia voluptatum magnam nihil eligendi officia autem iusto doloribus exercitationem, odio velit! Quas ex sint suscipit consequatur ullam? Vel, quam quisquam.</Text>

            </SafeAreaView>
            <ScrollView
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                className="flex-1 bg-gray-100 px-8 pt-8 ">

                <View className="flex flex-row justify-between">
                    <View className="bg-white pl-4 pr-4 pt-2 pb-2  rounded-lg">
                        <Icon name="people" size={36} color="red" />
                        <Text className=" text-xl text-center text-gray-900 font-semibold">500 +</Text>
                        <Text className=" text-xs text-center text-gray-600">Students</Text>
                    </View>
                    <View className="bg-white pl-4 pr-4 pt-2 pb-2  rounded-lg">
                        <Icon name="keypad" size={36} color="#F5B041" />
                        <Text className=" text-xl text-center text-gray-900 font-semibold">7+ Years</Text>
                        <Text className=" text-xs text-center text-gray-600">Experiences</Text>
                    </View>
                    <View className="bg-white pl-4 pr-4 pt-2 pb-2  rounded-lg">
                        <Icon name="star" size={36} color="#EA41F5" />
                        <Text className=" text-xl text-center text-gray-900 font-semibold">4.9</Text>
                        <Text className=" text-xs text-center text-gray-600">Ratings</Text>
                    </View>
                </View>
                <Text className="text-md mt-4 font-semibold">Teacher's Details</Text>
                <View className="bg-white border border-white rounded-lg mt-4">
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Teacher's Name </Text>
                        <Text className="text-md font-semibold">Masud Rana</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Speciality </Text>
                        <Text className="text-md font-semibold">Science</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Tution Fees </Text>
                        <Text className="text-md font-semibold">2k / Per Hour</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Availibility </Text>
                        <Text className="text-md font-semibold">7 days / Week</Text>
                    </View>
                </View>
                <Text className="text-md mt-4 font-semibold">Summary</Text>
                <View className="bg-white border border-white rounded-lg mt-4">
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Saturday </Text>
                        <Text className="text-md font-semibold">7am - 9am and 5pm - 10pm</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Sunday</Text>
                        <Text className="text-md font-semibold">7am - 9am and 5pm - 10pm</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Monday </Text>
                        <Text className="text-md font-semibold">7am - 9am and 5pm - 10pm</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Availibility </Text>
                        <Text className="text-md font-semibold">7am - 9am and 5pm - 10pm</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Sunday</Text>
                        <Text className="text-md font-semibold">7am - 9am and 5pm - 10pm</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Monday </Text>
                        <Text className="text-md font-semibold">7am - 9am and 5pm - 10pm</Text>
                    </View>
                    <View className="flex flex-row justify-between items-center p-2">
                        <Text className="text-md">Availibility </Text>
                        <Text className="text-md font-semibold">7am - 9am and 5pm - 10pm</Text>
                    </View>
                </View>
                
            </ScrollView>

        </View>

    )
}
