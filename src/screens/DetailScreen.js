import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import albumData from "../json/albums.json";
import DetailDetail from "../components/DetailDetail";

const DetailScreen = ({navigation,album}) => {

  return (
    <View style={{flex: 1}}>
      {/* <FlatList
      data={albumData.detailList}
      renderItem={({ item }) => 
      <DetailDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />  */}
   
    <View style={styles.tab}> 
       <View style={styles.tabbottom}>
          <Image
            source={{uri :"https://i.imgur.com/dgBchnt.png"}}
            style={styles.home} />
          <Text style={styles.t_home}>Home</Text>
       </View>
      <View style={styles.tabbottom}>
        <Image
          source={{uri :"https://i.imgur.com/mykE58D.png"}}
          style={styles.mybook}/>
        <Text style={styles.t_mybook}>My Book</Text>
      </View>
      <View style={styles.tabbottom}>
        <Image
          source={{uri :"https://i.imgur.com/D3VQRAI.png"}}
          style={styles.favorite}/>
            <Text style={styles.t_favorite}>Favorite</Text>
      </View>
      </View>
      <View style={styles.bg1}></View>
      <View style={styles.bg2}>
        <View style={styles.bg3}>
         <Image
          style={{width:70,height:70,marginTop:37,marginLeft:13}}
          source={{uri:"https://i.imgur.com/tJ7vVmF.png"}}/>
         <Text style={{fontSize:16,color:"#FFF",marginLeft:25,marginTop:10}}>GamexHCl</Text>
         <Text style={{fontSize:16,color:"#FFF",marginLeft:25,marginTop:10}}>gdlab2017@gmail.com</Text>
        </View>
        <View style={styles.bg4}>
        <Image
            source={{uri :"https://i.imgur.com/dgBchnt.png"}}
            style={{width:32,height:32,marginLeft:30,marginTop:-10}} />
          <Text style={{fontSize:14,marginLeft:32,color:"#5c5c5c",fontWeight:"bold"}}>Home</Text>
        </View>
        <View style={styles.bg5}>
        <Image
            source={{uri :"https://i.imgur.com/e6II5yG.png"}}
            style={{width:32,height:32,marginLeft:30,marginTop:10}} />
          <Text style={{fontSize:14,marginLeft:32,marginTop:18,color:"#FFF",fontWeight:"bold"}}>My Book</Text>
        </View>
        <View style={styles.bg6}>
        <Image
            source={{uri :"https://i.imgur.com/D3VQRAI.png"}}
            style={{width:32,height:32,marginLeft:30,marginTop:10}} />
          <Text style={{fontSize:14,marginLeft:32,marginTop:18,color:"#5c5c5c",fontWeight:"bold"}}>Favorites</Text>
        </View>
        <View style={styles.bg7}>
        <Image
            source={{uri :"https://i.imgur.com/NsQHuGr.png"}}
            style={{width:32,height:32,marginLeft:30,marginTop:10}} />
          <Text style={{fontSize:14,marginLeft:32,marginTop:18,color:"#5c5c5c",fontWeight:"bold"}}>Settings</Text>
        </View>
        <View style={styles.bg8}>
        <Image
            source={{uri :"https://i.imgur.com/jgfLSA0.png"}}
            style={{width:32,height:32,marginLeft:30,marginTop:10}} />
          <Text style={{fontSize:14,marginLeft:32,marginTop:18,color:"#5c5c5c",fontWeight:"bold"}}>About us</Text>
        </View>
      </View>
      
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabbottom:{
    flexDirection:"column",
    backgroundColor:'#FBFCFC',
    height:60,
    width:140,
    padding:12,
    marginTop:540
    // paddingLeft:140,
    // paddingTop:13,

},
tab:{
  flexDirection:"row",
  justifyContent:"flex-start"
},
home:{
    width:25,
    height:22,
    marginLeft:45
},
mybook:{
  width:25,
  height:22,
  marginLeft:25
  
},
favorite:{
  width:25,
  height:22,
  marginLeft:5
},
t_home:{
  color:'#818181',
  fontSize:14,
  marginLeft:40 
},
t_mybook:{
  color:'#00b49f',
  fontSize:16,
  fontWeight:"bold",
  marginLeft:5

},
t_favorite:{
  color:'#818181',
  fontSize:14,
  marginLeft:-5
},
bg1:
{
  position:"absolute",
  height:1000,
  width:400,
  backgroundColor:"#000",
  opacity:0.5,
},
bg2:
{
  position:"absolute",
  backgroundColor:"#ebebeb",
  width:304,
  height:640,
  shadowColor:"#404040",
  shadowOffset:{width:0,height:0},
  shadowOpacity:5,
},
bg3:
{
  position:"absolute",
  backgroundColor:"#00b49f",
  width:304,
  height:180
},
bg4:{

  flexDirection:"row",
  paddingTop:200,
  marginBottom:10

},
bg5:{
  width:304,
  height:54,
  flexDirection:"row",


  backgroundColor:"#00b49f"
},
bg6:{
  width:304,
  height:54,
  flexDirection:"row",

},
bg7:{
  width:304,
  height:54,
  flexDirection:"row",

},
bg8:{
  width:304,
  height:54,
  flexDirection:"row",

},
});
export default DetailScreen;

