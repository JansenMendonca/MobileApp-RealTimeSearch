import React, {useCallback} from 'react';
import {Linking, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default props => {

    const handlePress = useCallback(async () => {
        await Linking.openURL(props.url);
    }, [props.url]);

    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Go to article</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor: '#ebe0e7',
    },
    buttonText:{
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:12,
        textAlign:'center'
    }
})