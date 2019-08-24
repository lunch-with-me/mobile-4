import React from "react";


import {ScrollView,View, Text, Picker,StatusBar,TextInput,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

export  class Forgot  extends React.Component {
   
    constructor(){
        super();
            this.state={
                email:'',
                newPassword:'',
                confirmPassword:'',

            }
        
    }
   // var setNameIdsEs6 = (id, name) => ({ id: id, name: name });
  
    passwordMatch(){
        if(this.state.newPassword!==this.state.confirmPassword){
          return(<Text style={{color:"tomato"}}>password do not match...</Text>)
        }
      }
   
      static navigationOptions = {
        header: null
    }
  render() {
    return (
        <View style={stylesP.MainContainer}>

        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <ImageBackground source={require('./Images/back.jpg')} blurRadius={4} style={{width: '100%', height: '100%'}}>
        <View style={{backgroundColor:'rgba(30,14,4,0.3)',width:'100%',height:'100%',flex:1}}>
           <View style={stylesP.container1}>
            <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={stylesP.container}>
                <Text style={stylesP.heading}>Forgot Password?</Text>
                
                <TextInput  style={stylesP.input}
                    placeholder="email ..."
                    onChangeText={(text)=>this.setState({email:text})}
              placeholderTextColor="#ddab9c"
                />
                
                <TextInput  style={stylesP.input}
                    placeholder=" new password ..."
              secureTextEntry={true} 
              placeholderTextColor="#ddab9c"
              onChangeText={(text)=>this.setState({newPassword:text})}
                />
                
                <TextInput  style={stylesP.input}
                    placeholder="confirm password ..."
              secureTextEntry={true} 
              placeholderTextColor="#ddab9c"
              onChangeText={(text)=>this.setState({confirmPassword:text})}
                />
                {this.passwordMatch()}
                <TouchableOpacity onPress={this.result}  style={stylesP.button}><Text style={stylesP.buttonText}>submit</Text></TouchableOpacity>
                </View>
                </ImageBackground>


            </View>
            </View>

            </ImageBackground>
          </View>
    );
  }
}


const stylesP = StyleSheet.create({
    container1:{
        width:'90%',
        height:'90%',
        //backgroundColor:"rgba(30,14,4,0.7)",
        alignItems: 'center',
        justifyContent:"center",
        elevation:10,
        alignSelf:'center',
        marginTop:'10%',
       
    },
    buttonText:{
        color:'#ffffff',
        textAlign:'center',
        paddingTop:10,
        fontWeight:"600",
        fontSize:16,
        paddingBottom:50,
        marginBottom:'1%'
        
      },
    button:{
        backgroundColor:'#c97b63',
        width:120,
        height:35,
        marginTop:30,
        borderRadius:200,
      },
    input :{
        //borderColor:'#0000dd',
        //backgroundColor:'rgba(240,208,193,0.35)' ,
        height:40,
        width:"80%",
        marginBottom:30,
        marginTop:10, 
        color:'#000000',
        borderRadius:20,
        paddingLeft:20,
        color:'#ffffff',
       borderColor:'#c97b63', 
       borderStyle:'solid',
       borderWidth:1.5,
    
      },
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:"rgba(30,14,4,0.7)",
        alignItems: 'center',
        justifyContent:"center",
        elevation:10,
        alignSelf:'center',
       // marginTop:'10%',


    },
    heading:{
        color:'#fffef9',
        fontSize:20,
        marginBottom:10,
    },
    txt:{
        color:'#fffef9',
        fontSize:70,
        
    },
  MainContainer: {
    flex: 1,
    
    alignItems: 'center',
    //smarginTop: 50,
    justifyContent: 'center',
  },
});