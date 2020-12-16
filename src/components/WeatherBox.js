import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default props => (
    <View style={styles.weatherBox}>
        <View   style={styles.temp}>
            <Text style={styles.tempN}>{Math.round(props.mainTemp)}</Text>            
            <Text style={styles.tempSup}>&deg;c</Text>
        </View>
        <View style={styles.weather}>
            <Image 
                source={{uri:`https://openweathermap.org/img/wn/${props.icon}@2x.png`}}
                style={styles.image}
            />
            <Text>{props.description}</Text>           
        </View>
        <View style={styles.feels}>
            <Text>Feels like: </Text>
            <Text style={styles.tempFeelsL}>{Math.round(props.feelsLike)}</Text>            
            <Text style={styles.tempSupFeelsL}>&deg;c</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    weatherBox:{
        alignItems:'center',
    },
    temp:{
       flex:1,       
       marginTop:10,
       backgroundColor: '#597a7b',
       borderRadius:10,
       padding:30,
       fontSize:50,
       alignItems:'center',
       flexDirection:'row',
    },
    tempN:{

        textAlignVertical:'center',
        fontSize:40,
        padding:10,
    },  
    tempSup:{
        fontSize:10 * 1.6,
        lineHeight: 12 * 1.1,
        textAlignVertical: 'top',
        shadowColor: 5,
        alignItems:'center',
        padding:5,
    },
    weather:{
        fontSize:48,
        justifyContent:'center',
    },
    image:{
        justifyContent:'center',
        margin:10,
        padding:20,       
    },
    feels:{
        flex:1,
        flexDirection:'row',
        margin:20,
        padding:10,
        alignItems:'center'
    },
    tempFeelsL:{
        textAlignVertical:'center',
        fontSize:20,       
    },
    tempSupFeelsL:{
        fontSize:8 * 1.6,
        lineHeight: 10 * 1.1,
        textAlignVertical: 'top',
        shadowColor: 5,
        alignItems:'center',
    } 

})

