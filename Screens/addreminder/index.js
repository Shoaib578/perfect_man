import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions,TextInput,Platform,DatePickerAndroid,Alert} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Reminders from "@wiicamp/react-native-reminders";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import 'react-native-get-random-values';

import { v4 as uuidv4 } from 'uuid';


export default class AddReminder extends React.Component {
    state = {
        openCalender:false,
        openTime:false,
        time:'',
        date:new Date(),
        reminderText:'',
        reminderTitle:'',

    }
     showDatePicker = () => {
         
        this.setState({openCalender:true})

      };
    
     hideDatePicker = () => {
      this.setState({openCalender:false})
      };
    
       handleConfirmDate = (date) => {
       this.setState({date:date})
        this.hideDatePicker();
      };
      

      showTimePicker = ()=>{
        this.setState({openTime:true})

      }

      hideTimePicker = () => {
        this.setState({openTime:false})
        };
      
         handleConfirmTime = (time) => {
             console.log(time)
         this.setState({time:time})
         this.hideTimePicker();
        };


        componentDidMount(){
            Reminders.requestPermission();


           
        }

        setReminder = ()=>{
            let timestamp = new Date(this.state.time)
            let date = timestamp.setDate(timestamp.getDate()+this.state.date.getDate())
           
            Reminders.addReminder({
                id:uuidv4(),
                
                title: this.state.reminderTitle,
                note: this.state.reminderText,
                timestamp:new Date(date).valueOf(), // next five minutes from current time (milliseconds)
              }).then(res=>{
                  Alert.alert("Your Reminder Has Been Added")
                  this.setState({time:'',reminderText:'',reminderTitle:''})
              })
              .catch(err=>{
                  Alert.alert(err)
              })

     

              
          
        }

     
    render(){
        return(
            <View style={styles.container}>
                
            <View style={styles.innerContainer}>
            <ScrollView >
            <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'white',marginTop:20}}>Set Date and Time</Text>
            <View style={{flexDirection:'row',justifyContent: 'space-between',padding:20}}>
            <TouchableOpacity  onPress={this.showDatePicker} style={styles.FindShopButton}>
                <FontAwesome name="calendar" color="black" size={22} style={{marginLeft:10}}/>
                    <Text style={{color:'black',textAlign:'center',left:15}}>Date</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={this.showTimePicker} style={styles.FindShopButton}>
                <FontAwesome name="clock-o" color="black" size={22} style={{marginLeft:10}}/>

                    <Text style={{color:'black',textAlign:'center',left:15}}>Time</Text>
             </TouchableOpacity>

            </View>


            <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'white',marginTop:20}}>Reminder Text</Text>

                <View style={{ 
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:13,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:10,backgroundColor:'white',marginLeft:20
                        
                            }}>

                   
                    <TextInput 
                    placeholder="Reminder Text" onChangeText={(val)=>{this.setState({reminderText:val})}} value={this.state.reminderText} numberOfLines={20} placeholderTextColor="black" style={{color:'black'}}/>
                    </View>

                    <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'white',marginTop:20}}>Reminder Title</Text>

                    <View style={{ 
                                borderWidth:1,borderColor:"#DBDBDB",
                                color:"#BB952D",

                                borderRadius:13,height:45,width:Dimensions.get('window').width*2/2.5,marginTop:10,backgroundColor:'white',marginLeft:20
                            
                                }}>

                    
                        <TextInput 
                        placeholder="Reminder Title" value={this.state.reminderTitle} placeholderTextColor="black" onChangeText={(val)=>{this.setState({reminderTitle:val})}} style={{color:'black'}}/>
                        </View>

                    <TouchableOpacity onPress={this.setReminder} style={styles.setReminderButton}>
                            <Text style={{color:'white',textAlign:'center'}}>Set Reminder</Text>
                        </TouchableOpacity>

                        <View style={{marginTop:150}}></View>
            </ScrollView>

            
            <DateTimePickerModal
            isVisible={this.state.openCalender}
            mode="date"
         
            onConfirm={this.handleConfirmDate}
            onCancel={this.hideDatePicker}
        />



        <DateTimePickerModal
            isVisible={this.state.openTime}
            mode="time"
         
            onConfirm={this.handleConfirmTime}
            onCancel={this.hideTimePicker}
        />
         
      
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