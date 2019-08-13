import React from "react"
import {View,Text,Dimensions,Image,TouchableWithoutFeedback,ScrollView,ActivityIndicator,FlatList,RefreshControl,Linking,Alert} from "react-native"
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import {AdMobBanner} from "expo-ads-admob"
var {height,width} = Dimensions.get("window")

export default class Post extends React.Component{
constructor(props){
  super(props)
  this.state = {language:null,data:null,refreshed:false }
  // NetInfo.fetch().then(state => {
  //   Alert.alert('heolo',String(state.isConnected))
  // });
}
async componentDidMount(){
  var language = await AsyncStorage.getItem('Language')
 await  this.setState({language:language})
  await this.getPosts(this.state.language)
  
}
 getPosts=async  (language)=>{
   if(language==="English"){
     language = ""
   }

 var res = await fetch(`https://www.naukrialerts.in/api/posts?collections=${String(this.props.collections)+language}`);
 
 res =   await res.json();
 await this.setState({data:res,refreshed:false})
 
  } 
  renderItem = ({item})=>{
    if(item.title=='ad'){
      return (
        <AdMobBanner
        bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-4144500271876768/6190921601"
        
          didFailToReceiveAdWithError={this.bannerError} />
      )
    }
 return (
 <View style={{flex:1,flexDirection:'row',borderColor:'grey',borderWidth:1,
    borderRadius:8,width:width-10,marginTop:10,height:140,marginHorizontal:5,backgroundColor:'white',justifyContent:'flex-start',alignItems:'center'}}>
    <View style={{width:100,height:100,marginLeft:10,justifyContent:'center'}}>
    <Image style={{height:undefined,width:undefined,flex:1,resizeMode:'stretch'}} defaultSource={require("../components/assets/loading.jpg")} source={{uri:item.imageUrl}} />
    </View>
    <View style={{marginLeft:25,marginRight:5,width:width-90}}>
    <View style={{height:94}}>  
    <Text style={{color:"red",fontWeight:'bold',fontSize:19}}>{item.title}</Text>
    <View style={{width:width-120}}> 
    <Text style={{fontWeight:'bold',fontSize:16}}>{item.body}</Text>
    </View>
    
    </View>
    <View style={{flexDirection:'row'}}>
      <View style={{marginBottom:4}}>
      <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.jobUrl)}>
      <Text style={{color:'blue',fontWeight:'bold',fontSize:18}}>Apply Now</Text>
      </TouchableWithoutFeedback>
      </View>
    <View style={{marginBottom:4,backgroundColor:'#00b5ec',borderRadius:10,width:100,height:30,justifyContent:'center',alignItems:'center',marginLeft:10}}>
    <TouchableWithoutFeedback onPress ={()=>this.props.navigation.navigate("Discription",{
         discription:item.discription,
         title:item.title,
         jobUrl:item.jobUrl
       })}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Discription</Text>
      </TouchableWithoutFeedback> 
    </View>
       
      </View>
    </View>
    </View>    
  )
  } 
  render(){
    if(this.state.data){
    return ( 
      
      <View style={{flex:1,backgroundColor:'#F0FFFF'}}>
     
      <ScrollView 
      refreshControl = { 
        <RefreshControl 
        refreshing ={this.state.refreshed}
        onRefresh = {()=>{
         
          this.setState({refreshed:true})
          this.getPosts(this.state.language)}}
        
        /> }>
      <View style={{marginTop:20,width:null}}>
     <FlatList
  data={this.state.data}
  renderItem={this.renderItem}
/>
  </View>   
 </ScrollView>
</View>

    
    )
  }
  return(
    <View>
    <View style={{backgroundColor:'black',height:30}} />
    <ActivityIndicator size="large"/>
    </View>
  )
  }
}