import React, { Component } from 'react';
import { AppRegistry,StyleSheet,TouchableOpacity,Text,View,Image,TouchableHighlight,FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import GLOBAL from './global.js'
import { SideMenu } from './Navigators.js';

export default class Home extends Component {

  constructor(){
    super();
    this.state={
      homeclick:true,
      searchclick:false,
      notifclick:false,
      messagesclick:false,
      refreshing:false,
    }
  }
  onIconClick(value){
    switch(value){
      case 'Home':
        this.setState({
            homeclick:true,
            searchclick:false,
            notifclick:false,
            messagesclick:false
              });
          break;

      case 'Search':
        this.setState({
            homeclick:false,
            searchclick:true,
            notifclick:false,
            messagesclick:false
              });
          this.props.navigation.navigate('Search');
          break;   

      case 'Notif':
        this.setState({
            homeclick:false,
            searchclick:false,
            notifclick:true,
            messagesclick:false
              });
          this.props.navigation.navigate('empty');
          break;    

      case 'Messages':
        this.setState({
            homeclick:false,
            searchclick:false,
            notifclick:false,
            messagesclick:true
              });
          this.props.navigation.navigate('empty');
          break;     
    }
  }

  OpenMenu(){
    this.props.navigation.navigate('DrawerToggle');
  }

  renderTopBar() {
    return (
      <View id='Container'>
        <View id='HomeTOpbar' style={{padding:15,backgroundColor:'white',height:140,borderColor:'#90a4ae',borderBottomWidth:1,}}>
            <View id='TopImage+Text' style={{flexDirection:'row'}}>
         	   	
              <TouchableOpacity style={styles.imagecircle} activeOpacity={0.5} onPress={() => this.OpenMenu() }>
    	     	   		<Image style={{width: 45, height: 45}} 
    	     	   		source={require('./Images/ProfilePic.png')}/>
    	     	   </TouchableOpacity>
      	   			
                <Text style={{paddingLeft:28,fontWeight: 'bold',fontSize: 25,color:'black',}}>
      	   					Home
      	   			</Text>	
            </View>

            <View id='FourIcons' style={styles.NavBar}>
              
              <TouchableOpacity id='Homeicon' style={styles.Topbaricons} onPress={(value) => this.onIconClick('Home')}>
                  <Icon5 name='home-map-marker' color={this.state.homeclick?'#00aced':'gray'} size={38} 
                          style={{marginTop:-10}} />
                  <View style={styles.Iconunderline} backgroundColor={this.state.homeclick?'#00aced':'white'}></View>
              </TouchableOpacity>

              <TouchableOpacity id='Searchicon' style={styles.Topbaricons} onPress={(value) => this.onIconClick('Search')}>
                  <Icon name='search' color={this.state.searchclick?'#00aced':'gray'} size={30} />
                  <View style={styles.Iconunderline} backgroundColor={this.state.searchclick?'#00aced':'white'}></View>
              </TouchableOpacity>

              <TouchableOpacity id='Notificon' style={styles.Topbaricons} onPress={(value) => this.onIconClick('Notif')}>
                  <Icon1 name='bell' color={this.state.notifclick?'#00aced':'gray'} size={30} />
                  <View style={styles.Iconunderline} backgroundColor={this.state.notifclick?'#00aced':'white'}></View>
              </TouchableOpacity>

              <TouchableOpacity id='Messagesicon' style={styles.Topbaricons} onPress={(value) => this.onIconClick('Messages')}>
                  <Icon1 name='envelope' color={this.state.messagesclick?'#00aced':'gray'} size={30} />
                  <View style={styles.Iconunderline} backgroundColor={this.state.messagesclick?'#00aced':'white'}></View>
              </TouchableOpacity>
            
            </View>
        </View>    
      </View>
    );
  }

  RefreshFinished(){
    this.setState({
      refreshing:false
    });
  }

  render(){
        return(
      <View>
        <List  containerStyle={{paddingBottom:40}} >
          <FlatList
            data={GLOBAL.TweetData}
            renderItem={ ( {item} ) =>
              {
                return(
                <ListItem roundAvatar hideChevron={true}
                  title={
                    <View id='Title' style={{marginLeft:15,flexDirection:'column',justifyContent:'flex-start'}}>
                      <View  style={{flexDirection:'row',justifyContent:'flex-start',height:20}} >

                        <View id='TitleName'>
                          <Text style={{fontWeight:'bold',fontSize:15}} >{item.TitleName}</Text>
                        </View>
                        
                        <View id='TitleLink'>
                          <Text style={{color:'gray',fontSize:15}} >{item.TitleLink}</Text>
                        </View>

                        <View id='TimeStamp'>
                           <Text style={{color:'gray',fontSize:15,marginLeft:10,alignSelf:'center'}} > . {item.TimeStamp}</Text>
                        </View>

                      </View>

                      <View style={{alignItems:'flex-start'}}>
                        <Text style={{fontSize:17,marginLeft:10,alignSelf:'stretch'}}>{item.Description}</Text>
                      </View>

                    </View>
                  }
                  subtitle={
                      <View id='SubTitle' style={{width:'90%',height:225,marginLeft:15,marginTop:10}} >
                        
                        <Image
                          source={ item.TweetImage }
                          style={{borderRadius:10,height:'85%',width:'100%'}}
                        />
                        
                        <View id='BottomTWeetBar' style={{flexDirection:'row',justifyContent:'space-between' ,height:'15%',marginTop:10,marginBottom:10}}>

                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon2
                              name='comment'
                              color='gray'
                              size={30}
                            />
                            <Text style={{color:'gray'}}>{item.Comments}</Text> 
                          </TouchableOpacity>

                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon2
                              name='retweet'
                              color='gray'
                              size={30}
                            />
                            <Text style={{color:'gray'}}>{item.Retweets}</Text> 
                          </TouchableOpacity>

                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon2
                              name='heart'
                              color='gray'
                              size={30}
                            />
                            <Text style={{color:'gray'}}>{item.Likes}</Text> 
                          </TouchableOpacity>

                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon1
                              name='envelope'
                              color='gray'
                              size={25}
                            />
                          </TouchableOpacity>
                        </View>                            
                      </View> 
                  }
                  avatar={ item.ProfileImage }
                />
                );
              }
            }
          keyExtractor={item  => item.TitleLink }
          ListHeaderComponent={this.renderTopBar()}
          refreshing= {this.state.refreshing}
          onRefresh={() => {
              this.setState({
                refreshing:true
              });
              setTimeout(() => this.RefreshFinished(),2000);
            }}
          />
        </List>
        
        <TouchableOpacity style={styles.addTweet} activeOpacity={0.5} >
          <Image style={{width: 65, height: 65}} source={require('./Images/write.png')}/>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagecircle: {
       borderWidth:0.5,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:40,
       height:40,
       backgroundColor:'#fff',
       borderRadius:100,
  },

  Topbaricons:{
      height:115,
      width:105,
      justifyContent:'center',
      alignItems:'center',
  },

  Iconunderline:{
    width:110,
    height:5,
    padding:0,
    marginTop:12,
    borderRadius:50
  },

  NavBar:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:2.5
  },

  addTweet:{
    position:'absolute',
    bottom:48,
    right:10,
    backgroundColor:'#1da1f2',
    borderRadius:100,
    height:65,
    width:65,
    alignItems:'center',
    justifyContent:'center'

  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('myapp', () => Home);

