import React from "react";
import { Button,View, Text ,Picker,ImageBackground,StatusBar,StyleSheet,TextInput,CheckBox,ScrollView,KeyboardAvoidingView, ActivityIndicator, 
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity,  } from "react-native-gesture-handler";
import {styles1} from './styles1';
import {styles} from './styles';
import {styles2} from './styles2';

import {AsyncStorage} from '@react-native-community/async-storage';
import  FBSDK,{LoginManager} from 'react-native-fbsdk';
//import {Test} from './Register2';
import Modal from "react-native-modal";
import DatePicker from 'react-native-datepicker';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import { Test } from "./Register2";
import {Preference1} from './Preference1';
import {DashBoard} from './DashBoard';
import {Forgot} from './ForgotPassword';
// import console = require("console");

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    header: null
}
  
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <View style={styles1.loginContainer}>
        
        <ImageBackground source={require('./Images/slider2.jpeg')} style={styles1.slider}>
         <View style={styles1.textContainer}>
           <Text>connect with people...</Text>
         </View>
         
        </ImageBackground> 
        <View style={styles1.con}>

        <View > 
 
              <Text style={styles1.text}>Don't have an account?</Text>
                

              </View>
              <View>

              <TouchableOpacity
                    style={styles1.button}
                    onPress={() => this.props.navigation.navigate('SignUp')}
                  >
                    <Text style={styles1.buttonText} > Sign up </Text>
              </TouchableOpacity>

              </View>
              
        </View>
        <View style={styles1.con}>

<View > 

      <Text style={styles1.text}>Already have an account?</Text>
       

      </View>
      <View>

      <TouchableOpacity
            style={styles1.button2}
            onPress={() => this.props.navigation.navigate('Details')}
          >
            <Text style={styles1.buttonText} >Log in</Text>
      </TouchableOpacity>

      </View>
      
</View>
        
        
        
        </View>
        
        
     </ImageBackground>
      </View>
      
    );
  }
}


class DetailsScreen extends React.Component {
  //--------Log in-----------------------------------------------------------------------
  static navigationOptions = {
    header: null
}
  state = {username :"", password:"",token:''}

checkLogin(){
const  {username,password}=this.state 
console.log("in checkLogin Function "+ username+ " password "+ password)
this.validate(username,password);
}
   async storeData(){
  console.warn("in store data");
//console.log();
  try {
     await AsyncStorage.setItem('token',this.state.token)
    //await AsyncStorage.setItem('age',this.state.age)
    
  } catch (e) {
    // saving error
  }  

   }
validate(username, password){
  if(username === '' || password === '') {
    alert(
      'Username or Password cannot be empty!'
    );
  } else {
    this.loginUser(username,password);
  }
}
 /* setValue = async (resJson) => {
  try {
    console.log("came to async function ");
    await AsyncStorage.setItem('token', resJson.token)
  } catch(e) {
    
    console.log("error = "+e);
    // save error
  }

  console.log('Done.')
}  */
getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    if(value !== null) {
      // value previously stored
      return value;
    }
  } catch(e) {
    // error reading value
  }
}

loginUser(username, password) {
  console.log(username, password);
  fetch('http://192.168.8.100:8080/users/authenticate',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  }).then(response => {
    console.log(response)
    if(response.ok){
      return response.json()
        .then(resJson => {
          if(resJson.success) {
            console.log('ok');
            console.log(resJson.token);
           //this.storeData(resJson);
           //AsyncStorage.setItem('jwt', resJson.token)
           //AsyncStorage.setItem('token',"Nethmee") 
           //this.setValue()
           //const value =  AsyncStorage.getItem('token')
           this.state.token=resJson.token;
            alert("value is ="+ this.state.token);
            
            this.storeData();
           
             
            this.props.navigation.replace('dashboard');
          } else {
            alert(
              resJson.msg
            );
          }
        })
    } else(response => {
      console.log(response);
      //login errors goes here
    })
  });
}

// async onFetchLogin(username,password){
//   console.log("in onFetchLogin");

//   var data={
    
//     email:"test@a.com",
//     password:"abc"
//   }
//   try{
//     let response=await fetch("http://10.10.5.144:8080/api/auth/login",
//     {method:"POST",
//   headers:{
//     "X-Requested-width":"XMLHTTPRequest",
//     "Content-Type":"application/json"
  
//   },
//   body:JSON.stringify(data)
// })
// //.then(res=>res.json())
// //.then(responseJson=>this.dataHandler(responseJson),
// .then(responseJson=>{
//   console.log(responseJson.json())
//   alert("success");
// },
// )
    
//   }catch(error){
//     console.log(error)

//   }
// }

