import React from 'react';
import { StyleSheet,View, FlatList, Image,TouchableOpacity, Linking,Text} from "react-native";
import { NavigationContainer ,StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

const App = (params) => {
  return (
  
    <NavigationContainer ref={navigationRef}> 
      <Stack.Navigator>
        <Stack.Screen name="mybook" component={AlbumScreen} options={{ 
          headerLeft:()=> 
          <TouchableOpacity 
          onPress={() => navigationRef.current?.navigate("Detail",params)}>
           <Image style={styles.hl} source={require('./src/img/choice.png')}/>
       </TouchableOpacity>,

          headerRight:()=>
            <Image style={styles.hr} source={require('./src/img/search.png')}/>,
     
        
        title:"My Book",
        headerTintColor:'#FFF',
        headerStyle:{backgroundColor:'#00b49f'},
        headerTitleStyle:{fontSize:25},

         }}/>

        <Stack.Screen name="Detail" component={DetailScreen} options={{
          headerLeft:()=> 
          <TouchableOpacity 
          onPress={() => navigationRef.current?.navigate("mybook",params)}>
           <Image style={styles.hl} source={require('./src/img/choice.png')}/>
       </TouchableOpacity>,

          headerRight:()=>
            <Image style={styles.hr} source={require('./src/img/search.png')}/>,
     
        
        title:"My Book",
        headerTintColor:'#FFF',
        headerStyle:{backgroundColor:'#00b49f'},
        headerTitleStyle:{fontSize:25},
        }}/>     
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles =  StyleSheet.create({
  hl:
  {
    width:40,
    height:40,
    left:15
  },
 
  ht:{
    width:80,
    height:25,
    left:5,
    top:10
  
  },
  hr:
  {
    flexDirection:"row",
    width:40,
    height:40,
    right:15
  },
  hr1:
  {
    width:25,
    height:23,
    right:45
  },
  hr2:
  {
    width:25,
    height:25,
    right:25
  }
});

export default App;