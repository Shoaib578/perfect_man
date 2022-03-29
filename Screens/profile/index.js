import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions,TextInput} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
export default class Profile extends React.Component {
    render(){
        return(
           
            <View style={styles.container}>
                <Image source={require('../../Assets/images/avatar.png')}  style={{position:'absolute',top:'7%',zIndex:2,width:110,height:110}}/>
                
                <View style={styles.innerContainer}>

                <ScrollView>

                 <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:55,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:100,alignSelf: 'center',backgroundColor:'white',
                        
                            }}>

                    <Feather name="user" color="black" size={25}  style={styles.imageStyle}/>
                    <TextInput 
                    placeholder="Name" placeholderTextColor="black" style={{flex:1,color:'black'}}/>
                    </View>




                    <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:55,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:20,alignSelf: 'center',backgroundColor:'white',
                        
                            }}>

                    <Feather name="mail" color="black" size={25}  style={styles.imageStyle}/>
                    <TextInput 
                    placeholder="Email" placeholderTextColor="black" style={{flex:1,color:'black'}}/>
                    </View>







                    
                    <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:55,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:20,alignSelf: 'center',backgroundColor:'white',
                        
                            }}>

                    <Feather name="phone" color="black" size={25}  style={styles.imageStyle}/>
                    <TextInput 
                    placeholder="Phone Number" placeholderTextColor="black" style={{flex:1,color:'black'}}/>
                    </View>




                    <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:55,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:20,alignSelf: 'center',backgroundColor:'white',
                        
                            }}>

                    <Feather name="phone" color="black" size={25}  style={styles.imageStyle}/>
                    <TextInput 
                    placeholder="Phone Number" placeholderTextColor="black" style={{flex:1,color:'black'}}/>
                    </View>



                    <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:55,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:20,alignSelf: 'center',backgroundColor:'white',
                        
                            }}>

                    <Feather name="user" color="black" size={25}  style={styles.imageStyle}/>
                    <TextInput 
                    placeholder="Username" placeholderTextColor="black" style={{flex:1,color:'black'}}/>
                    </View>

                    

                    <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:55,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:20,alignSelf: 'center',backgroundColor:'white',
                        
                            }}>

                    <Feather name="lock" color="black" size={25}  style={styles.imageStyle}/>
                    <TextInput 
                    placeholder="Password" secureTextEntry placeholderTextColor="black" style={{flex:1,color:'black'}}/>
                    </View>




                    <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:55,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:20,alignSelf: 'center',backgroundColor:'white',
                        
                            }}>

                    <Feather name="lock" color="black" size={25}  style={styles.imageStyle}/>
                    <TextInput 
                    placeholder="Confirm Password" secureTextEntry placeholderTextColor="black" style={{flex:1,color:'black'}}/>
                    </View>

                    <TouchableOpacity style={styles.FindShopButton}>
                            <Text style={{color:'white',textAlign:'center'}}>Save Changes</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.FindShopButton}>
                            <Text style={{color:'white',textAlign:'center'}}>Delete Profile</Text>
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
      imageStyle: {
        padding: 0,
        marginLeft:20,
        margin: 10,
     
        
        alignItems: 'center',
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