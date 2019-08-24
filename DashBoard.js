/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { DrawerItems, SafeAreaView, } from 'react-navigation';
import { View, Image, Platform,StyleSheet,ImageBackground,ScrollView ,TouchableOpacity,Text, AsyncStorage} from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
//import {drawerContentComponents} from './pages/drawerContentComponents';
 
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Profile';
import Preferences from './pages/Preferences';
import Logout from './pages/logout';
 
 
class NavigationDrawerStructure extends Component {
    
  // constructor(props){
  //   super(props);
  //   AsyncStorage.getItem('id').then(id => {
  //   })
  // }
  toggleDrawer = () => {
    
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
          
        
      </View>
    );
  }
}
 

const FirstActivity_StackNavigator = createStackNavigator({
  
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'recommended Profiles',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#a98274',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const Screen2_StackNavigator = createStackNavigator({
 
  Second: {
    screen: Screen2,
  
    navigationOptions: ({ navigation }) => ({
      title: 'Notification Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#a98274',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
 
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#a98274',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
 
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'rgba(100,10,10,0)',
      },
      headerTintColor: 'rgba(100,10,10,0)',
    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
 
  Fifth: {
    screen: Preferences,
    navigationOptions: ({ navigation }) => ({
      title: 'Preferences',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'rgba(10,10,10,0)',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen6_StackNavigator = createStackNavigator({
 
  sixth: {
    screen: Logout,
    navigationOptions: ({ navigation }) => ({
      title: 'Logout',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'rgba(10,10,10,0)',
      },
      headerTintColor: '#fff',
    }),
  },
});
const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
  },
  headerContainer: {
      height: 150,
  },
  headerText: {
      color: '#fff8f8',
  },
  screenContainer: { 
    paddingTop: 20,
    width: '100%',
},
screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
},
screenTextStyle:{
    fontSize: 20,
    marginLeft: 20, 
    textAlign: 'center'
},
selectedTextStyle: {
    fontWeight: 'bold',
    //color: '#00adff'
    color: '#230000'
},
activeBackgroundColor: {
    backgroundColor: 'grey'
}
  
});

const drawerContentComponent = props => (
 <View>
  <ImageBackground source={require('./image/back.jpg')} style={{width: '100%', height: '100%'}}>

  <View style={styles1.header}>
    <View style={styles1.profile}><ImageBackground source={require('./image/profiles1.jpg')} style={{width: '100%', height:'100%',borderRadius:900,overflow:'hidden'}}>
</ImageBackground><Text style={styles1.profileText}>Profile Name</Text></View>
  </View>
  <View style={styles1.body}>
  <ScrollView style={{}}>
    <SafeAreaView style={styles1.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      
      <View style={styles1.drawerItem}></View>
     {/*  <View style={styles1.drawerItem}>
        <Image source={require('./image/home-icon.png')} style={styles1.icon}/>
        <TouchableOpacity
       onPress={() => this.props.navigation.navigate('FirstActivity_StackNavigator')}
        >
          <Text style={styles1.labelActive}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles1.drawerItem}>
        <Image source={require('./image/home2.png')} style={styles1.icon}/>
        <TouchableOpacity
         onPress={() => this.props.navigation.navigate('Screen2')}
        >
          <Text style={styles1.label}>Account Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles1.drawerItem}>
        <Image source={require('./image/home2.png')} style={styles1.icon}/>
        <TouchableOpacity>
          <Text style={styles1.label}>Privacy Settigs</Text>
        </TouchableOpacity>
      </View>
      <View style={styles1.drawerItem}>
        <Image source={require('./image/home2.png')} style={styles1.icon}/>
        <TouchableOpacity>
          <Text style={styles1.label}>Privacy Settigs</Text>
        </TouchableOpacity>
      </View> */}
      <DrawerItems {...props} />
    </SafeAreaView>
   </ScrollView>  
   </View>   
</ImageBackground>
  </View>
);

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
      height:'30%',
      backgroundColor:"rgba(176,79,72,0.9)",
      flex:1,
     alignItems:'center',
      justifyContent:'center',
      
  },
  label:{
    marginTop:34,
    marginLeft:16,
    color:"#d3b8ae",
  },
  labelActive:{
    marginTop:34,
    marginLeft:16,
    color:"rgb(176,79,72)",
  
  },
  drawerItem:{
    flexDirection:'row',
    width:'100%',
    height:80,
    borderStyle:'solid',
    borderBottomWidth:1,
    borderColor:"rgba(100,100,100,0.5)",
    borderTopWidth:1,
    borderLeftWidth:0,
    borderRightWidth:0,
   // alignItems:'center',
    //justifyContent:'center',
    paddingLeft:0,
    
    



  },
  icon:{
    marginTop:30,
   marginLeft:30,
   
    padding:0,
  },
  body:{
    height:'70%',
    backgroundColor:"rgba(35,33,33,0.95)",
  },
  profile:{
    width:'50%',
    height:'60%',
    borderRadius:900,
    alignItems:'center',
    backgroundColor:'#010101'
  },
  profileText:{
          marginTop:10,
          color:"#eeeeee",
          fontSize:15,
          


  }
});
 

const DrawerNavigatorExample = createDrawerNavigator({
  
  Screen1: {
    
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/home2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />)
    },
  },
  Screen2: {
    
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Notification Settings',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/home2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />)
    },
  },
  Screen3: {
   
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Account Settings',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/home2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />)
    },
  },

  Screen4: {
   
    screen: Screen4_StackNavigator,
    contentOptions: {
      activeTintColor :'#ffffff',
       inactiveTintColor :'#1999CE',
    
      activeBackgroundColor :'#1999CE',
      inactiveBackgroundColor :'#ffffff',
    },
    navigationOptions: {
      drawerLabel: 'Profile Settings',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/home2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />)
    },
  },
  Screen5: {
   
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'preferences',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/home2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />)
    },
  },

  Screen6: {
   
    screen: Screen6_StackNavigator,
    contentOptions: {
      activeTintColor :'#ffffff',
       inactiveTintColor :'#1999CE',
    
      activeBackgroundColor :'#1999CE',
      inactiveBackgroundColor :'#ffffff',
    },
    navigationOptions: {
      drawerLabel: 'Logout',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/home2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />)
    },
  },

},

{
  contentComponent:drawerContentComponent,
}
  
);
 
const AppContainer = createAppContainer(DrawerNavigatorExample);
// export default createAppContainer(DrawerNavigatorExample);
export  class DashBoard extends React.Component {
    render() {
      return <AppContainer />;
    }
  }