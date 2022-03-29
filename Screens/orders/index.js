import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';

export default class Orders extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                
            <View style={styles.innerContainer}>
            <ScrollView >
            
                        <View style={{marginTop:150}}></View>
            </ScrollView>

         

           </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#d6eef8'
    },
    innerContainer:{
        width:'100%',
      
        marginTop:'20%',
        borderColor:'black',
        borderWidth:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%',
        backgroundColor:'black'
    },
    phoneImageStyle:{
        padding: 0,
        marginLeft:7,  
    
      
        alignItems: 'center',
        margin:12,
        marginLeft:20
      },
      FindShopButton:{
          width:Dimensions.get('window').width*2/5,
          padding:10,
          backgroundColor:'skyblue',
          borderRadius:20,
          marginTop:20,
          alignSelf: 'center',
      }
    
  
})