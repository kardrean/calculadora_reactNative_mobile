import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import StylesButton from './EstiloButton'

export default props => {
    return (
        <TouchableHighlight onPress={() => console.warn('EPA !!!')}>
            <Text style={StylesButton.buttonPurpple}>{props.label}</Text>
        </TouchableHighlight>
    )
}
