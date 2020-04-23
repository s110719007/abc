import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, iconPath } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bookData from "./json/booklist.json";
import { navigationRef } from './RootNavigation';
import BookScreen from './screens/BookScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerScreen from './screens/DrawerScreen';
import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
  from '@react-navigation/drawer';
import { Tile } from 'react-native-elements';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const aboutScreen = () =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{       
        fontSize:16,
        marginLeft:28,
        marginTop:-45,
        color:"#000000",
        fontWeight:"500"}}>about us</Text>
    </View>
  );
  
}

const SettingScreen = () =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{       
        fontSize:16,
        marginLeft:28,
        marginTop:-45,
        color:"#000000",
        fontWeight:"500"}}>settings</Text>
    </View>
  );
  
}

const FavScreen = () =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{       
        fontSize:16,
        marginLeft:28,
        marginTop:-45,
        color:"#000000",
        fontWeight:"500"}}>Favorites</Text>
    </View>
  );
}
const AlbumStack = () => {
  return (
    
     
    <Stack.Navigator>
   
      <Stack.Screen name="Home" component={BookScreen}
      options={{
        title: bookData.bookTitle,
        headerStyle:{ backgroundColor:'#00b49f',
                      height:80,
                      
                      
                      
      },
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20,
          color:'#ffffff',
         
          
          
        }, 
        headerLeft: () => (
          <TouchableOpacity  onPress={() =>navigationRef.current?.navigate("Draw")}>
           <Image 
 
              source={require('./img/btn_navbar_mobile.png')
            }
                style={{width:40,height:40,marginLeft:8,marginTop:8}}
                />
            </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image 
 
              source={
                require('./img/btn_search.png')}
                style={{width:40,height:40,marginRight:8,marginTop:8}}
                />
              
              
            
            </TouchableOpacity>
        ),
      }}
    />
       <Stack.Screen 
     name="Draw" 
      component={DrawerScreen} 
      options={{
        title: bookData.bookTitle,
        headerStyle:{ backgroundColor:'#00b49f',
                      height:80, 
                      
                      
                      
      },
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20,
          color:'#ffffff',
         
          
        }, 
        headerLeft: () => (
          <TouchableOpacity  onPress={() =>navigationRef.current?.navigate("Home")}>
           <Image 
 
              source={require('./img/btn_navbar_mobile.png')
            }
                style={{width:40,height:40,marginLeft:8,marginTop:8}}
                />
            </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image 
 
              source={
                require('./img/btn_search.png')}
                style={{width:40,height:40,marginRight:8,marginTop:8}}
                />
              
              
            
            </TouchableOpacity>
        ),
      }}
     
       />
     
      
      </Stack.Navigator>
   
    

  );
}

const HomeScreen = () =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{       
      fontSize:16,
      marginLeft:28,
      marginTop:-45,
      color:"#000000",
      fontWeight:"500"}}>Home</Text>
  </View>
  );
  
}



const CustomDrawerContent = ({ ...rest }) => {
  return (
    <DrawerContentScrollView style={{marginTop: -48,}} {...rest}>
      <View style={{flexDirection:"row"}}>
        <View>
      <Tile
        imageSrc={{ uri: "https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/1F767D0E-8782-4DBA-B332-72CEAE9CCEE8.png"}}
        imageContainerStyle={{height:90, width:90, }}
        containerStyle={{
          width:300,
          height:240,
          paddingLeft:20,
          paddingTop:70,
          backgroundColor:"#00b49f",
        }}
        featured
      />
      <View>
      <Text style={{         
        fontSize:14,
        marginLeft:28,
        marginTop:-35,
        color:"#ffffff", }}>gdlab2017@gmail.com</Text>
        <Text style={{       
        fontSize:16,
        marginLeft:28,
        marginTop:-45,
        color:"#ffffff",
        fontWeight:"500"}}>GamexHCl</Text>
          </View>
         </View>

      <View style={{height:240,width:48,backgroundColor:"#00b49f"}}>
        <Image 
                  source={{
                      uri: "https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/076B92EC-4D67-4177-8360-D8BD5F7FA132.svg"
                  }}
                  style={{        
                    width:33,
                    height:33,
                    marginTop:180,}}
                  />
      </View>
      </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
}
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}> 
    
    <Drawer.Navigator 
      drawerStyle={{ width: 348,}}
      drawerContentOptions={{
        activeBackgroundColor: '#00b49f',
        activeTintColor:'#fff',
        itemStyle: { marginLeft: 0, marginRight: 0 },
        labelStyle: { fontSize: 18 },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={
          {
            drawerIcon: ({ tintColor }) => (
              <Image 
              source={require("./img/icon_bottomnav_home.png")}
              style={{ width:35, height:35, marginLeft:25, marginTop:10,  marginBottom:12,}}
              />
            ),            
          }
        }
        />
      <Drawer.Screen 
        name="My Book" 
        component={AlbumStack} 
        options={
          {
            drawerIcon: ({ tintColor }) => (
              <Image
                source={require("./img/icon_bottomnav_mybook.png")}
                style={{width:35, height:35, marginLeft:25, marginTop:10,  marginBottom:12,tintColor:tintColor}}
              />
            ),            
          }
        }
      />    
      <Drawer.Screen 
        name="Favorites" 
        component={FavScreen} 
        options={
          {
            drawerIcon: ({ tintColor }) => (
              <Image
              source={require("./img/icon_bottomnav_favorites.png")}
                style={{width:35, height:35, marginLeft:25, marginTop:10,  marginBottom:12,}}
              />
            ),            
          }
        }
      />  
       <Drawer.Screen 
        name="Settings" 
        component={SettingScreen} 
        options={
          {
            drawerIcon: ({ tintColor }) => (
              <Image
              source={require("./img/icon_drawer_setting.png")}
                style={{width:35, height:35, marginLeft:25, marginTop:10, marginBottom:12,}}
              />
            ),            
          }
        }
      />  
               <Drawer.Screen 
        name="About us" 
        component={aboutScreen} 
        options={
          {
            drawerIcon: ({ tintColor }) => (
              <Image
              source={require("./img/icon_drawer_aboutus.png")}
                style={{width:35, height:35, marginLeft:25, marginTop:10, marginBottom:12,}}
              />
            ),            
          }
        }
      /> 
      </Drawer.Navigator>

    </NavigationContainer>
    
  );
}

export default App;