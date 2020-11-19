import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions, TouchableHighlight } from 'react-native';
import StylesIcon from './Estiloicons'
import { FontAwesome } from '@expo/vector-icons';

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <FontAwesome style={StylesIcon.IconPurpple}>{props.label}</FontAwesome>
        </TouchableHighlight>
    )
}