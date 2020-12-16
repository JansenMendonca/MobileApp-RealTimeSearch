
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed. Tellus cras adipiscing enim eu turpis egestas pretium. Mi ipsum faucibus vitae aliquet nec ullamcorper. Lectus quam id leo in vitae turpis massa sed. Eu consequat ac felis donec et odio pellentesque. Interdum velit euismod in pellentesque massa placerat duis. Habitant morbi tristique senectus et. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Eu non diam phasellus vestibulum lorem sed risus ultricies.

          Nibh sit amet commodo nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Nunc sed blandit libero volutpat sed cras. Lectus arcu bibendum at varius vel pharetra vel. Duis at tellus at urna condimentum mattis pellentesque id nibh. Dolor sed viverra ipsum nunc aliquet. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Molestie at elementum eu facilisis sed odio morbi quis commodo. Nisl rhoncus mattis rhoncus urna. Tellus pellentesque eu tincidunt tortor aliquam. Enim sed faucibus turpis in eu mi bibendum neque egestas. At augue eget arcu dictum varius duis. Nibh ipsum consequat nisl vel. Nibh praesent tristique magna sit amet purus. Mauris a diam maecenas sed enim ut sem viverra aliquet. Egestas dui id ornare arcu odio ut. Sagittis orci a scelerisque purus semper eget duis. Neque laoreet suspendisse interdum consectetur.
          
          Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Molestie a iaculis at erat. Facilisis sed odio morbi quis commodo odio. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Dignissim enim sit amet venenatis urna cursus eget. Risus pretium quam vulputate dignissim suspendisse. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Nisi scelerisque eu ultrices vitae. Pellentesque massa placerat duis ultricies lacus sed. Nibh tellus molestie nunc non blandit massa enim nec. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.
          
          Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Dui nunc mattis enim ut tellus elementum. Arcu dictum varius duis at consectetur. Maecenas accumsan lacus vel facilisis. Volutpat diam ut venenatis tellus in metus vulputate eu. Lectus sit amet est placerat in egestas erat imperdiet. Interdum velit euismod in pellentesque massa placerat duis ultricies. Tristique senectus et netus et malesuada fames ac turpis. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Risus commodo viverra maecenas accumsan. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Cras ornare arcu dui vivamus arcu felis bibendum. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Libero enim sed faucibus turpis in eu mi bibendum neque. Elementum pulvinar etiam non quam. Mi proin sed libero enim sed faucibus turpis in. Amet aliquam id diam maecenas ultricies mi. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Felis eget velit aliquet sagittis id.
          
          Ultrices sagittis orci a scelerisque purus semper. Tincidunt vitae semper quis lectus nulla at volutpat. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Dui sapien eget mi proin sed libero enim sed. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Elit scelerisque mauris pellentesque pulvinar pellentesque. Eu feugiat pretium nibh ipsum. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Adipiscing commodo elit at imperdiet. Tortor at auctor urna nunc id. Id semper risus in hendrerit gravida rutrum quisque non tellus. Nulla facilisi nullam vehicula ipsum.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
