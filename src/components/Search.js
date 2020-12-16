import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';


export default props => {
    onSetQuery = text =>{
        props.setQuery(text)

    }
    return(
        <View>        
            <Text style={style.title}>{props.title}</Text>
            <TextInput 
                style={style.input}
                placeholder='Search here...'
                value={props.query}
                onChangeText={text => props.setQuery(text)}
            />                
        </View>
    )
}
 



const style = StyleSheet.create({
    title: {
        fontSize: 32,
        textAlign: "center",
        color:'#597a7b'        
    },
    input: {
        borderBottomWidth:1,
        color:'#597a7b'
    },

})