import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';

export default class Search extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                
            <View style={styles.innerContainer}>
            <ScrollView >
                {/* Set  Current Location starts*/}
                <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'white',marginTop:20}}>Set Current Location</Text>

                <View style={{flexDirection: 'row',alignSelf:'center',borderWidth:1,borderColor:"#DBDBDB",backgroundColor:'white',borderRadius:35,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,}}>
                <Ionicons name="location-outline" color="black" size={20} style={styles.phoneImageStyle}/>
                <Picker         
                style={{color:'black',flex:1}}
                mode="dropdown">
                <Picker.Item label="Current Location" value='' />

                <Picker.Item label="Pakistan" value={1} />
                <Picker.Item label="India" value={0} />
                </Picker>

                </View>


                {/*  Set  Current Location end*/}



                {/* Set  Current Location starts*/}
                <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'white',marginTop:20}}>Set Desire Location</Text>

                <View style={{flexDirection: 'row',alignSelf:'center',borderWidth:1,borderColor:"#DBDBDB",backgroundColor:'white',borderRadius:35,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,}}>
                <Ionicons name="location-outline" color="black" size={20} style={styles.phoneImageStyle}/>
                <Picker         
                style={{color:'black',flex:1}}
                mode="dropdown">
                <Picker.Item label="Desired Location" value='' />

                <Picker.Item label="Pakistan" value={1} />
                <Picker.Item label="India" value={0} />
                </Picker>

                </View>


                {/*  Set  Current Location end*/}


                <MapView
                        style={{width:'100%',height:200,marginTop:10}}
                        provider={PROVIDER_GOOGLE}
                    

                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            
                            }}
                            >
                                
                        </MapView>

                        <TouchableOpacity style={styles.FindShopButton}>
                            <Text style={{color:'white',textAlign:'center'}}>Find Shop</Text>
                        </TouchableOpacity>

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