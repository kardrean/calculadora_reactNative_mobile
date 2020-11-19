import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions, TouchableHighlight} from 'react-native';

const StylesButton = StyleSheet.create({
    buttonPurpple: {
        fontSize: 40,
        height: Dimensions.get('window').width /4,  
        width: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: "#92c825",
        textAlign:'center',
        borderWidth: 1,
        borderColor: '#395008',
        color:"white",
    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#ff9b72'
    },
    butttonDouble: {
        width:(Dimensions.get('window').width / 4) * 2
    },
    buttonTriple:{
        width:(Dimensions.get('window').width / 4) * 3
    }
})

export default StylesButton