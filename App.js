import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome' ;
import { StyleSheet,Image,TextInput, Text,TouchableOpacity, KeyboardAvoidingView,View } from 'react-native';


const backgroundPic = require ('./img/background.jpg');
const logo    =      require('./img/logo.gif');
export default class App extends React.Component {
  render() {
    return (
       
         
         < Image 
          style = {[styles.backgroundImg,styles.container]}
           
          source = {backgroundPic}
          resizeMode = "cover"
         >
          < KeyboardAvoidingView behavior= "padding" >
          <View
          
         
          />
         <View style = {styles.logoContainer}>
           
              <Image
              source = {logo}
              />
          </View>
         
           <View style = {styles.inputContainer}>
            
          < Text> Email</Text>
           <  TextInput
                style={styles.input}
                underlineColorAndroid="transparent"         
                returnKeyType= "next"
           />
             <FontAwesome name = "user" size ={30} style= {styles.iconsize}/>
          </View>
          < View style = {styles.passwordContainer}>
         
        
           < Text> Password</Text>
           <  TextInput
                style={styles.password}
                secureTextEntry
                underlineColorAndroid="transparent"
                returnKeyType= "go"
                 
           />
            <FontAwesome name = "lock" size ={30} style= {styles.iconsize}
               
             
            />
           
           </View>
           <TouchableOpacity activeOpacity ={.5}>
               <View style= {styles.loginContainer}>
               <Text style = {styles.login}>Log In</Text>
           </View>
           </TouchableOpacity>
                       
               <TouchableOpacity activeOpacity= {.5}>
                   <View style ={styles.forgotpasswordContainer}>
                   <Text style={styles.forgotPassword}>Forgot Password? </Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity= {.5}>
              <View>
                   <Text style={styles.SignUp}>SignUp  </Text>
              </View>
              </TouchableOpacity>
               
  
               
              <View style={styles.container}/> 
               </ KeyboardAvoidingView>         
             </Image>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
   height : null,
   width : null,
  },
  logoContainer :{
    flexGrow :1,
    marginBottom: 20,
    alignItems : 'center',
    paddingVertical : 120,
    height:2,
  },
  inputContainer : {
    padding : 22,
    paddingVertical : 15,
    marginBottom: 3,  
  },
  input : {
   color  : "#2c3e50",
   height : 35,
   fontSize: 15,
   backgroundColor : '#ecf0f1', 
  },
  passwordContainer:{
   padding : 22,
   marginBottom: 20,  
   paddingVertical : 15,
  },

 password:{
  color  : "#2c3e50",
  height : 35,
  fontSize: 18,
  backgroundColor : '#ecf0f1', 
 },
 loginContainer:{
  padding : 30,
  paddingVertical :15,
  marginBottom: 15,
  backgroundColor:"#0000ff",
  alignItems: "center",
 },
 login:{ 
  color : "#FFF",
  fontSize: 20,
  height : 25,
  
 },
 forgotpasswordContainer: {
  padding : 15,
  marginBottom: 15,
  backgroundColor:"#0000ff",
  alignItems: "center",
  
 },
 forgotPassword:{
  color  : "#FFF",
  fontSize: 18,
  height : 25,  


 },
 SignUp :{
  color : "#FFF",
  fontSize: 18,
  textAlign: 'right',
 },
 iconsize:{
  position: 'absolute',
  //paddingVertical : 15,
  //  paddingHorizontal : 5,
   marginTop : 35,
   flex : 2,
   flexDirection :'row',
   backgroundColor:"#bdc3c7",
},

});
/*
               <TouchableOpacity activeOpacity= {.5}>
                 <View>
                   <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
              </View>
              </TouchableOpacity>
               
              <View style={styles.container}/>*/