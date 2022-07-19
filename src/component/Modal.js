import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import Modal from "react-native-modal";
import Food from 'react-native-vector-icons/Ionicons'
import CustomStyle from '../css/FoodStyle'
import { useNavigation } from '@react-navigation/native'


function Modals({setChoice}) {
    const navigation = useNavigation()

    const [isModalVisible, setModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
 
    };


    return (
        <>
            <TouchableOpacity onPress={toggleModal}
                style={CustomStyle.OpacityStyle1}
            >

                <View style={CustomStyle.ViewStyle4}>
                    <Food name='fast-food-outline' style={CustomStyle.IconStyle} />
                    <Text style={CustomStyle.TextStyle}>MENU</Text>
                </View>
            </TouchableOpacity>

            <Modal isVisible={isModalVisible} >
                <View style={CustomStyle.ViewStyle6}>
                    <TouchableOpacity onPress={() => {setChoice(1); setModalVisible(!isModalVisible); }}>
                        <Text style={CustomStyle.TextStyle}>Starter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setChoice(2); setModalVisible(!isModalVisible); }}>
                        <Text style={CustomStyle.TextStyle}>Main Course</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setChoice(3); setModalVisible(!isModalVisible); }}>
                        <Text style={CustomStyle.TextStyle}>Dessert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setChoice(4); setModalVisible(!isModalVisible); }}>
                        <Text style={CustomStyle.TextStyle}>Drinks</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}
export default Modals;