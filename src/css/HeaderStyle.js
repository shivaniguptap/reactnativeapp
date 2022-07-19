import { StyleSheet, Dimensions, } from "react-native"


const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    ImgStyle: {
        height: height * 0.3,
        width: width
    },

    ViewStyle: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },

    ViewStyle1: {
        flexDirection: 'row',
    },

    ViewStyle2: {
        justifyContent: 'center'
    },

    ViewStyle3: {
        justifyContent: 'center',
        marginHorizontal: 10
    },

    ViewStyle4: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:10
    },

    ViewStyle5: {
        marginTop: 50,
        width: width * 0.9,
        alignSelf: 'center',
    },

    Icon: {
        fontSize: 30,
        color: '#fff',
    },

    IconStyle: {
        fontSize: 20,
        color: '#000'
    },


    IconStyle1: {
        fontSize: 16,
        color: '#000'
    },

    OpacityStyle: {
        marginRight: 10
    },

    OpacityStyle1: {
        backgroundColor: '#051f20',
        alignSelf: 'center',
        width: width * 0.4,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        marginTop:10
    },

    CardStyle: {
        height: height * 0.25,
        justifyContent:'space-around'
    },

    TitleStyle: {
        alignSelf: 'center'
    },

    TextStyle1: {
        color: '#fff',
        textAlign: 'center'
    },

    TextStyle2: {
        color: '#000'
    },


})