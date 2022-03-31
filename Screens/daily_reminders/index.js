import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions,TextInput,Platform,DatePickerAndroid,Alert,ActivityIndicator} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Reminders from "@wiicamp/react-native-reminders";
import CalendarPicker from 'react-native-calendar-picker';

export default class DailyReminders extends React.Component {
    state = {
      reminders:[],
      isLoading:true

    }
    
    getReminders = ()=>{
        Reminders.requestPermission()
        Reminders.getReminders()
        .then(res=>{
         res.forEach(data=>{
             console.log(data)
         })
          this.setState({reminders:res},()=>{
              this.setState({isLoading:false})
          })
        })
    }
     componentDidMount(){
      this.getReminders()
        this.props.navigation.addListener("focus",()=>{
            this.setState({isLoading:true})
            this.getReminders()
        })
    }

     deleteReminder = (id)=>{
         console.log(id)
        Reminders.removeReminder(id)
        .then(res=>{
           
            Alert.alert("Deleted Successfully")
            this.getReminders()
            
        })
     }
    render(){
        if(this.state.isLoading == false){

        return(
            <View style={styles.container}>
              
            <View style={styles.innerContainer}>
          
            <ScrollView >

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Set Reminder')} style={{marginLeft:'80%',top:10}}>
                <FontAwesome name="calendar-plus-o" color="white" size={25}/>
                </TouchableOpacity>
            <View style={{backgroundColor:'white',flex:1,marginTop:60,alignSelf: 'center'}}>
            <CalendarPicker
            
            />
           

        </View>
            <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'white',marginTop:20}}>Upcomming Events</Text>

            {this.state.reminders.map((data,index)=>{
                return(
                    <View key={index} style={{flexDirection:'row',padding:30,}}>
                        <View style={{flexDirection:'row',width:'100%'}}>
                        <Text style={{color:'white',width:'60%'}}> {data.title}</Text>
                        <Text style={{color:'white',width:'30%',color:'#639beb'}}>{new Date(data.alarms[0].timestamp).toLocaleString()}</Text>
                        </View>

                        <View >
                            <TouchableOpacity onPress={()=>this.deleteReminder(data.id)} style={{right:5}}>
                                <FontAwesome name="trash" color="white" size={24}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
                        <View style={{marginTop:150}}></View>
            </ScrollView>

            
           
      
           </View>

        </View>
        )
    }else{
        return  <View style={styles.container}>
                
        <View style={styles.innerContainer}>
            
            
            <ActivityIndicator size="large" color="white" style={{ alignSelf: "center",marginTop:20 }}/>

            </View>
            </View>

    }

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
          backgroundColor:'white',
          borderRadius:20,
          marginTop:20,
          alignSelf: 'center',
          flexDirection:'row',
      
      },
      setReminderButton:{
        width:Dimensions.get('window').width*2/5,
        padding:10,
        backgroundColor:'skyblue',
        borderRadius:20,
        marginTop:20,
        alignSelf: 'center',
       
        alignItems: 'center',
        justifyContent: 'center',
      }
    
  
})