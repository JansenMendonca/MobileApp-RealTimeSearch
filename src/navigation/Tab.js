import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from '../views/Main';
import NewsSearch from '../views/NewsSearch';
import WeatherSearch from '../views/WeatherSearch';

const AppTabs = createBottomTabNavigator()


export default props =>{
    return(
    <AppTabs.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size}) => {
        let iconName;
    
        switch(route.name){
            case 'Main':
                iconName = focused ? 'star' : 'star-outline'
                break;
            case 'News':
                iconName = focused ? 'newspaper' : 'newspaper-outline'
                break;
            case 'Weather':
                iconName = focused ? 'partly-sunny' : 'partly-sunny-outline'
                break;
        }
        return <Ionicons name={iconName} size={size} color={color} />
        },
    })}          
    tabBarOptions={{
        activeTintColor: '#597a7b',
        inactiveTintColor: '#add0d1',
        labelStyle: {fontSize:15}
    }}         
        initialRouteName="Main"
        initialRouteName="Main">
        <AppTabs.Screen name="Main" component={Main}/>
        <AppTabs.Screen name="News" component={NewsSearch}/>
        <AppTabs.Screen name="Weather" component={WeatherSearch}/>            
    </AppTabs.Navigator>
    
)}

