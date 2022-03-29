import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions,TextInput} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
export default class Signin extends React.Component {
    render(){
        return(
           
            <View style={styles.container}>

<Text style={{color:'black',fontWeight:'bold',marginRight:'55%',fontSize:20,marginTop:20}}>SIGN IN</Text>

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

                    <Feather name="lock" color="black" size={25}  style={styles.imageStyle}/>
                    <TextInput 
                    placeholder="Password" secureTextEntry placeholderTextColor="black" style={{flex:1,color:'black'}}/>
                    </View>

                    <TouchableOpacity onPress={()=>{
                             this.props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'home',screen:'HomeScreen' }]
                            });
                    }} style={styles.FindShopButton}>
                            <Text style={{color:'white',textAlign:'center'}}>Signin</Text>
                        </TouchableOpacity>
                
                <View style={styles.innerContainer}>

                <ScrollView>
                <Text style={{color:'white',fontWeight:'bold',marginLeft:40,fontSize:20,top:20}}>Register</Text>
                 <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:55,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:50,alignSelf: 'center',backgroundColor:'white',
                        
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
                            <Text style={{color:'white',textAlign:'center'}}>Register</Text>
                        </TouchableOpacity>


                      

                     <View style={{marginTop:300}}></View>       


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
      
        marginTop:'10%',
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