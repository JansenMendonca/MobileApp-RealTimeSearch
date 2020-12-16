# Real Time Search - Mobile App

This is my first Mobile App , that brings together two API search apps, where we can find news and articles about a specific query, and also look for the 
weather on a specific city. This app was built through a windows machine, so it is at first an Android App.

This Mobile App besides React-Native, was built using:

- News API, https://newsapi.org/
- Uses OpenweatherMap API https://openweathermap.org/
- Uses React Hooks
- axios to fetch data from API
- @react-navigation/native 
- @react-navigation/botto-tabs 
- Icons Ionicons: react-native-vector-icons/Ionicos

## Installation

Just clone this repo to your local then, in order to run it locally, you will need Android Studio AVD Manager open, and you will be able to see it.

## Code Schema

I am using a schema divided in folders, with related files that are used accordingly. The Folders and files are:

### Folders

- navigation - contains files index.js ; Tab.js

- components - contains files Search.js; FlatButton.js; OpenUrlButton.js; WeatherBox.js; Location.js

- views - contains files Main.js; NewsSearch.js; WeatherSearch.js

- api - contains file openWeatherMap.js

- images - contains file RT-Search.png

- utils - contains file currentDate.js

## API Reference

News API provides breaking news headlines, and search for articles from news sources and blogs all over the web. Please visit it here: https://newsapi.org/
OpenWeatherMap API is a popular API that provides Current & Forecast weather data collection. Please visit it here: https://openweathermap.org/api

## The Code

This Mobile App has 3 view pages, Main, News and Weather, and uses a combination of Bottom-Tabs navigation with modals.

### MAIN
The Main view is just a static presentation page, and is the initial route by default.

![main screen](https://user-images.githubusercontent.com/18708338/102314533-dab15680-3f2f-11eb-9cf5-548bfeab82a7.JPG)

### NEWS
The News view shows the title News-Artices, a text input field and a search button. Here the query used on the search wil run through an axios request to the News API, 
and will return the articles and news related to that query, on a modal. The modal will list all articles in separate containers which will contain the Article's header, 
a button to open the original article's url, and the source. The Modal can be closed by clicking the X icon on the right top corner.

![news](https://user-images.githubusercontent.com/18708338/102314618-fddc0600-3f2f-11eb-9da8-27af3e0482e6.JPG)

![news - query](https://user-images.githubusercontent.com/18708338/102314679-12b89980-3f30-11eb-847f-d8c99bb5f8c5.JPG)

![news - modal result](https://user-images.githubusercontent.com/18708338/102314722-23690f80-3f30-11eb-98d3-b32de3b7fb3e.JPG)

### WEATHER
The Weather view shows the title City Weather, a text input field and a search button, like the News page, but here the query  will run through and an axios request to 
the OpenWeatherMap API, which will bring on a Modal the City and Country, the current weather rounded up, an image and written description of the weather, and also 
the Feels Like temperature.The Modal can be closed by clicking the X icon on the right top corner.

![weather](https://user-images.githubusercontent.com/18708338/102314765-354ab280-3f30-11eb-95f9-5145b007b0b3.JPG)

![weather - query](https://user-images.githubusercontent.com/18708338/102314809-47c4ec00-3f30-11eb-87eb-a6d7693fdb4d.JPG)

![weather - modal result](https://user-images.githubusercontent.com/18708338/102314838-58756200-3f30-11eb-9e47-9a2924124908.JPG)