dataHandler(data){
  console.log("in datahandler ", data)
  // if(data =>{
  //   data.json()
  //   if
  // } ){
  //   alert("shgvxzhdjfcgh")
  // }
}
//---------Log in with facebook-----------------------------------------------------------


_fbAuth(){
  let success=0;
  LoginManager.logInWithReadPermissions(['public_profile','email']).then(function(result){
  
      if(result.isCancelled){
       console.log("Login was cancelled");
     
         
      }else{ 
        console.warn('Login was a success '+ result.grantedPermissions.toString());
        _part2();
       
      }
  
  },function(error){
   console.log("an error occured:"+error);

  })

 
 
    }
  
  
  
  
  //let x=function _part2(){
        
           //this.props.navigation.navigate('form')
        
   // }
  
 // -------------------------------------------------------------------------------------
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <KeyboardAvoidingView behaviour="padding" enabled>
        <View style={styles.loginContainer}>
        
            <TextInput
              style={styles.input}
              placeholder="User Name ..."
              onChangeText={text =>this.setState({username : text})}
              placeholderTextColor="#efebe9"
                
              />
           
            <TextInput
              style={styles.input}
              placeholder="Password ..."
              secureTextEntry={true} 
              placeholderTextColor="#efebe9"
              onChangeText={text =>this.setState({password : text})}
              />
              <View style={styles.check}>
              <CheckBox style={styles.cBox}
                       checkedColor='rgba(240,208,193,0.6)'
                        />
                <Text style={{color:"#ffffff"}}>remember me</Text>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('f1')}
                >
                 <Text style={{color:'rgba(240,208,193,0.9)' , marginLeft:40 , fontStyle:'italic'}}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
             
              <TouchableOpacity
                    style={styles.button}
                    onPress={_=>this.checkLogin()}
                   
                  >
                    <Text style={styles.buttonText} > Log in </Text>
              </TouchableOpacity>
              <Text style={{color:"#ffffff",marginTop:40,}}>or Log in with</Text>
              <View style={styles.apiLogIn}>
                       <TouchableOpacity
                            style={styles.buttonFB}
                            onPress={_=>this._fbAuth()}
                          > 
                            <Text style={styles.buttonText} > facebook</Text>
                      </TouchableOpacity>
                     
                      <TouchableOpacity
                            style={styles.buttonL}
                            onPress={this.onPress}
                          >
                            <Text style={styles.buttonText} > LinkedIN </Text>
                      </TouchableOpacity>
              
                      </View>
        </View>
        <View style={styles.newAccount}>
        <Text style={{color:'#fffffb'}}>Don't have an account?</Text>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('SignUp')}
                          >
        <Text style={{color:'#ffccbc',marginLeft:6,marginBottom:7}}>Sign Up</Text>
        </TouchableOpacity>
        </View> 
        </KeyboardAvoidingView>
        </ImageBackground>
      </View> 
        
        
      
    ); 
  }
}

class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null
}
state={
   email:"",
   username:"",
   password:"",
   confirmPassword:""
}

onFetchRegister(email,username,password,confirmPassword){
  console.log("in onFetchLogin");
  var data={
    email:email,  
    password:password,
    username:username,
    confirmPass:confirmPassword
  }
  console.log("Data in onFetchRegister ", data)
  this.signupUser(data);
  
//   try{
//     // let response=await fetch("http://192.168.56.1:3000/users/register",
//     let response=await fetch("http://localhost:8080/users/register",

//     {
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify(data)
// })
// .then(res=>res.json())
// .then(responseJson=>this.dataHandler(responseJson),
// .then(responseJson=>{
//   console.log(responseJson.json())
// }

// )
//   }catch(error){
//     console.log(" In catch Block ",error)
//   } 
}

signupUser(data) {
  console.log('data', data);
  fetch('http://192.168.8.100:8080/users/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => {
    if(response.ok){
      return response.json()
        .then(resJson => {
          console.log(resJson.user);
         // console.log("this is token"+resJson.token);
          this.props.navigation.navigate('dashboard');
        })
    } else(response => {
      console.log(response);
      //signup errors goes here
    })
  }).catch(err => {
      console.log(err)
  });
}

dataHandler(data){
  console.log("in datahandler ", data)
  // if(data =>{
  //   data.json()
  //   if
  // } ){
  //   alert("shgvxzhdjfcgh")
  // }
}
state = {
  isModalVisible:false
};

checRegister(){

  const  {username,password,email,confirmPassword}=this.state 
  // alert("username:"+username +"email:"+email+"password:"+password+"confirmpasswrod:"+confirmPassword)
 console.log("In checRegister func")
  console.log("username:"+username +"email:"+email+"password:"+password+"confirmpasswrod:"+confirmPassword)
  
    this.onFetchRegister(email,username,password,confirmPassword)

  // console.warn(username,password)
  /* this.onFetchLogin(username,password)
  if (username =="admin" && password =="admin"){
    console.warn("log in succesfull!")
    alert("correct") */
    // this.props.navigation.navigate('form')
    // this.onFetchRegister(this.email,this.username,this.password,this.confirmPassword)
  }
  

  

