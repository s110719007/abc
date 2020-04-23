import React from "react";
import { StyleSheet, Text, View, Image,ScrollView} from "react-native";
import bookData from "./json/booklist.json";
const Contents =() =>{
    
    return(
        <ScrollView>
        <View style={styles.back}>
            <View style={styles.box1}>
                <View style={styles.picback}>
                    <Image
                        style={styles.pic}
                        source={{uri:bookData.bookList[0].image}}/>
                </View>
                <View>
                    <Text style={styles.title}>{bookData.bookList[0].title}</Text>
                    <Text style={styles.artist}>{bookData.bookList[0].artist}</Text>
                    <Text style={styles.des}>{bookData.bookList[0].description}</Text>
                    <View style={styles.statusshow}>
                        <View style={styles.rate}></View>
                    </View>
                    <Text style={styles.status}>{bookData.bookList[0].status}</Text>
                </View>
                
            </View>
            <View style={styles.box1}>
                <View style={styles.picback}>
                    <Image
                        style={styles.pic}
                        source={{uri:bookData.bookList[1].image}}/>
                </View>
                <View>
                    <Text style={styles.title}>{bookData.bookList[1].title}</Text>
                    <Text style={styles.artist}>{bookData.bookList[1].artist}</Text>
                    <Text style={styles.des}>{bookData.bookList[1].description}</Text>
                    <View style={styles.statusshow}></View>
                    <Image
                        source={require('./img/btn_start_read.png')}
                        style={styles.statuspic}
                        />
                </View>
                
            </View>
            <View style={styles.box1}>
                <View style={styles.picback}>
                    <Image
                        style={styles.pic}
                        source={{uri:bookData.bookList[2].image}}/>
                </View>
                <View>
                    <Text style={styles.title}>{bookData.bookList[2].title}</Text>
                    <Text style={styles.artist}>{bookData.bookList[2].artist}</Text>
                    <Text style={styles.des}>{bookData.bookList[2].description}</Text>
                    <View style={styles.statusshow}></View>
                    <Image
                        source={require('./img/btn_start_read.png')}
                        style={styles.statuspic}
                        />
                </View>
                
            </View>
            
        </View>
        </ScrollView>
      
    )
}
const styles = StyleSheet.create({
   
    back:{
        height:570,
        backgroundColor:'#f8f8f8',
    },
    box1:{
        width:420,
        height:190,
        marginLeft:0,
        borderBottomWidth:1,
        borderColor:'#d1d1d1'
        
    },
    picback:{
        width:109,
        height:156,
        marginLeft:18,
        marginTop:12,
        backgroundColor:'#f8f8f8',
        shadowColor: "#40000000",
        borderWidth:1,
        borderColor:'#d1d1d1',
    },
    pic:{
        
        width:103,
        height:150,
        marginLeft:2,
        marginTop:2,
        
    },
    title:{
        width:300,
        height:22,
        marginTop:-132,
        marginLeft:168,
        fontSize:18,
        
        color:'#2e2e2e',
        fontWeight:'bold'
    },
    artist:{
        width:194,
        height:18,
        marginLeft:168,
        marginTop:11,
        fontSize:14,
        color:'#717171',
    },
    des:{
        width:210,
        height:30,
        fontSize:12,
        color:'#b1b1b1',
        marginLeft:168,
        marginTop:11
    },
    statusshow:{
        width:194,
        height:3,
        borderRadius:3,
        backgroundColor:'#c3c3c3',
        marginLeft:168,
        marginTop:10,
       
    },
    rate:{
        width:97,
        height:3,
        borderRadius:3,
        backgroundColor:'#70b4a1',
       
    },
    status:{
        width:178,
        height:16,
        fontSize:12,
        color:'#b1b1b1',
        marginLeft:168,
        marginTop:9,
    },
    statuspic:{
        width:87,
        height:26,
        marginTop:6,
        marginLeft:166,
        zIndex:-1,
       
    }
    
});
    export default Contents;