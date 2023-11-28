import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet, FlatList, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { themeColors } from '../../theme';
import { useNavigation } from '@react-navigation/native'
export default function MainScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView className="bg-gray-100">
            <View className="flex flex-row justify-between items-center mt-12  p-4 " >
                <View className="flex flex-row justify-between items-center gap-4">
                    <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
                    <Image source={require("../../assets/images/avatar.jpg")} 
                        style={{ width: 40, height: 40, borderRadius: 20 }} />
                    </TouchableOpacity>
                   
                    <View>
                        <Text className=" text-xs  text-start">Good Morning</Text>
                        <Text className=" text-xl  text-start">Masud Rana</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between items-center gap-4">
                    <Icon name="notifications-circle-outline" size={24} color="black" />
                    <Icon name="settings-outline" size={20} color="red" />
                </View>

            </View>
            <View className="h-44  m-4 rounded-lg" style={{ backgroundColor: themeColors.bg }}>
                <Text className="m-4 text-3xl text-white text-start">Find the tutor who will tech you best</Text>
                <View className="flex flex-row  items-center">
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl m-4 w-3/4"
                        value=""
                        placeholder='Search'
                    />
                    <TouchableOpacity><Icon name="filter-outline" size={50} color="white" className="" /></TouchableOpacity>


                </View>
            </View>

            <View className="m-4">
                <View className="flex flex-row justify-between mb-6">
                    <Text className=" text-2xl font-semibold  text-start">Top Teachers</Text>
                    <Text className=" text-sm text-pink-500 text-start">view all</Text>
                </View>
                <ScrollView className="flex flex-row gap-4" horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View className="h-28 mt-6 flex flex-row p-4 bg-white rounded-lg">
                        <View >
                            <Image source={require("../../assets/images/avatar.jpg")}
                                style={{ width: 50, height: 50, borderRadius: 20 }} />
                        </View>
                        <View className="ml-4">
                            <TouchableOpacity onPress={()=> navigation.navigate('TeacherProfile')}>
                            <Text className=" text-xl  text-start">Masud Rana</Text>
                            </TouchableOpacity>
                            
                            <Text className=" text-xs  text-start">Physics</Text>
                            <View className=" mt-3">
                                <View className="flex flex-row ">
                                    <Icon name="star-outline" size={15} color="#ff5733" />
                                    <Icon name="star-outline" size={15} color="#ff5733" />
                                    <Icon name="star-outline" size={15} color="#ff5733" />
                                    <Icon name="star-outline" size={15} color="#ff5733" />
                                    <Icon name="star-outline" size={15} color="#ff5733" />
                                    <Text className="ml-2 text-gray-500">( 20 )</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="h-28 mt-6 flex flex-row p-4 bg-white rounded-lg">
                        <View >
                            <Image source={require("../../assets/images/avatar.jpg")}
                                style={{ width: 50, height: 50, borderRadius: 20 }} />
                        </View>
                        <View className="ml-4">
                            <Text className=" text-xl  text-start">Masud Rana</Text>
                            <Text className=" text-xs  text-start">Physics</Text>
                            <View className=" mt-3">
                                <View className="flex flex-row ">
                                    <Icon name="star-outline" size={15} color="#E74C3C" />
                                    <Icon name="star-outline" size={15} color="#E74C3C" />
                                    <Icon name="star-outline" size={15} color="#E74C3C" />
                                    <Icon name="star-outline" size={15} color="#E74C3C" />
                                    <Icon name="star-outline" size={15} color="#E74C3C" />
                                    <Text className="ml-2 text-gray-500">( 20 )</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                </ScrollView>

            </View>
            <View className="m-4">
                <View className="flex flex-row justify-between">
                    <Text className=" text-2xl font-semibold  text-start">Categories</Text>
                    <Text className=" text-sm text-pink-500 text-start">view all</Text>
                </View>
                <View className="flex flex-row justify-between mt-6">
                    <View className="bg-white p-2 rounded-lg">
                        <Image source={require("../../assets/images/relativity.png")}
                            style={{ width: 30, height: 30 }} />
                        <Text className=" text-md text-start text-gray-600">Physics</Text>
                    </View>
                    <View className="bg-white p-2 rounded-lg">
                        <Image source={require("../../assets/images/flask.png")}
                            style={{ width: 30, height: 30 }} />
                        <Text className=" text-md text-start text-gray-600">Chemistry</Text>
                    </View>
                    <View className="bg-white p-2 rounded-lg">
                        <Image source={require("../../assets/images/tools.png")}
                            style={{ width: 30, height: 30 }} />
                        <Text className=" text-md text-start text-gray-600">Math</Text>
                    </View>
                    <View className="bg-white p-2 rounded-lg">
                        <Image source={require("../../assets/images/statistics.png")}
                            style={{ width: 30, height: 30 }} />
                        <Text className=" text-md text-start text-gray-600">Finance</Text>
                    </View>
                    <View className="bg-white p-2 rounded-lg">
                        <Image source={require("../../assets/images/united-kingdom.png")}
                            style={{ width: 30, height: 30 }} />
                        <Text className=" text-md text-start text-gray-600">English</Text>
                    </View>


                </View>
            </View>
            <View className="m-4">
                <View className="flex flex-row justify-between">
                    <Text className=" text-2xl font-semibold  text-start">Populer Teachers</Text>
                    <Text className=" text-sm text-pink-500 text-start">view all</Text>
                </View>
                <View className="h-20 mt-6 flex flex-row p-4 bg-white rounded-lg">
                    <View >
                        <Image source={require("../../assets/images/avatar.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 20 }} />
                    </View>
                    <View className="ml-4">
                        <Text className=" text-xl  text-start mt-2">Masud Rana</Text>
                        <Text className=" text-xs  text-start">Physics</Text>
                    </View>
                    <View className="ml-16 mt-3">
                        <View className="flex flex-row ">
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Text className="ml-2 text-gray-500">( 20 )</Text>
                        </View>



                    </View>

                </View>
                <View className="h-20 mt-4 flex flex-row p-4 bg-white rounded-lg">
                    <View >
                        <Image source={require("../../assets/images/avatar.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 20 }} />
                    </View>
                    <View className="ml-4">
                        <Text className=" text-xl  text-start mt-2">Masud Rana</Text>
                        <Text className=" text-xs  text-start">Physics</Text>
                    </View>
                    <View className="ml-16 mt-3">
                        <View className="flex flex-row ">
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Icon name="star-outline" size={15} color="#E74C3C" />
                            <Text className="ml-2 text-gray-500">( 20 )</Text>
                        </View>



                    </View>

                </View>

            </View>

        </ScrollView>

    )
}
