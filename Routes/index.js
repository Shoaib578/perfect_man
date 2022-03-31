import React,{useEffect, useRef,useState,} from 'react';
import {Text,Animated,View,Dimensions,Platform,TouchableOpacity,Image} from 'react-native'
import { createStackNavigator,CardStyleInterpolators  } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerActions from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Home from '../Screens/viewshop';
import Search from '../Screens/search';
import Profile from '../Screens/profile';
import Shops from '../Screens/shops';
import Orders from '../Screens/orders';
import Splash from '../Screens/splash';
import Signin from '../Screens/auth/signin';
import {createDrawerNavigator, } from '@react-navigation/drawer';
import AddReminder from '../Screens/addreminder';
import DailyReminders from '../Screens/daily_reminders';
import ViewShop from '../Screens/viewshop';
import Intro from '../Screens/intro';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function getWidth() {
    let width = Dimensions.get("window").width
  
    // Horizontal Padding = 20...
    width = width - 80
  
    // Total five Tabs...
    return width / 5
  }

 export default function  RootNavigator (){
    return(
     
    <Stack.Navigator initialRouteName="splashscreen" screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
    <Stack.Screen name='splashscreen' component={SplashNavigator} options={{headerShown:false}}/>
    <Stack.Screen name='auth' component={AuthNavigator} options={{headerShown:false}}/>
    <Stack.Screen name='home' component={HomeNavigator} options={{headerShown:false}}/>
    {/* <Stack.Screen name='home' component={DrawerNavigator} options={{headerShown:false}}/> */}

    </Stack.Navigator>
    )
    }

    const headerRight = ()=>(
        <TouchableOpacity style={{backgroundColor:'#57b5b6',borderColor:'#57b5b6',borderWidth:1,borderRadius:10,right:'5%',padding:6,marginTop:5}}>
            <AntDesign name="setting" color="white" size={33}/>
        </TouchableOpacity>
    )
    

    const headerLeft = (navigation)=>(
        <TouchableOpacity  style={{backgroundColor:'#57b5b6',borderColor:'#57b5b6',borderWidth:1,borderRadius:10,left:'10%',padding:6,marginTop:5}}>
            <FontAwesome5 name="list" color="white" size={33}/>
        </TouchableOpacity>
    )


    const HomeStack = ({navigation})=>{
        return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerRight:()=>headerRight(),headerTransparent:true,headerLeft:()=>headerLeft(navigation),}}/>
        </Stack.Navigator>

        )
        
    }


    const ShopStack = ({navigation})=>{
        return(
            <Stack.Navigator initialRouteName="Shops" >
                <Stack.Screen name="Shops" component={Shops} options={{headerRight:()=>headerRight(),headerTransparent:true,headerLeft:()=>headerLeft(navigation),}}/>
                <Stack.Screen name="ViewShop" component={ViewShop} options={{headerRight:()=>headerRight(),headerTransparent:true,headerLeft:()=>headerLeft(navigation),}}/>

            </Stack.Navigator>
        )
    }

    const SearchStack = ({navigation})=>{
        return(
            <Stack.Navigator initialRouteName="Search" >
            <Stack.Screen name="Search" component={Search} options={{headerRight:()=>headerRight(),headerTransparent:true,headerLeft:()=>headerLeft(navigation),}}/>
        </Stack.Navigator>
        )
    }



    const ProfileStack = ({navigation})=>{
        return(
            <Stack.Navigator initialRouteName="Profile" >
            <Stack.Screen name="Profile" component={Profile} options={{headerRight:()=>headerRight(),headerTransparent:true,headerLeft:()=>headerLeft(navigation),}}/>
        </Stack.Navigator>
        )
    }


    const OrdersStack = ({navigation})=>{
        return(
            <Stack.Navigator initialRouteName="Orders" >
            <Stack.Screen name="Orders" component={Orders} options={{headerRight:()=>headerRight(),headerTransparent:true,headerLeft:()=>headerLeft(navigation),}}/>
        </Stack.Navigator>
        )
    }



    // const DrawerNavigator = ({navigation})=>{
    //     return(
          
    //     <Drawer.Navigator initialRouteName="Home">
    //         <Drawer.Screen name="DrawerHome" component={HomeNavigator} options={{headerShown:false,drawerLabel:'Home'}}/>
    //         <Drawer.Screen name="set_reminder" component={AddReminderDrawer} options={{headerShown:false,drawerLabel:'Set Reminder'}}/>
    //         <Drawer.Screen name="daily_reminders" component={DailyReminderDrawer} options={{headerShown:false,drawerLabel:'Daily Reminders'}}/>
            
    //     </Drawer.Navigator>
     
    //     )
    // }


    
    const DailyReminderStack = ({navigation})=>(
        <Stack.Navigator initialRouteName="Add Reminder">
      
      <Stack.Screen name="Daily Reminders" component={DailyReminders} options={{headerTransparent:true,headerRight:()=>headerRight(),headerLeft:()=>headerLeft(navigation),}}/>
      <Stack.Screen name="Set Reminder" component={AddReminder} options={{headerTransparent:true,headerRight:()=>headerRight(),headerLeft:()=>headerLeft(navigation),}}/>
      
      </Stack.Navigator>
    )


    const HomeNavigator = (props)=>{
     
     const tabOffsetValue = useRef(new Animated.Value(0)).current;
     return(
  
     <Tab.Navigator  tabBarOptions={{
        
        keyboardHidesTabBar: true,
       
       
        tabStyle:{
            backgroundColor:'#696969'
        }
         
       }} initialRouteName="Home">
 
     
 
             <Tab.Screen name='search' component={SearchStack} options={{
                 headerShown:false,
                 tabBarLabel: 'Search',
                 tabBarInactiveTintColor:'white',
                 tabBarIcon: ({ focused }) => (
                 <View style={{
                 // centring Tab Button...
                 position: 'absolute',
                
                 }}>
                 <FontAwesome5
                     name="search"
                     size={22}
                     color={focused ? '#639beb' : 'white'}
                 ></FontAwesome5>
                 </View>
             )
             }} listeners={({ navigation, route }) => ({
             // Onpress Update....
             tabPress: e => {
                 Animated.spring(tabOffsetValue, {
                 toValue: getWidth(),
                 useNativeDriver: true
                 }).start();
             }
             })}/>
 
 
 
 
        <Tab.Screen name='profile' component={ProfileStack} options={{
                 tabBarLabel: 'Profile',
            
                 headerShown:false,
            tabBarInactiveTintColor:'white',

                 tabBarIcon: ({ focused }) => (
                 <View style={{
                 // centring Tab Button...
                 position: 'absolute',
                
                 }}>
                 <FontAwesome5
                     name="user"
                     size={22}
                     color={focused ? '#639beb' : 'white'}
                 ></FontAwesome5>
                 </View>
             )
             }} listeners={({ navigation, route }) => ({
             // Onpress Update....
             tabPress: e => {
                 Animated.spring(tabOffsetValue, {
                 toValue: getWidth(),
                 useNativeDriver: true
                 }).start();
             }
             })}/>
 
         
         <Tab.Screen name="Home" component={DailyReminderStack}  options={{
        tabBarInactiveTintColor:'white',

                     headerTransparent:false,
                    headerShown:false,
                     headerTintColor:"#57b5b6",
                     
                     tabBarLabel:' ',
                     
                     tabBarIcon: ({ focused }) => (
 
                         <View style={{
                             width: 70,
                             height: 70,
                             backgroundColor: focused ? '#639beb' : 'gray',
                             borderRadius: 70,
                             justifyContent: 'center',
                             alignItems: 'center',
                             marginBottom: Platform.OS == "android" ? 40  : 20,
                             position:'relative'
                         }}>
                     
                     <FontAwesome5
                     name="home"
                     size={28}
                     color='white'
                 ></FontAwesome5>
                     
                     </View>
                 )
                 }} />
                
 
 
                <Tab.Screen name='Shop' component={ShopStack} options={{
        tabBarInactiveTintColor:'white',

                 headerShown:false,
                 tabBarIcon: ({ focused }) => (
                 <View style={{
                 // centring Tab Button...
                 position: 'absolute',
                
                 }}>
                 <Entypo
                     name="shop"
                     size={22}
                     color={focused ? '#639beb' : 'white'}
                 ></Entypo>
                 </View>
             )
             }} listeners={({ navigation, route }) => ({
             // Onpress Update....
             tabPress: e => {
                 Animated.spring(tabOffsetValue, {
                 toValue: getWidth(),
                 useNativeDriver: true
                 }).start();
             }
             })}/>
 
 
        

            <Tab.Screen name='orders' component={OrdersStack} options={{
        tabBarInactiveTintColor:'white',
        tabBarLabel: 'Orders',

                 headerShown:false,
                 tabBarIcon: ({ focused }) => (
                 <View style={{
                 // centring Tab Button...
                 position: 'absolute',
                
                 }}>
                 <FontAwesome5
                     name="shopping-cart"
                     size={22}
                     color={focused ? '#639beb' : 'white'}
                 ></FontAwesome5>
                 </View>
             )
             }} listeners={({ navigation, route }) => ({
             // Onpress Update....
             tabPress: e => {
                 Animated.spring(tabOffsetValue, {
                 toValue: getWidth(),
                 useNativeDriver: true
                 }).start();
             }
             })}/>


 
         </Tab.Navigator>
        
     )
         
     }



     const AuthNavigator = ()=>(
        <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}} >
            <Stack.Screen name='intro' options={{headerShown:false}} component={Intro}/>
            
            <Stack.Screen name='signin' options={{headerTransparent:true,headerTitle:' ',headerTintColor:'white'}} component={Signin}/>
         


           
           

        </Stack.Navigator>
    )




    const SplashNavigator = ()=>(
        <Stack.Navigator initialRouteName="splash" >
            <Stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>

        </Stack.Navigator>
    )