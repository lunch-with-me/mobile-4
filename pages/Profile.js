
import React, { Component } from 'react';

import { StyleSheet, View,Image,ImageBackground, Text ,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {  ScrollView, TextInput,Picker, TouchableHighlight, } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SwitchToggle from 'react-native-switch-toggle';
//import RadioGroup from 'react-native-radio-buttons-group';
//import {EditProfile} from './pages/EditProfile';
//import {ImagePicker} from 'react-native-image-picker';
//var ImagePicker = require('react-native-image-picker');
 class Screen4 extends Component {
  static navigationOptions = {
    header: null
}
  constructor(props){
    super(props)


      this.state = {date:"15-05-1990",
      fullName:'Nethmee Sellahewa',
      TextFullName:false,
      occupation:'student',
      Address:'927/15,Udawatta Rd,Malabe.',
      TextAddress:false,
      Telephone:'0773827492',
      TextTelephone:false,
      Email:'nssellahewa@gmail.com',
      TextEmail:false,
      TextDescriptiion:false,
      Description:'I am a software gfgfgfddddddddddddddddddddddddd engineer ``'

    
    
    }
    
    //set value in state for initial date
   
    //this.state={occupation:'student'}
    //this.EditFullName = this.EditFullName.bind(this)
  }
  
 
  
  
  render() {
    
    let data = [{
      value: 'Student',
    }, {
      value: 'Doctor',
    }, {
      value: 'Engineer',
    }];
    return (
      <View style={styles.MainContainer}>
      
      <View style={styles.ovalBack}>
      <ImageBackground source={require('../image/profiles1.jpg')} style={{width: '100%', height:'100%',borderBottomEndRadius:0,borderBottomStartRadius:0}}>
        <View  style={styles.ovalBack2}>
        <View style={{flexDirection:'row',position:'relative',alignItems:'center',marginTop:'12%'}}>
        <TouchableOpacity style={styles.ovalEdit1}
                onPress={() => this.props.navigation.navigate('Details')}

        >
          <Image  source={require('../image/unlock2.png')} style={{alignSelf:'center',marginTop:13}}/>
         
        </TouchableOpacity>
        <View><View style={styles.ovalPro}><Image source={require('../image/profiles1.jpg')} style={{width: '100%', height:'100%',borderRadius:900,overflow:'hidden',}}/></View></View>
        <TouchableOpacity style={styles.ovalEdit2 } onPress={this.onPress}><Image source={require('../image/cam2.png')} style={{alignSelf:'center',marginTop:13}}/></TouchableOpacity>
        </View>
        
        </View>
        </ImageBackground>
       
        
      </View>
      {/* <TouchableHighlight style={styles.ovalEdit2}></TouchableHighlight> */}
      
       
        
      
      <View style={styles.heading}>
      <Text style={styles.headingText}>Jane Doe</Text>
      <Text style={styles.bio}>"bla bla bla"</Text>
      
      </View>
      
      <ScrollView>
      <View style={styles.body}>
   
          <View style={styles.cardP}>
          {/* <KeyboardAvoidingView style={styles.container} behavior="padding" enabled> */}
            <Text styles={styles.bio}>Personal Details</Text>
            <View>
              <Text>Full Name:</Text>
             <View style={{flexDirection:'row'}}> 
              <View>
              <TextInput
                 value={this.state.fullName}
                 editable={this.state.TextFullName}
                 onChangeText={(fullName)=>this.setState({fullName})}

              />
              </View>
              <View>
                <TouchableOpacity
                onPress={()=>this.setState({TextFullName:!this.state.TextFullName})}
               >
                  <Image source={require('../image/pencil.png')} style={styles.pencilIcon}

                  />
                </TouchableOpacity>
              </View>
              </View>
              
              <Text>Date of Birth:</Text>
              <View style={{flexDirection:'row'}}> 
              <View>

                <DatePicker
          style={{width: 200}}
         date= "01-01-2016"//initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1990"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        </View>
              <View>
                <TouchableOpacity
                onPress={()=>this.setState({TextFullName:!this.state.TextFullName})}
               >
                  <Image source={require('../image/pencil.png')} style={styles.pencilIcon}

                  />
                </TouchableOpacity>
              </View>
              </View>
              
             

             <Text>Address:</Text>
             <View style={{flexDirection:'row'}}> 
              <View> 
             <TextInput
                value={this.state.Address}
                 editable={this.state.TextAddress}
                 onChangeText={(Address)=>this.setState({Address})}
             />
             </View>
             <View>
                <TouchableOpacity
                onPress={()=>this.setState({TextAddress:!this.state.TextAddress})}

               >
                  <Image source={require('../image/pencil.png')} style={styles.pencilIcon}

                  />
                </TouchableOpacity>
              </View>
              </View>
             <Text>Telephone number:</Text> 
             <View style={{flexDirection:'row'}}> 
              <View> 
             <TextInput
               value={this.state.Telephone}
               editable={this.state.TextTelephone}
               onChangeText={(Telephone)=>this.setState({Telephone})}
             />
             </View>
             <View>
                <TouchableOpacity
                onPress={()=>this.setState({TextTelephone:!this.state.TextTelephone})}
               >
                  <Image source={require('../image/pencil.png')} style={styles.pencilIcon}

                  />
                </TouchableOpacity>
              </View>
              </View>
             <Text>Email:</Text> 
             <View style={{flexDirection:'row'}}> 
              <View> 
             <TextInput
                value={this.state.Email}
                editable={this.state.TextEmail}
               onChangeText={(Email)=>this.setState({Email})}
             />
             </View>
             <View>
                <TouchableOpacity
                onPress={()=>this.setState({TextEmail:!this.state.TextEmail})}
               >
                  <Image source={require('../image/pencil.png')} style={styles.pencilIcon}

                  />
                </TouchableOpacity>
              </View>
              </View>
         

             <Text>Occupation:</Text> 
             
             <Dropdown
      
                data={data}
                editable={false}
              />
              <Text>Description about the job:</Text>
              <View style={{flexDirection:'row'}}>
              <View>
              <TextInput
                multiline={true}
                numberOfLines={3}
                editable={false}
                onChangeText={(txt)=>this.setState({Description:txt})}
                value={this.state.Description}
              />
              </View>
                <View>
                <TouchableOpacity
                onPress={()=>this.setState({TextDescription:!this.state.TextDescriptiion})}
               >
                  <Image source={require('../image/pencil.png')} style={styles.pencilIconD}

                  />
                </TouchableOpacity>
              </View>
              </View>
                <Text>Description about the job:</Text>
             
             
            </View>
            {/* </KeyboardAvoidingView> */}
          </View>
          
      </View>
      </ScrollView>
      
      </View>

    );
  }
}

class ProfileSettings extends React.Component {
    static navigationOptions={
        header:null,
    }
  constructor(props) {
    super(props);
    this.state = {
      //switchOn1: false,
      switchOn0: false,
      switchOn1: false,
      switchOn2: false,
      switchOn3: false,
      switchOn4: false,
      switchOn5: false,
      switchOn6: false,
      switchOnAll:false,
      //switchOn4: false
    };
  }
  onPressAll = () => {
    this.setState({ switchOnAll: !this.state.switchOnAll });
    this.setState({ switchOn1:! this.state.switchOnAll });
    this.setState({ switchOn2: !this.state.switchOnAll });
    this.setState({ switchOn3: !this.state.switchOnAll });
    this.setState({ switchOn4: !this.state.switchOnAll });
    this.setState({ switchOn5: !this.state.switchOnAll });
    this.setState({ switchOn6: !this.state.switchOnAll });
  }
  
  onPress0 = () => {
    this.setState({ switchOn0: !this.state.switchOn0 });
  }
  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  }
  onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
  }
  onPress3 = () => {
    this.setState({ switchOn3: !this.state.switchOn3 });
  }
  onPress4 = () => {
    this.setState({ switchOn4: !this.state.switchOn4 });
  }
  onPress5 = () => {
    this.setState({ switchOn5: !this.state.switchOn5 });
  }
  onPress6 = () => {
    this.setState({ switchOn6: !this.state.switchOn6 });
  }

  static navigationOptions = {
    header: null
}
  render() {
    return (
      <View style={styles1.mainContainer}>
      <ImageBackground source={require('../image/back.jpg')}  style={{width: '100%', height:'100%'}}>
      <View style={{width:'100%',height:'100%',backgroundColor:'rgba(255,243,224,0.8)'}}>
      <ScrollView>
        <Text style={{ fontSize: 15,marginLeft:'10%',marginRight:'5%',marginTop:'5%', color:'#a98274' ,fontWeight:'bold'}}> You can alaways control what people see on your profile.</Text>
        <View style={styles1.contentBox1}>
        <Text style={styles1.heading}>Profile Details</Text>
        

                      <View style={{flexDirection:'row'}}>
                  <View style={{padding:10}}>
                  <Text style={{marginTop:18}}>Hide Bio</Text>
                  </View>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'40%',marginRight:10}}>
                      <SwitchToggle
                  containerStyle={{
                    marginTop: 16,
                    width: 60,
                    height: 25,
                    borderRadius: 12,
                    backgroundColor: '#ccc',
                    padding: 5,
                  }}
                  circleStyle={{
                    width: 25,
                    height: 25,
                    borderRadius: 16,
                    backgroundColor: 'white', // rgb(102,134,205)
                    elevation:4,
                  }}
                  switchOn={this.state.switchOn0}
                  onPress={this.onPress0}
                  circleColorOff='white'
                  backgroundColorOn='#ffe0b2'
                  circleColorOn='#ff7043'
                  duration={500}
                />
                </View>
                </View>
              
        </View>
        
        <View style={styles1.contentBox}>
          <Text style={styles1.heading}>Personal Details</Text>
          
          <View style={{flexDirection:'row'}}>
          <View style={{padding:10}}>
          <Text style={{marginTop:18}}>Hide Full Name</Text>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'45%',marginRight:10}}>
              <SwitchToggle
          containerStyle={{
            marginTop: 16,
            width: 60,
            height: 25,
            borderRadius: 12,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 25,
            height: 25,
            borderRadius: 16,
            backgroundColor: 'white', // rgb(102,134,205)
            elevation:4,
          }}
          switchOn={this.state.switchOn1}
          onPress={this.onPress1}
          circleColorOff='white'
          backgroundColorOn='#ffe0b2'
          circleColorOn='#ff7043'
          duration={500}
        />
        </View>
        </View>
        
              <View style={{flexDirection:'row'}}>
                <View style={{padding:10}}>
                <Text style={{marginTop:18}}>Hide  birthday  </Text>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'45%',marginRight:10}}>
                    <SwitchToggle
                containerStyle={{
                  marginTop: 16,
                  width: 60,
                  height: 25,
                  borderRadius: 12,
                  backgroundColor: '#ccc',
                  padding: 5,
                }}
                circleStyle={{
                  width: 25,
                  height: 25,
                  borderRadius: 16,
                  backgroundColor: 'white', // rgb(102,134,205)
                  elevation:4,
                }}
                switchOn={this.state.switchOn2}
                onPress={this.onPress2}
                circleColorOff='white'
                backgroundColorOn='#ffe0b2'
                circleColorOn='#ff7043'
                duration={500}
              />
              </View>
              </View>

                          <View style={{flexDirection:'row'}}>
                <View style={{padding:10}}>
                <Text style={{marginTop:18}}>Hide   Address </Text>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'45%',marginRight:10}}>
                    <SwitchToggle
                containerStyle={{
                  marginTop: 16,
                  width: 60,
                  height: 25,
                  borderRadius: 12,
                  backgroundColor: '#ccc',
                  padding: 5,
                }}
                circleStyle={{
                  width: 25,
                  height: 25,
                  borderRadius: 16,
                  backgroundColor: 'white', // rgb(102,134,205)
                  elevation:4,
                }}
                switchOn={this.state.switchOn3}
                onPress={this.onPress3}
                circleColorOff='white'
                backgroundColorOn='#ffe0b2'
                circleColorOn='#ff7043'
                duration={500}
              />
              </View>
              </View>
              
              
              <View style={{flexDirection:'row'}}>
          <View style={{padding:10}}>
          <Text style={{marginTop:18}}>Hide mobile Number</Text>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'35%',marginRight:10}}>
              <SwitchToggle
          containerStyle={{
            marginTop: 16,
            width: 60,
            height: 25,
            borderRadius: 12,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 25,
            height: 25,
            borderRadius: 16,
            backgroundColor: 'white', // rgb(102,134,205)
            elevation:4,
          }}
          switchOn={this.state.switchOn4}
          onPress={this.onPress4}
          circleColorOff='white'
          backgroundColorOn='#ffe0b2'
          circleColorOn='#ff7043'
          duration={500}
        />
        </View>
        </View>
        

            <View style={{flexDirection:'row'}}>
          <View style={{padding:10}}>
          <Text style={{marginTop:18}}>Hide Email Address</Text>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'35%',marginRight:10}}>
              <SwitchToggle
          containerStyle={{
            marginTop: 16,
            width: 60,
            height: 25,
            borderRadius: 12,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 25,
            height: 25,
            borderRadius: 16,
            backgroundColor: 'white', // rgb(102,134,205)
            elevation:4,
          }}
          switchOn={this.state.switchOn5}
          onPress={this.onPress5}
          circleColorOff='white'
          backgroundColorOn='#ffe0b2'
          circleColorOn='#ff7043'
          duration={500}
        />
        </View>
        </View>

              <View style={{flexDirection:'row'}}>
          <View style={{padding:10}}>
          <Text style={{marginTop:18}}>Hide Occupation</Text>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'40%',marginRight:10}}>
              <SwitchToggle
          containerStyle={{
            marginTop: 16,
            width: 60,
            height: 25,
            borderRadius: 12,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 25,
            height: 25,
            borderRadius: 16,
            backgroundColor: 'white', // rgb(102,134,205)
            elevation:4,
          }}
          switchOn={this.state.switchOn6}
          onPress={this.onPress6}
          circleColorOff='white'
          backgroundColorOn='#ffe0b2'
          circleColorOn='#ff7043'
          duration={500}
        />
        </View>
        </View>



              
              <View style={{flexDirection:'row'}}>
                <View style={{padding:10}}>
                <Text style={{marginTop:18,color:'#e2664c',fontSize:18,fontWeight:'bold'}}>Hide   All </Text>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'45%',marginRight:10}}>
                    <SwitchToggle
                containerStyle={{
                  marginTop: 16,
                  width: 70,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: '#ccc',
                  padding: 5,
                }}
                circleStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 18,
                  backgroundColor: 'white', // rgb(102,134,205)
                  elevation:4,
                }}
                switchOn={this.state.switchOnAll}
                onPress={this.onPressAll}
                circleColorOff='white'
                backgroundColorOn='#ffe0b2'
                circleColorOn='#e2664c'
                duration={500}
              />
              </View>
              </View>
       
       
        </View>
        <View style={styles1.contentBox1}>

        </View>
        </ScrollView>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
 
