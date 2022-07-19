import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Pay from 'react-native-vector-icons/MaterialIcons'
import CustomStyle from '../css/SMDD'
import { Card, Title, Paragraph } from 'react-native-paper';
const { width, height } = Dimensions.get('window')


function Dessert() {
    return (
        <>
            <View style={CustomStyle.Root}>
                <Text style={CustomStyle.TextStyle}>Dessert</Text>
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
export default Dessert;












// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
// import Pay from 'react-native-vector-icons/MaterialIcons'
// import CustomStyle from '../css/SMDD'
// import FAB from 'react-native-vector-icons/Feather';
// import { Card, Title, Paragraph } from 'react-native-paper';
// import { useDispatch } from 'react-redux';
// import DATA from '../data/Data';
// const { width, height } = Dimensions.get('window')

// const Desserts = (props,item) => {
//     // var item=props.route.params.product
//     const [qty, setQty] = useState(1)
//     var dispatch = useDispatch()
//     // console.log(props.route.params.product)
//     const handleAddtoCart = (product) => {
//         product['qty'] = qty
//         dispatch({ type: 'ADD_ITEM', payload: [product.finalproductid, product] })
//         props.navigation.setParams({ 'x': '' })


//     }
//     const handlePlus = () => {
//         var q = qty
//         if (q < 20)
//             setQty(q + 1)

//     }

//     const handleMinus = () => {
//         var q = qty
//         if (q > 1)
//             setQty(q - 1)

//     }
//     return (
//         <>
//             <View style={CustomStyle.Root}>
//                 <Text style={CustomStyle.TextStyle}>Dessert</Text>
//             </View>
//             <Card style={CustomStyle.CardStyle}>
//                 <Card.Content>

//                 <View >
//                         <Text > id</Text>
//                         <Text >{item.id}</Text>
//                     </View>

//                     <View >
//                         <Text > Order date</Text>
//                         <Text >{item.type}</Text>
//                     </View>
                  
//                 </Card.Content>
//             </Card>


//         </>
//     )
// }
// export default Desserts;


