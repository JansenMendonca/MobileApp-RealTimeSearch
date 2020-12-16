import React, {useState} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {openWeatherMap} from '../api/openWeatherMap'; 
import Search from '../components/Search';
import FlatButton from '../components/FlatButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Location from '../components/Location';
import WeatherBox from '../components/WeatherBox';


export default props => {

    const[query, setQuery] = useState('');
    const[weather, setWeather] = useState({});
    const[modalOpen, setModalOpen] = useState(false);

    const search = async(e) => {
        if(query){
            const data = await openWeatherMap(query)
            setWeather(data);
            setQuery('');            
        } 
    }

    onSearch = () => { 
        setModalOpen(true)
        return search(query)                
     }

     onCloseModal = () => {
        setModalOpen(false)
        setQuery('')
     }

    return (
        <View style={styles.mainView}>
            <View>
                <Modal visible={modalOpen} animationType='slide'>
                    <View>
                        <Ionicons name='close' size={20}  onPress={onCloseModal}/>
                        <View>
                            {weather.main && (
                                <View>
                                    <Location 
                                        name={weather.name}
                                        country={weather.sys.country}
                                    />
                                    <WeatherBox 
                                        mainTemp={weather.main.temp}
                                        feelsLike={weather.main.feels_like}
                                        icon={weather.weather[0].icon}
                                        description={weather.weather[0].description}
                                    />
                                </View>
                            )}
                        </View>                                       
                    </View>               
                </Modal>
                <Search query={query} setQuery={setQuery} search={search} title='City Weather'/>
                <FlatButton btnText='Search' onPress={onSearch}/>        
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        flex:1, 
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
    }
})
