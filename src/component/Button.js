import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import CustomStyle from '../css/FoodStyle'
import { useNavigation } from '@react-navigation/native'
import Shop from 'react-native-vector-icons/AntDesign'

function Button() {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('MyCart')}
            style={CustomStyle.OpacityStyle2}>
            <View style={CustomStyle.ViewStyle5}>
                <Shop name='shoppingcart' style={CustomStyle.ShopStyle} />
            </View>
            <Text style={CustomStyle.TextStyle2}>VIEW CART (5 ITEMS)</Text>
        </TouchableOpacity>
    )
}

export default Button;