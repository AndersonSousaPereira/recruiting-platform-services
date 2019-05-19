import React, { Component } from 'react';
import {View, Platform, StatusBar} from 'react-native';

export default class Status extends Component{
	constructor(props){
		super(props);
	}

	render(){
		if(Platform.OS === 'ios') return (
			<View style={{height: 20, backgroundColor: this.props.backgroundColor, zIndex: 100000}}>
				<StatusBar barStyle={this.props.barStyle} animated />
			</View>
		)
		else if(this.props.backgroundColor != "transparent") return (<StatusBar backgroundColor={this.props.backgroundColor} barStyle={this.props.barStyle} animated />)
		else return(<StatusBar translucent backgroundColor={this.props.backgroundColor} barStyle={this.props.barStyle} animated />)
	}

}
