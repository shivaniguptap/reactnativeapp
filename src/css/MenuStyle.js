import { StyleSheet, Dimensions, } from "react-native"


const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    mainRoot: {
        flexDirection: 'row'
    },

    Root: {
        margin: 10
    },

    TextStyle: {
        color: '#000',
        fontWeight: 'bold'
    },

    TextStyle1: {
        color: '#000',


    },

    TextStyle3: {
        color: '#000',
    },

    ViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    ViewStyle1: {
        margin: 5,

    },

    ViewStyle2:{
        marginLeft:25
    },
    ViewStyle3: {
        padding: 5,
        width: width * 0.3,
        backgroundColor: '#f5deb3',
        display: 'flex',
        alignItems: 'center',
    },

    CardStyle: {
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10
    },

    ScrollStyle: {
        height: height
    },

    OpacityStyle: {
        display: 'flex',
        marginLeft: 20,
        padding: 5,
        margin: 15
    },

    ImgStyle:{
        width:width*0.2,
        height:height*0.1
    }



})