import React,{useState} from 'react';
import {View, Modal, StyleSheet, Text, ScrollView} from 'react-native';
import axios from 'axios';
import {today} from '../utils/currentDate';
import Search from '../components/Search';
import FlatButton from '../components/FlatButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OpenUrlButton from '../components/OpenUrlButton';

export default props => {

    const[query, setQuery] = useState('');
    const[results,setResults] = useState([]);
    const[modalOpen, setModalOpen] = useState(false);

    const URL = 'https://newsapi.org/v2/everything?apiKey=9e9906e1ae674954841e68f222314edb';
    const search = async(text) => {
        if(query){
            const {data} = await axios.get(URL,{
                params:{
                    q:query,
                    from: `${today}&`,
                    sortBy:'popularity&',
                    https:true,                
                },
            });
            setResults(data.articles);
            setInvalid(data.totalResults);
            setQuery('');
        } 
    };

    onSearch = () => { 
        setModalOpen(true)
        return search(query)                
    }

    onCloseModal = () => {
        setModalOpen(false)
        setQuery('')
    }  

    let renderedResults; 
    let keyCount = 1;

    if(results){
        renderedResults = results.map((result) => {
        return(              
            <ScrollView  key={keyCount++} contentContainerStyle={styles.articleList}>
                <Text style={styles.url}>{result.title}</Text>
                    <OpenUrlButton url={result.url}/>
                <Text>Source: {result.source.name}</Text>
            </ScrollView>               
            )
        })
    }          

    return(
        <View style={styles.mainView}>
            <View>
            <Modal visible={modalOpen} animationType='slide'>
                <View>
                    <Ionicons name='close' size={20}  onPress={onCloseModal}/>
                    <View>
                        {renderedResults}
                    </View>                                       
                </View>               
            </Modal>
            <Search query={query} setQuery={setQuery} search={search} title='News - Articles'/>
            <FlatButton btnText='Search' onPress={onSearch}/>
            </View>        
        </View>
    )
}
 


const styles = StyleSheet.create({

    articleList:{
        borderRadius:5,
        width:'100%',
        margin:5,
        marginRight:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#8dbdbf'  
    },
    url:{
        fontSize: 20,
        fontStyle:'italic',
    },

    mainView:{
        flex:1, 
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
    } 
});