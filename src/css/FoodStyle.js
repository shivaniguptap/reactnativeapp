import { StyleSheet, Dimensions, } from "react-native"


const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    ViewStyle: {
        marginTop: -60,
        width: width * 0.9,
        alignSelf: 'center',
    },

    ViewStyle1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:10
    },

    ViewStyle2: {
        justifyContent: 'center'
    },

    ViewStyle3: {
        justifyContent: 'center',
        marginHorizontal: 10
    },

    ViewStyle4: {
        justifyContent: 'center',
        flexDirection: 'row'
    },

    ViewStyle5: {
        marginRight: 10
    },

    ViewStyle6: {
        padding: 10,
        backgroundColor: '#fff',
        height: height * 0.2,
        borderRadius: 10,
        justifyContent: 'space-around',
        width: width * 0.8,
        alignSelf: 'center'
    },

    CardStyle: {
        height: height * 0.25,
        justifyContent:'space-around'
    },

    TitleStyle: {
        alignSelf: 'center'
    },

    IconStyle: {
        fontSize: 20,
        color: '#000'
    },

    IconStyle1: {
        fontSize: 16,
        color: '#000'
    },

    IconStyle3:{
        fontSize:20,
        color:'#f5deb3'
    },

    ShopStyle: {
        fontSize: 30,
        color: '#fff'
    },

    TextStyle: {
        color: '#000'
    },

    TextStyle1: {
        color: '#fff',
        textAlign: 'center'
    },

    TextStyle2: {
        color: '#fff'
    },

    OpacityStyle: {
        backgroundColor: '#051f20',
        alignSelf: 'center',
        width: width * 0.4,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        marginTop:10
    },

    OpacityStyle1: {
        backgroundColor: '#F5DEB3',
        alignSelf: 'center',
        width: width * 0.4,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        position: 'absolute',
        marginTop: 600
    },

    OpacityStyle2: {
        flexDirection: 'row',
        backgroundColor: '#051f20',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 655,
        width: width
    },

    scrollStyle: {
        height: height,
    },


})