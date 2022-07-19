import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Pay from 'react-native-vector-icons/MaterialIcons'
import CustomStyle from '../css/SMDD'
import { Card, Title, Paragraph } from 'react-native-paper';
const { width, height } = Dimensions.get('window')


function MainCourse1() {
    return (
        <>
            <View style={CustomStyle.Root}>
                <Text style={CustomStyle.TextStyle}>Main Course</Text>
            </View>

            <Card style={CustomStyle.CardStyle}>
                <Card.Content>
            <View>
                <View>
                    <View style={CustomStyle.ViewStyle}>
                        <View style={CustomStyle.ViewStyle1} >
                            <View style={CustomStyle.ViewStyle2} >
                                <Text style={CustomStyle.TextStyle1} >
                                    N
                                </Text>
                            </View>

                            <Text style={CustomStyle.TextStyle2}>
                                Guac de la Costa
                            </Text>
                        </View>

                        <TouchableOpacity>
                            <View style={CustomStyle. ViewStyle3}>
                                <Text style={CustomStyle.TextStyle3}>
                                    ADD
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={CustomStyle.ViewStyle4} >
                        <View style={CustomStyle.ViewStyle5} >
                            <Text style={CustomStyle.TextStyle1} >
                                D
                            </Text>
                        </View>

                        <Text style={CustomStyle.TextStyle2}>
                            tortillas de mais,fruit de la passion,mango
                        </Text>
                    </View>

                    <View style={CustomStyle.ViewStyle6}>
                        < Pay name='euro' style={CustomStyle.IconStyle} />
                        <Text style={CustomStyle.IconStyle}>
                            7
                        </Text>
                    </View>
                </View>

                <View>
                    <View style={CustomStyle.ViewStyle}>
                        <View style={CustomStyle.ViewStyle1} >
                            <View style={CustomStyle.ViewStyle2} >
                                <Text style={CustomStyle.TextStyle1} >
                                    N
                                </Text>
                            </View>

                            <Text style={CustomStyle.TextStyle2}>
                                Guac de la Costa
                            </Text>
                        </View>

                        <TouchableOpacity>
                            <View style={CustomStyle. ViewStyle3}>
                                <Text style={CustomStyle.TextStyle3}>
                                    ADD
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={CustomStyle.ViewStyle4} >
                        <View style={CustomStyle.ViewStyle5} >
                            <Text style={CustomStyle.TextStyle1} >
                                D
                            </Text>
                        </View>

                        <Text style={CustomStyle.TextStyle2}>
                            tortillas de mais,fruit de la passion,mango
                        </Text>
                    </View>

                    <View style={CustomStyle.ViewStyle6}>
                        < Pay name='euro' style={CustomStyle.IconStyle} />
                        <Text style={CustomStyle.IconStyle}>
                            7
                        </Text>
                    </View>
                </View>


                <View>
                    <View style={CustomStyle.ViewStyle}>
                        <View style={CustomStyle.ViewStyle1} >
                            <View style={CustomStyle.ViewStyle2} >
                                <Text style={CustomStyle.TextStyle1} >
                                    N
                                </Text>
                            </View>

                            <Text style={CustomStyle.TextStyle2}>
                                Guac de la Costa
                            </Text>
                        </View>

                        <TouchableOpacity>
                            <View style={CustomStyle.ViewStyle3}>
                                <Text style={CustomStyle.TextStyle3}>
                                    ADD
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={CustomStyle.ViewStyle4} >
                        <View style={CustomStyle.ViewStyle5} >
                            <Text style={CustomStyle.TextStyle1} >
                                D
                            </Text>
                        </View>

                        <Text style={CustomStyle.TextStyle2}>
                            tortillas de mais,fruit de la passion,mango
                        </Text>
                    </View>

                    <View style={CustomStyle.ViewStyle6}>
                        < Pay name='euro' style={CustomStyle.IconStyle} />
                        <Text style={CustomStyle.IconStyle}>
                            7
                        </Text>
                    </View>
                </View>

            </View>
            </Card.Content>
            </Card>
        </>
    )
}
export default MainCourse1;