import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image,TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/EvilIcons';

export default class Empty extends Component {
	
	render()
	{
		return(
			<View style={{backgroundColor:'#E1F5FE', flex:3}}>
				<TouchableOpacity activeOpacity={0.3}  onPress={() => this.props.navigation.goBack()} style={{marginTop:40,paddingLeft:10}} >
					<Icon2 name='chevron-left' color='#1da1f2' size={45} />
				</TouchableOpacity>
				
				<View style={styles.Center}>
					<Text style={styles.Text}> To get started, edit Empty.js </Text>
				</View>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	Center:{
		alignItems:'center',
		paddingTop:'50%'
	},
	Text:{
		color:'grey',
		fontSize:20,
		fontWeight:'400'
	}
});

AppRegistry.registerComponent('Empty', () => Empty);