import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput, Dimensions } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodTask from "../screen/FoodTask";
import MyCart from "../screen/MyCart";
import Starter from "../component/Starter";
// import DessertMenu from "../screen/DessertMenu";
import Drinks1 from "../component/Drinks";
import MainCourse1 from "../component/MainCourse";
import Menus from "../screen/Menu";
import MainCoursemenu from "../screen/MainCoursemenu";
import DessertMenu from "../screen/DessertMenu";
import Drinkmenu from "../screen/Drinkmenu";
import Dessert from "../component/Dessert";
// import Dessert from '../screen/DessertMenu'
const { width, height } = Dimensions.get('window')

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator
        // screenOptions={{headerStyle: {backgroundColor:"red"}}}
        // initialRouteName="Dashboard"
        >
            <Stack.Screen name="FoodTask" component={FoodTask}
                options={{ headerShown: false }} />
            <Stack.Screen name="MyCart" component={MyCart}
                options={{ headerShown: false }} />

            <Stack.Screen name="Starter" component={Starter}
                options={{ headerShown: false }} />
            <Stack.Screen name="MainCourse" component={MainCourse1}
                options={{ headerShown: false }} />

<Stack.Screen name="Dessert" component={Dessert}
                options={{ headerShown: false }} />

            {/* <Stack.Screen name="Dessert" component={Desserts}
                options={{ headerShown: false }} />
                <Stack.Screen name="Drinks" component={Drinks1}
                options={{ headerShown: false }} /> */}

            <Stack.Screen name="Menu" component={Menus}
                options={{ headerShown: false }} />

            <Stack.Screen name="MainCoursemenu" component={MainCoursemenu}
                options={{ headerShown: false }} />

            <Stack.Screen name="DessertMenu" component={DessertMenu}
                options={{ headerShown: false }} />

            <Stack.Screen name="Drinkmenu" component={Drinkmenu}
                options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}

export default RootNavigator;