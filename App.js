import  React from 'react';
import { Text, View ,ActivityIndicator,TouchableWithoutFeedback,StatusBar} from 'react-native';
import {createAppContainer,createSwitchNavigator,createMaterialTopTabNavigator,createStackNavigator,createDrawerNavigator} from "react-navigation"
import Railway from "./Screens/Railway"
import Bank from "./Screens/Bank"
import SSC from "./Screens/SSC"
import Other from "./Screens/Other"
import AboutUs from "./components/AboutUs"
import DrawerComponent from "./components/drawer"
import Discription from "./Screens/Discription"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';


class Loading extends React.Component {
  constructor(props){ 
    super(props);
    this.state= {language:null}
    this.getLanguage();
      
  }
  
  getLanguage =async ()=>{
      this.setState({language:await AsyncStorage.getItem("Language")})
       if(this.state.language){
      this.props.navigation.navigate("HomeScreen")
    }
      else{
        this.props.navigation.navigate("Menu")
        
      }
  }
   
  render() {
    return (
    <View>
    <ActivityIndicator size="large"/>
    </View>    
    )
  }  
     
}
class Menu extends React.Component{
   setLanguage =async (language)=>{
    
      await AsyncStorage.setItem('Language',language)
     
   this.props.navigation.navigate("HomeScreen")
  }
  render(){
    return(
     <View style ={{flex:1,backgroundColor:'black'}}>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
     <View style={{height:30,backgroundColor:'black'}} />
     
    <View style={{justifyContent:'center',alignItems:'center',position:'absolute',height:'70%',width:'100%'}}>
     <Text style={{color:'white',alignSelf:"center",fontSize:20}}>
     Welcome !
     </Text>
     <Text style={{color:'white',alignSelf:"center",fontSize:20,marginTop:10}}>
     Please Select Your language
     </Text>
     <Text style={{color:'white',alignSelf:"center",fontSize:20,marginTop:10}}>
     कृपया अपनी भाषा का चयन करें 
     </Text>
     </View>
     <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
     <View style={{marginTop:20,backgroundColor:'#00b5ec',width:150,borderRadius:20,height:50,justifyContent:'center'}}>
     <TouchableWithoutFeedback style={{alignItems:'center'}} onPress={()=>this.setLanguage("English")}>
    
     <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>
     English
     </Text>
     </TouchableWithoutFeedback>
     </View>
     <View style={{marginTop:20,backgroundColor:'#00b5ec',width:150,borderRadius:20,justifyContent:'center',height:50}}>
      <TouchableWithoutFeedback style={{alignItems:'center'}} onPress={()=>this.setLanguage("Hindi")}>
      <Text style={{ fontSize:20,color:'white',alignSelf:'center'}}>
    हिंदी 
     </Text>
     </TouchableWithoutFeedback>
     </View>
      
     <Text style={{color:'white',fontSize:20,marginTop:30}}>
   You Can Change Language in setting later
     </Text>
     </View>
    
    
     </View>
    ) 
  } 
}

const createTopTabNavigators = createMaterialTopTabNavigator({
  Bank:Bank,
  Railway:Railway,
  SSC:SSC,
  Others:Other 
},
{
  tabBarPosition:'bottom'
}
)

const AppStack = createStackNavigator({
  Home:{screen:createTopTabNavigators,
  navigationOptions:({navigation})=>({
 header:(
  <View>
    <StatusBar  barStyle = "dark-content" hidden = {false} backgroundColor = "#FA8072" translucent = {true}/>
   <View style={{height:60,flexDirection:'row',backgroundColor:'#FA8072',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
<TouchableWithoutFeedback onPress={()=>navigation.openDrawer()}>
    <Ionicons style={{fontSize:25,marginLeft:8}} name="md-menu"/>
      </TouchableWithoutFeedback>
      <Text style={{fontSize:20,fontWeight:'bold'}}>NaukriAlerts.in</Text>
      <Ionicons style={{fontSize:25,marginRight:8}} name="md-notifications"/>
      </View>
      </View>
 ) 
  }) 
  },
  Discription:{screen:Discription,
  navigationOptions:({navigation})=>({
    header:(
      <View>
    <StatusBar  barStyle = "dark-content" hidden = {false} backgroundColor = "#FA8072" translucent = {true}/>
    <View style={{height:60,flexDirection:'row',backgroundColor:'#FA8072',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
<TouchableWithoutFeedback onPress={()=>navigation.navigate("Home")}>
    <Ionicons style={{fontSize:25,marginLeft:8}} name="md-arrow-back"/>
      </TouchableWithoutFeedback>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Discription</Text>
      <Ionicons style={{fontSize:25,marginRight:8}} name="md-notifications"/>
      </View>
  </View>
    )
  })
  }
},
)
const AppDrawerNavigator = createDrawerNavigator({
  Home:AppStack,
  AboutUs:{screen:AboutUs,
  },
  ContactUs:{screen:()=>(<View><Text>Contact Us</Text></View>),
  }
},
{
  contentComponent:DrawerComponent
}
)
const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen:AppDrawerNavigator,
  Menu:Menu,
  Loading:Loading
},{
  initialRouteName:'Loading'
})
export default createAppContainer(AppSwitchNavigator)
