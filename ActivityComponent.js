import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class ActivityComponent extends Component
{
	render()
	{
		if(this.props.loading === true)
		{	return(
				<ActivityIndicator animating size={30} style={{paddingTop:30}} color='lightgreen'/>
				);
		}
		else{
			return(<View></View>);
		}
	}
}

AppRegistry.registerComponent('ActivityComponent', () =>  ActivityComponent);