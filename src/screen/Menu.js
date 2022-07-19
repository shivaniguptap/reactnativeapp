import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import Pay from 'react-native-vector-icons/MaterialIcons'
import CustomStyle from '../css/MenuStyle'
import { Card, Title, Paragraph, Menu } from 'react-native-paper';
import DATA from '../data/Data';
import FoodTask from './FoodTask';
import Header from '../header/Header';
const { width, height } = Dimensions.get('window')

function Menus(props) {

    const [getList, setList] = useState(DATA)

    const handle = () => {

        return getList.map((item, key) => {
            return (
                <>


                    <Card key={key} style={CustomStyle.CardStyle}>
                        <Card.Content>

                            <View style={CustomStyle.mainRoot}>
                                <View>

                                    <View style={CustomStyle.ViewStyle} >
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >Id:</Text>
                                        </View>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >{item.id}</Text>
                                        </View>
                                    </View>

                                    <View style={CustomStyle.ViewStyle}>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >Type:</Text>
                                        </View>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >{item.type}</Text>
                                        </View>
                                    </View>

                                    <View style={CustomStyle.ViewStyle}>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >Name:</Text>
                                        </View>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >{item.name}</Text>
                                        </View>
                                    </View>

                                    <View style={CustomStyle.ViewStyle}>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >Description:</Text>
                                        </View>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >{item.description}</Text>
                                        </View>
                                    </View>

                                    <View style={CustomStyle.ViewStyle}>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >Price:</Text>
                                        </View>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >{item.price}</Text>
                                        </View>
                                    </View>

                                    <View style={CustomStyle.ViewStyle}>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >Status:</Text>
                                        </View>
                                        <View style={CustomStyle.ViewStyle1}>
                                            <Text style={CustomStyle.TextStyle1} >{item.status}</Text>
                                        </View>
                                    </View>

                                </View>

                                <View>
                                    <TouchableOpacity style={CustomStyle.OpacityStyle}>
                                        <View style={CustomStyle.ViewStyle3}>
                                            <Text style={CustomStyle.TextStyle3}>
                                                ADD
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={CustomStyle.ViewStyle2}>
                                        <Image
                                            style={CustomStyle.ImgStyle}
                                            source={require('../images/7up1.png')}
                                        />
                                    </View>

                                </View>
                            </View>

                        </Card.Content>
                    </Card>
                </>
            )

        })
    }

    return (
        <>
            {/* <FoodTask/>
        <Header/> */}
            <ScrollView>
                <View style={CustomStyle.Root}>
                    <Text style={CustomStyle.TextStyle}>Starter</Text>
                </View>
                {handle()}
            </ScrollView>
        </>

    )

}



export default Menus;




