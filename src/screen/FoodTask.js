import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import Header from '../header/Header';
import { Card, Title, Paragraph, Menu } from 'react-native-paper';
import Star from 'react-native-vector-icons/EvilIcons'
import Arrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Pho from 'react-native-vector-icons/Feather'

import NumericInput from 'react-native-numeric-input'
import CustomStyle from '../css/FoodStyle'
import { useNavigation } from '@react-navigation/native'
import Modals from '../component/Modal';
import Desserts from '../component/Dessert';
import Drinks1 from '../component/Drinks';
import MainCourse1 from '../component/MainCourse';
import Starter from '../component/Starter';
import Button from '../component/Button';
import Menus from './Menu';
import MainCoursemenu from './MainCoursemenu';
import DessertMenu from './DessertMenu';
import Drinkmenu from './Drinkmenu';
import Dessert from '../component/Dessert';
const { width, height } = Dimensions.get('window')

function FoodTask() {
    const navigation = useNavigation()
    const [choice, setChoice] = useState(0)
    useEffect(() => {
        console.log(choice, "choices")
    })
    return (
        <>
           <Header choice={choice} setChoice ={setChoice} /> 
            <View style={CustomStyle.ViewStyle}>
                <Card style={CustomStyle.CardStyle} >
                    <Card.Content>
                        <Title style={CustomStyle.TitleStyle}>Inka Restaurant</Title>

                        <View style={CustomStyle.ViewStyle1}>
                            <View style={CustomStyle.ViewStyle2}>
                                <Star name='star' style={CustomStyle.IconStyle} />
                            </View>
                            <Text style={CustomStyle.TextStyle}>5.0(200+)</Text>
                            <Arrow name='power-on' style={CustomStyle.IconStyle} />
                            <Text style={CustomStyle.TextStyle}>All days : 09:00 AM - 06:00 PM</Text>
                        </View>

                        <View style={CustomStyle.ViewStyle1}>
                            <View style={CustomStyle.ViewStyle3}>
                                <Pho name='phone-call' style={CustomStyle.IconStyle1} />
                            </View>
                            <Text style={CustomStyle.TextStyle}>
                                Reach us at : 9854562142
                            </Text>
                        </View>

                        <TouchableOpacity style={CustomStyle.OpacityStyle}>
                            <Text style={CustomStyle.TextStyle1}>BOOK A TABLE</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
            </View>

            <ScrollView style={CustomStyle.scrollStyle}>
                <View>
                    {/* <Starter />

                    <MainCourse1 />
                    <Dessert />

                    {/* <Desserts /> 

                    <Drinks1 /> */}

                    {choice == 0 ? <>
                        <Menus />
                        <MainCoursemenu />
                        <DessertMenu />
                        <Drinkmenu />
                    </> : choice == 1 ? <Menus />
                        : choice == 2 ? <MainCoursemenu />
                        : choice == 3 ? <DessertMenu />
                        : <Drinkmenu />}

                </View>
                <View style={{ height: height * 0.1 }} />
            </ScrollView>

            <Modals setChoice={setChoice} />

            <Button />


        </>
    )
}
export default FoodTask;