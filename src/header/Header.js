import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Ic from 'react-native-vector-icons/Ionicons';
import Arrow from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomStyle from '../css/HeaderStyle'
import { Card, Title, Paragraph, Menu } from 'react-native-paper';
import Star from 'react-native-vector-icons/EvilIcons'
// import Arrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Pho from 'react-native-vector-icons/Feather'
import { useRoute, useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window')


function Header({ choice, setChoice }) {
  const navigation = useNavigation()
  return (
    <View>
      <ImageBackground source={require("../images/background1.jpg")} resizeMode="cover"
        style={CustomStyle.ImgStyle}
      >
        <View style={CustomStyle.ViewStyle}>
          {choice !== 0 ? <TouchableOpacity onPress={() => { setChoice(0) }}>
            <Ic name='arrow-back' style={CustomStyle.Icon} />
          </TouchableOpacity> : <View style={CustomStyle.Icon} />
          }
          <View style={CustomStyle.ViewStyle1}>
            <TouchableOpacity
              style={CustomStyle.OpacityStyle}
            >
              <Arrow name='tray-arrow-up' style={CustomStyle.Icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Arrow name='information-outline' style={CustomStyle.Icon} />
            </TouchableOpacity>
          </View>

        </View>



      </ImageBackground>
    </View>
  )
}
export default Header;