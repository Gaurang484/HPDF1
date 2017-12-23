import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text,View,Image,TouchableHighlight,TouchableOpacity,Keyboard,TouchableWithoutFeedback} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import ActivityComponent  from './ActivityComponent.js';
import GLOBAL from './global.js';

export default class Search extends Component {
	render(){	
		return(
			<TouchableWithoutFeedback style={styles.Container} onPress={Keyboard.dismiss}>
				<View style={styles.Container}>
					<View style={styles.SearchView} >
						<TouchableOpacity activeOpacity={0.3} onPress={() => this.props.navigation.goBack()} style={styles.BackButton}>
							<Icon2 name='chevron-left' color='#1da1f2' size={45} />
						</TouchableOpacity>

						<SearchBar lightTheme noIcon={true} containerStyle={{width:370}} inputStyle={{backgroundColor:'white',paddingLeft:30}} placeholder='Search Twitter'/>
							
					</View>	
	      		</View>
			</TouchableWithoutFeedback>);
	}
}
  export  const styles = StyleSheet.create({
	Container:{
		height:'100%',
		backgroundColor:'#E1F5FE'
	},
	BackButton:{
		backgroundColor:'rgb(225,232,238)',
		paddingLeft:10,
		height:58,
		width:42,
		flexDirection:'row',
		alignItems:'center'
	},
	SearchView:{
		marginTop:23,
		flexDirection:'row',
		alignItems:'center',
		width:150
	},
	Footer:{
	    height:45,
	    width:'100%',
	    position:'absolute',
	    bottom:0,
	    borderTopWidth:0.5,
	    borderTopColor:'gray',
	    flexDirection:'row',
	    alignItems:'center',
	    backgroundColor:'white'
 	}
});

AppRegistry.registerComponent('Search', () => Search);