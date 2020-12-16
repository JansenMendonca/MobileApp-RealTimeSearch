import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => (
    <View style={styles.locationBox}>
        <Text style={styles.location}>{props.name}, {props.country}</Text>
    </View>
)

const styles = StyleSheet.create({
    locationBox:{
        alignItems:'center',
        margin: 20,
    },
    location:{
       marginTop:25,
       marginLeft:10,
       marginRight:10,
       fontSize:22,
       fontWeight:"500",
       alignItems:'center',       

    }
})