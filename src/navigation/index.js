import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import Tab from './Tab';

export default props => (
    <SafeAreaView style={styles.App}>
        <NavigationContainer>
            <Tab />
        </NavigationContainer>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    App:{
        flexGrow:1,
        backgroundColor:'#ebe0e7',
        
    }
})