

import React from "react";
import { Button,View, Text ,Picker,ImageBackground,StatusBar,StyleSheet,TextInput,CheckBox,ScrollView,KeyboardAvoidingView
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity,  } from "react-native-gesture-handler";
export class Preference1 extends React.Component {
 
    static navigationOptions = {
      header: null
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ImageBackground source={require('./Images/back.jpg')} blurRadius={10} style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor="#1b0000" barStyle="light-content" />
          
          <View style={styles3.Container}>
          <ImageBackground source={require('./Images/back.jpg')}  style={{width: '100%', height: '100%'}}>
          
          <View style={styles3.FormContainer1}>
  
          <View style={styles3.FormContainer11}>
  
  
  
          </View>
  
  
          <View style={styles3.FormContainer12}>
          <View style={styles3.FormContainer121}>
  
  
          </View>
          <View style={styles3.FormContainer122 }></View>
  
          </View>
  
  
  
  
  
  
  
  
  
  
  
  
          </View>
  
  
          </ImageBackground>
  
  
          </View>
          
       
        
                
          
          
          
          
          
       </ImageBackground>
        </View>
        
      );
    }
  }
  const styles3 = StyleSheet.create({
    Container:{
      
      backgroundColor:"rgba(40,24,14,0.7)",
      width:"100%",
      height:"100%",
      
      justifyContent: 'center',
      alignItems: 'center',
     
    
    
    },
  
    FormContainer1:{
      width:"96%",
      height:"100%",
      flex:2,
      flexDirection:"row",
      margin:15,
    },
    FormContainer11:{
  
      width:"35%",
      backgroundColor:"rgba(35,33,33,0.9)",
      
  
  
    },
    FormContainer12:{
  
     width:"65%",
     backgroundColor:"rgba(255,243,224,0.8)",
      flexDirection:"column",
      flex:2
    },
    FormContainer121:{
      width:"100%",
      height:"10%",
      backgroundColor:"rgba(176,79,72,0.7)",
     elevation:4,
  
  
    },
    FormContainer122:{
      width:"100%",
      height:"90%",
      
      
  
  
    },
  });
  