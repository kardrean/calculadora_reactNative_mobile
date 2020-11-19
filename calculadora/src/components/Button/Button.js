import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import StylesButton from './EstiloButton'

export default props => {
   
    const stylegeral = [StylesButton.buttonPurpple]
    if(props.double) stylegeral.push(StylesButton.butttonDouble)
    if(props.triple) stylegeral.push(StylesButton.buttonTriple)
    if(props.operation) stylegeral.push(StylesButton.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylegeral}>{props.label}</Text>
        </TouchableHighlight>
    )
}
