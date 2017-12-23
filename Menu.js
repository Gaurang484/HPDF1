import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image,TouchableHighlight, TouchableOpacity, ScrollView, Picker, FlatList } from 'react-native';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';


export default class Menu extends Component {
	
	constructor()
	{
		super();
		this.state={
			UserName:'Gaurang Patel',
			UserLink:'@gaurang484',
			UserPicLink:require('./Images/ProfilePic.png'),
			Following:153,
			Followers:144,
			data1:[
				{
					Title:'Profile',
					Icon:'user'
				},
				{
					Title:'Lists',
					Icon:'align-center'
				},
				{
					Title:'Moments',
					Icon:'bar-chart-2'
				},
				{
					Title:'Highlights',
					Icon:'clipboard'
				}
			],
			data2:[
				{
					Title:'Settings and Privacy'
				},
				{
					Title:'Help Center'
				}
			]
		}
	}

	render()
	{
		return(

			<ScrollView id='Menu'>
		   
		    	<View id='TopBar' style={{marginLeft:20,marginTop:10}} >
			      	<View id='TopRow'>
			      		<Image source={this.state.UserPicLink} style={styles.ProfilePic} />
			      	</View>

			      	<View id= 'MidRow' style={styles.Title}>
			      		<View>
			      			<Text style={{fontWeight:'bold',fontSize:25}}  >{this.state.UserName}</Text>		
			      			<Text style={{color:'gray',fontSize:15,}} >{this.state.UserLink}</Text>
			      		</View>
			      		
			      		<Picker style={{color:'#90A4AE',width:50,marginLeft:85,marginBottom:20}} mode='dropdown'>
			      			<Picker.Item label='Create a new account'/>
			      			<Picker.Item label='Add an existing account'/>
			      		</Picker>
			      	</View>

			      	<View style={{flexDirection:'row'}} >
			      		<Text style={{fontWeight:'bold',fontSize:15}}>{this.state.Following} </Text> 
			      		<Text style={{color:'gray',fontSize:15}}>Following</Text>
			      		<Text  style={{paddingLeft:20,fontWeight:'bold',fontSize:15}}>{this.state.Followers} </Text> 
			      		<Text style={{color:'gray',fontSize:15}}>Followers</Text>
			      	</View>
		    	</View>
		   		
		   		<FlatList
		   			style={{marginTop:25,borderTopWidth:0.5,borderTopColor:'lightgrey'}}
		   			data={this.state.data1}
		   			renderItem={( {item} ) => {
		   				return(
			   				<TouchableOpacity activeOpacity={0.53} style={styles.SideMenuItem} onPress={() => this.props.navigation.navigate('Profile')} >
			   					<View style={{width:35,flexDirection:'row',justifyContent:'center'}} >
				   					<Icon name={item.Icon} size={30} color='#90A4AE'/>
			   					</View>
			   					<Text style={styles.ListText} > {item.Title} </Text>
			   					
			   				</TouchableOpacity>
		   				);
		   			}}
		   			keyExtractor={item => item.Title}
		   		/>

		   		<FlatList
		   			style={{marginTop:10}}
		   			data={this.state.data2}
		   			renderItem={( {item} ) => {
		   				return(
			   				<TouchableOpacity activeOpacity={0.53} style={styles.SideMenuItem} onPress={() => {this.props.navigation.navigate('Lists')}}>			   					
			   					<Text style={{fontSize:20,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'gray'}} > {item.Title} </Text>		
			   				</TouchableOpacity>
		   				);
		   			}}
		   			keyExtractor={item => item.Title}
		   		/>

		   		<View id='BottomIcons' style={styles.BottomIcons}>
		   			<TouchableOpacity activeOpacity={0.5} style={{marginLeft:20}}>
			   			<Icon3 name='moon-o' size={30} color='#1da1f2'/>
		   			</TouchableOpacity>

		   			<TouchableOpacity activeOpacity={0.5} style={{marginLeft:'74%'}}>
			   			<Icon3 name='qrcode'size={30} color='#1da1f2'/>
		   			</TouchableOpacity>
		   		</View>
		  	</ScrollView>
		);	
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	ProfilePic:{
	    height:60,
	    width:60,
	    marginTop:30
  	},
  	Title:{
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		paddingBottom:10
  	},
  	BottomIcons:{
  		marginTop:50,
  		width:'100%',
  		height:40,
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		borderTopWidth:0.5,
  		borderTopColor:'gray'
  	},
  	SideMenuItem:{
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		paddingLeft:30,
  		padding:15
  	},
  	ListText:{
  		fontSize:20,
  		fontWeight:'400',
  		paddingLeft:20
  	}

});

AppRegistry.registerComponent('Menu',() => Menu);