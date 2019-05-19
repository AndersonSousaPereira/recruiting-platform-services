import React, { Component } from 'react';
import {StyleSheet,View, Text, Image} from 'react-native';
import TaskDescriptionAndroid from 'react-native-android-taskdescription'
import Status from '../components/status';
var component;


export default class Header extends Component{

	constructor(props){
		super(props);
		component = this;
	}

	render() {
		return (

			<View style={styles.header}>
				<Image style={styles.logo} source={require('../img/coffee.png')}/>
				<View style={styles.appInformation}>
					<Text style={styles.appName}>Smart Coffee</Text>
					<Text style={styles.copyright}>by Alboom</Text>

				</View>
				<View style={styles.line}></View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	header:{
		height:110,
		height:110,
		width:"100%",
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
		alignContent:"space-around",
		paddingLeft:30,
		paddingRight:30,
		flexWrap:"wrap"
	},
	logo:{
		height: 70,
		width:70,
		marginRight:25
	},
	appInformation:{
		flexDirection:"column",
		alignItems:"flex-end",
		justifyContent:"center"
	},
	appName:{
		fontSize:30,
		color:"#4c3b2b"
	},
	copyright:{
		color:"#97908a"
	},
	line:{
		width:"100%",
		height:2,
		backgroundColor:"#e3e3e3"
	}
});



