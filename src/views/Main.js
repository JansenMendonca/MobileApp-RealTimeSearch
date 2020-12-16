import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


export default props => (
    <View style={styles.mainView}>
        <Image 
            source={require('../images/RT-Search.png')}
            resizeMode={'cover'}
            style={styles.mainImage}
            />
        <Text style={styles.mainText}>
            Real-time Articles and Weather results
        </Text>
    </View>   
     
)

const styles = StyleSheet.create({
    mainView:{
        flex:2, 
        justifyContent: 'center',
        alignItems:'center',
        padding: 5,
                
    },
    mainImage:{
        width: 250, 
        height:250
    },
    mainText:{
        fontSize: 20,
        color:'#597a7b'
    }
})