import { StyleSheet, Dimensions, } from "react-native"


const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    Root: {
        backgroundColor: '#051f20',
        height: height * 0.3
    },

    ViewStyle: {
        padding: 10,
        flexDirection: 'row',
        marginLeft: 10,
    },

    ViewStyle1: {
        marginLeft: 15,
        alignItems: 'center'
    },

    ViewStyle2: {
        alignItems: 'center',
        marginVertical: 25
    },

    ViewStyle3: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },

    TextStyle: {
        color: '#fff'
    },

    TextStyle1: {
        alignSelf: 'center',
        color: '#F5DEB3'
    },

    TextStyle2: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 20
    },

    IcStyle: {
        fontSize: 25,
        color: '#fff',
    },

    IconStyle:{
        fontSize:20,
        color:'#000'
    },

    CardStyle: {
        height: height * 0.12,
        width: width * 0.45,
        borderRadius: 5
    },




})