import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Ic from 'react-native-vector-icons/Ionicons';
import Pay from 'react-native-vector-icons/MaterialIcons'
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import CustomStyle from '../css/HMyCartStyle'
const { width, height } = Dimensions.get('window')

function HeaderMyCart() {
    const navigation = useNavigation()
    return (
        <View style={CustomStyle.Root}>
            <View style={CustomStyle.ViewStyle}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ic name='arrow-back' style={CustomStyle.IcStyle} />
                </TouchableOpacity>
                <View style={CustomStyle.ViewStyle1}>
                    <Text style={CustomStyle.TextStyle}>My Cart</Text>
                </View>
            </View>

            <View style={CustomStyle.ViewStyle2}>
                <Card style={CustomStyle.CardStyle} >
                    <Card.Content>
                        <View >
                            <Text style={CustomStyle.TextStyle1}>Total Cost</Text>
                            <View style={CustomStyle.ViewStyle3}>
                                < Pay name='euro' style={CustomStyle.IconStyle} />
                                <Text style={CustomStyle.TextStyle2}>36.00</Text>
                            </View>
                            {/* <Paragraph>Card content</Paragraph> */}
                        </View>
                    </Card.Content>
                </Card>
            </View>

        </View>
    )
}
export default HeaderMyCart