const AppNavigator = createStackNavigator(
  {
    Home: Screen4,
    Details: ProfileSettings,
  },
  {
    initialRouteName: "Home"
  }
);
  const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles1=StyleSheet.create({
mainContainer:{
      flex:1,
      backgroundColor:'#e6ded4',
},
contentBox:{
  width:'80%',
  margin:'10%',
  height:'70%',
  backgroundColor:'#feeff4',
  elevation:10,
  padding:'3%',
  marginTop:'8%',
  marginBottom:'8%'


},
contentBox1:{
  width:'80%',
  margin:'10%',
  height:'20%',
  backgroundColor:'#feeff4',
  elevation:10,
  padding:'3%'

},
heading:{
  color:'#353535',
  fontWeight:'bold',
  fontSize:17,
  marginTop:'3%'

}


});
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //paddingTop: 20,
   // alignItems: 'center',
    //marginTop: 50,
    //justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  pencilIcon:{
    marginTop:15,
    marginLeft:150,
  },
  pencilIconD:{
    marginTop:15,
    marginLeft:150,
  },
  card1:{
    elevation:12,
    width:'100%',
    height:'50%'

  },
  cardP:{
    width:'90%',
    backgroundColor:'#ffffff',
    borderColor:'#efdcd5',
    borderStyle:'solid',
    marginTop:'5%',
    //height:500,
    elevation:13,
    padding:'5%',

  },
  body:{
    width:'100%',
    backgroundColor:'#ffffe4',
    alignItems:'center',
   // justifyContent:'center',
  },
  bio:{
      fontSize:15,
      fontWeight:'700',
  },
  heading:{
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
    color:'#000',
    marginTop:90,
    width:'100%',
    //height:'20%',
    borderBottomColor:'rgba(100,100,100,0.4)',
    borderBottomWidth:1,
    paddingBottom:20,
    //backgroundColor:'#efdcd5',
  },
  headingText:{
    color:"#111111",
    fontSize:20,
    fontWeight:'bold'
  },
  ovalBack:{
      width:'100%',
      height:'30%',
      backgroundColor:'#222222',
      //borderBottomStartRadius:200,
      //borderBottomEndRadius:200,
      marginTop:0,
      //justifyContent:'center',  
      //alignItems:'center',
      elevation:4,

  },
  ovalBack2:{
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.6)',
    //borderBottomStartRadius:170,
    //borderBottomEndRadius:170,
    marginTop:0,
    justifyContent:'center',
    alignItems:'center',
    elevation:3,
    overflow:'visible',

},
  ovalPro:{
    width:170,
    height:170,
    borderRadius:200,
    backgroundColor:'#FF355E',
    marginTop:70,
    overflow:'visible',
    elevation:7,
  },
  ovalEdit1:{
    width:60,
    height:60,
    borderRadius:200,
    backgroundColor:'#FF355E',
    marginTop:70,
   // overflow:'visible',
    elevation:10,
    marginLeft:25,
    marginRight:25,

  },
  ovalEdit2:{
    width:60,
    height:60,
    borderRadius:200,
    backgroundColor:'#FF355E',
    marginTop:70,
    //overflow:'visible',
    elevation:10,
    marginRight:0,
    marginLeft:25,

  },
});