toggleModal1 = () => {
  this.setState({ isModalVisible:true});
  
};
toggleModal2 = () => {
  this.setState({ isModalVisible:false});
};

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('./Images/back.jpg')} style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#a98274" barStyle="light-content" />
        <View style={styles2.loginContainer}>
        
        
        <View style={styles2.signupContainer}>

        <Text style={styles2.para}>Sign Up</Text>
        <Text style={styles2.para2}>Please fill in this form to create an account.</Text>
        
     
      <TextInput 
      style={styles2.input}
      placeholder="Enter Email"
      onChangeText={text =>this.setState({email : text})}
      placeholderTextColor="#efebe9"
      />
        
      <TextInput 
      style={styles2.input}
      placeholder="Enter Username"
      onChangeText={text =>this.setState({username : text})}
      placeholderTextColor="#efebe9"
      
      />
        
      <TextInput 
      style={styles2.input}
      placeholder="Enter Password"
      secureTextEntry={true}
      onChangeText={text =>this.setState({password: text})}
      placeholderTextColor="#efebe9"
      />
        
      <TextInput 
      style={styles2.input}
      placeholder="Enter Password again"
      secureTextEntry={true}
      onChangeText={text =>this.setState({confirmPassword : text})}
      placeholderTextColor="#efebe9"
      />
      
      <View style={styles2.condition}>
        <Text style={{color:'#fffffb'}}>By creating an account you're agreeing to our</Text>
       
        <TouchableOpacity
       onPress={this.toggleModal1}
                          >
        <Text style={{color:'#ffccbc',marginBottom:7 ,textDecorationLine:"underline" ,fontStyle:"italic"}}> terms and Conditions.</Text>
        </TouchableOpacity>
        </View>

        <Modal isVisible={this.state.isModalVisible}
       
        >
          <View style={style=styles2.modalContainer}>
            <View style={styles2.modalHeader}>

                         <Text style={styles2.modalHeaderText}>Terms and Conditions</Text>

            </View>
           <View style={styles2.modelBody}>
                      <ScrollView>

                          
                                  <Text>
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                   It has survived not only five centuries,
                                   but also the leap into electronic typesetting, remaining essentially unchanged. 
                                   
                                
                                        Aenean egestas magna vitae turpis aliquet commodo.
                                        Vestibulum ut sapien nec nulla aliquam posuere.
                                        Nam sit amet tortor et ante egestas fringilla non eu lectus.
                                        Sed sed est ut nunc blandit luctus.
                                        Nullam et quam aliquet, ornare leo eget, blandit justo.
                                        Ut vulputate magna ac libero condimentum porta.
                                        Aenean accumsan sem ac est faucibus, ut aliquam neque ultrices.
                                        Vestibulum blandit lacus ac purus tempus, ut pretium tortor semper.
                                          Aenean in libero id elit gravida porta sit amet et nibh.
                                          Phasellus tincidunt urna sed dolor eleifend placerat.
                                          Nulla a justo ut magna consectetur lacinia.
                                          Sed cursus libero sit amet scelerisque scelerisque.
                                          Nunc accumsan purus ac varius lobortis.


                                  </Text>

                                  <View style={{backgroundColor:"#ffffff",width:"90%",height:30}}></View>
                                  <View style={{backgroundColor:"#ffffff",width:"90%",height:30}}></View>
                        

                        
                      </ScrollView>


           </View>
           <View style={styles2.modalFooter}>
           <Button title="I   Agree" onPress={this.toggleModal2} />
          
           

           </View>
            
          </View>
        </Modal>
               
        
      <TouchableOpacity
        onPress={()=>this.checRegister()}
        style={styles2.signInB}             >
        <Text style={styles2.signInBText}>Sign Up</Text>
        </TouchableOpacity>
     
      </View>
              
        </View>

        <View style={styles.newAccount}>
        <Text style={{color:'#fffffb'}}>Already have an account?</Text>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Test1')}
                          >
        <Text style={{color:'#ffccbc',marginLeft:6,marginBottom:7}}>Log in</Text>
        </TouchableOpacity>
        </View>
        
        
        
        
        
     </ImageBackground>
      </View>
      
    );
  }
}




const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    SignUp:SignUpScreen,
   dashboard:DashBoard,
    Preference:Preference1,
    Test1:Test,
    f1:Forgot,
  },
  {
    initialRouteName: "Home"
  },
  {
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null,
    },
     
  }
);

//export default createAppContainer(AppNavigator);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}