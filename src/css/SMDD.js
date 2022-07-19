import { StyleSheet, Dimensions, } from "react-native"


const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    Root: {
        padding: 10
    },

    TextStyle: {
        color: '#000',
        fontWeight: 'bold'
    },

    TextStyle1: {
        textAlign: 'center',
        color: '#000',
    },

    TextStyle2: {
        marginLeft: 5,
        color: '#000'
    },

    TextStyle3: {
        color: '#000',
    },

    TextStyle4: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#000',
        // textAlign:'center'
    },

    ViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    ViewStyle1: {
        flexDirection: 'row'
    },

    ViewStyle2: {
        borderColor: '#000',
        borderWidth: 0.2,
        width: 15,
        height: 20
    },

    ViewStyle3: {
        padding: 5,
        width: width * 0.3,
        backgroundColor: '#f5deb3',
        display: 'flex',
        alignItems: 'center',
    },

    ViewStyle4: {
        flexDirection: 'row',
        marginLeft: 15
    },

    ViewStyle5: {
        borderColor: '#000',
        borderWidth: 0.2,
        width: 15,
        height: 20
    },

    ViewStyle6: {
        marginLeft: 45,
        flexDirection: 'row',
        alignItems: 'center'
    },

    IconStyle: {
        fontSize: 20,
        color: '#f5deb3'
    },

    CardStyle:{
        width:width*0.9,
        alignSelf:'center',
        borderRadius:10
    }

})