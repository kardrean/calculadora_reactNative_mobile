import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import StylesDisplay from './EstiloDisplay'

export default props =>
    <View style={StylesDisplay.Display}>
        <Text style={StylesDisplay.DisplayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>
