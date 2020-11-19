import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions, TouchableHighlight} from 'react-native';

const StylesButton = StyleSheet.create({
    buttonPurpple: {
        fontSize: 40,
        height: Dimensions.get('window').width /4,  
        width: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: "#6033CC",
        textAlign:'center',
        borderWidth: 1,
        borderColor: '#888',
        color:"white",
    }
})

export default StylesButton