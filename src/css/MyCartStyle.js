import { StyleSheet, Dimensions, } from "react-native"


const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    Root: {
        padding: 10
    },

    TextStyle: {
        color: '#000'
    },

    TextStyle1: {
        textAlign: 'center',
        color: '#000'
    },

    TextStyle2: {
        marginLeft: 5,
        color: '#000'
    },

    TextStyle3: {
        color: '#F5DEB3',
        fontSize: 20,
    },

    TextStyle4: {
        color: '#fff'
    },

    ViewStyle: {
        margin: 10
    },

    ViewStyle1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    ViewStyle2: {
        flexDirection: 'row'
    },

    ViewStyle3: {
        borderColor: '#000',
        borderWidth: 0.2,
        width: 15,
        height: 20
    },

    ViewStyle4: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    ViewStyle5: {
        marginTop: 10
    },

    ViewStyle6: {
        marginLeft: 20,
        marginTop: -10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    ViewStyle7: {
        borderColor: '#d3d3d3',
        borderWidth: 0.2
    },

    ViewStyle8: {
        marginLeft: 18
    },

    IconStyle: {
        fontSize: 25,
        color: '#000'
    },

    IconStyle1: {
        fontSize: 20,
        color: '#f5deb3'
    },

    ShopStyle: {
        fontSize: 30,
        color: '#fff'
    },

    OpacityStyle2: {
        flexDirection: 'row',
        backgroundColor: '#051f20',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 650,
        width: width
    },



})