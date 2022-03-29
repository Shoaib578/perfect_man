import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default class Splash extends React.Component {
    state = {
        isLoggedIn:false,
      
      }

    isLoggedIn = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
      
        if(parse == null){
          this.setState({isLoggedIn:false})
        }else{
          this.setState({isLoggedIn:true})
        }
        
        setTimeout(()=>{
          if(this.state.isLoggedIn){
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'home',screen:'HomeScreen' }]
            });
        }else{
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'auth',screen:'signin' }]
            });
        }
        },1000)
        

        
        }

componentDidMount(){
    setTimeout(()=>{
        this.isLoggedIn()

    },800)

   
 
   
    
}
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../Assets/images/perfectman_logo.png')} style={{width:250,height:220}}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    LogoText:{
        color:"white",
        fontWeight:"bold",
        fontSize:50
    }
})