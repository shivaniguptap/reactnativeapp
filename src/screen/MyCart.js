import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react';
import HeaderMyCart from '../header/Header-MyCart'
import NumericInput from 'react-native-numeric-input'
import Fac from 'react-native-vector-icons/Entypo'
import Pay from 'react-native-vector-icons/MaterialIcons'
import CustomStyle from '../css/MyCartStyle'
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

function MyCart() {
    const [checked, setChecked] = React.useState('first');
    const [value, setValue] = React.useState(1);

    const navigation = useNavigation()
    return (
        <>
            <HeaderMyCart />
            <View>
                <View style={CustomStyle.Root}>
                    <Text style={CustomStyle.TextStyle}>Review Orders</Text>
                </View>
                <View style={CustomStyle.ViewStyle}>
                    <View>
                        <View style={CustomStyle.ViewStyle1}>
                            <View style={CustomStyle.ViewStyle2} >
                                <View style={CustomStyle.ViewStyle3} >
                                    <Text style={CustomStyle.TextStyle1} >
                                        N
                                    </Text>
                                </View>

                                <Text style={CustomStyle.TextStyle2}>
                                    Guac de la Costa
                                </Text>
                            </View>

                            <NumericInput
                                value={value}
                                onChange={value => value > 1 && value < 20 ? setValue(value) : null}
                                totalHeight={25}
                                totalWidth={70}
                                borderColor='#F5DEB3'
                                // rounded={true}
                                validateOnBlur={false}
                            // inputStyle={{
                            //     backgroundColor: '#d3d3d3',
                            //     borderWidth: 0.2
                            // }}

                            />

                        </View>
                        <View>
                            <View style={CustomStyle.ViewStyle4} >
                                <View style={CustomStyle.ViewStyle2}  >
                                    <View style={CustomStyle.ViewStyle3} >
                                        <Text style={CustomStyle.TextStyle1} >
                                            D
                                        </Text>
                                    </View>

                                    <Text style={CustomStyle.TextStyle2}>
                                        tortillas de mais,fruit de la passion,mango
                                    </Text>
                                </View>

                                <View style={CustomStyle.ViewStyle5}>
                                    <Fac name='chat' style={CustomStyle.IconStyle} />
                                </View>
                            </View>
                        </View>
                        <View style={CustomStyle.ViewStyle6}>
                            < Pay name='euro' style={CustomStyle.IconStyle1} />
                            <Text style={CustomStyle.TextStyle3}>
                                7
                            </Text>
                        </View>
                        <View style={CustomStyle.ViewStyle7} />
                    </View>

                    <View style={CustomStyle.ViewStyle5}>
                        <View style={CustomStyle.ViewStyle4}>
                            <View style={CustomStyle.ViewStyle2} >
                                <View style={CustomStyle.ViewStyle3} >
                                    <Text style={CustomStyle.TextStyle1} >
                                        N
                                    </Text>
                                </View>

                                <Text style={CustomStyle.TextStyle2}>
                                    Guac de la Costa
                                </Text>
                            </View>

                            <NumericInput
                                value={value}
                                onChange={value => value > 1 && value < 20 ? setValue(value) : null}
                                totalHeight={25}
                                totalWidth={70}
                                borderColor='#F5DEB3'
                                // rounded={true}
                                validateOnBlur={false}
                            // inputStyle={{
                            //     backgroundColor: '#d3d3d3',
                            //     borderWidth: 0.2
                            // }}

                            />

                        </View>

                        <View>
                            <View style={CustomStyle.ViewStyle4} >
                                <View style={CustomStyle.ViewStyle2}  >
                                    <View style={CustomStyle.ViewStyle8}>
                                        <Text style={CustomStyle.TextStyle2}>
                                            citron vert / Corona sauce
                                        </Text>
                                    </View>
                                </View>

                                <View style={CustomStyle.ViewStyle5}>
                                    <Fac name='chat' style={CustomStyle.IconStyle} />
                                </View>
                            </View>
                        </View>
                        <View style={CustomStyle.ViewStyle6}>
                            < Pay name='euro' style={CustomStyle.IconStyle1} />
                            <Text style={CustomStyle.TextStyle3}>
                                7
                            </Text>
                        </View>
                        <View style={CustomStyle.ViewStyle7} />
                    </View>
                </View>
            </View >

            <View style={CustomStyle.Root}>
                <Text style={CustomStyle.TextStyle}>Delivery Options</Text>
            </View>

            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={CustomStyle.TextStyle}>Dine-In</Text>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            color={'#F5DEB3'} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={CustomStyle.TextStyle}>Take way</Text>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            color={'#F5DEB3'} />
                    </View>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('FoodTask')}
                style={CustomStyle.OpacityStyle2}
            >
                <Text style={CustomStyle.TextStyle4}>PLACE ORDER</Text>
            </TouchableOpacity>
        </>
    )
}
export default MyCart;