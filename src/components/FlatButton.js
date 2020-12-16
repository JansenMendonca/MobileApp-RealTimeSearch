import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.btnText}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor: '#add0d1',
        borderColor:'#6aa9ab'
    },
    buttonText:{
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'
    }
})