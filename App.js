/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// // import Header from './src/header/Header';
// import FoodTask from './src/screen/FoodTask';


// const App =()=>{
  
//   return (
//     <View>
//       {/* <Header /> */}
//       <FoodTask/>
//       {/* <Text style={{backgroundColor:'red',justifyContent:"center",alignSelf:'center',color:'#fff',fontSize:20}}>hlo</Text> */}
//     </View>

//   );
// };

// export default App;

import React, { useState } from 'react';
import { View, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

import RootReducer from './src/navigation/RootReducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(RootReducer);

const App = (props) => {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />  
    </NavigationContainer>
    </Provider>
  )

};
export default App;


