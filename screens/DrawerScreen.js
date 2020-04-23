import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../Header';
import bookData from '../json/booklist.json';
import Contnet from '../Content';
import Buttom from '../Buttom';
import Drawer from '../Draw';
const DrawerScreen = ({navigation}) => {
  return (
    
       <View style={{flex:1}}>
         <Header/>
         
         
         <Contnet contnet={bookData.bookList}/>
         <Buttom/>
         <View style={{backgroundColor:"black",opacity:0.5,height:1000,position:"absolute",width:420}}>
        
        </View>
        <View style={{opacity:1,position:'absolute'}}>
        <Drawer/>
        </View>

        
         
       
      </View>
      
  );
};
const styles = StyleSheet.create({
  
  
});
export default DrawerScreen;