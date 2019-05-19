import React, { Component } from 'react';
import {StyleSheet,View, Text, Image, ScrollView, Platform, Dimensions, TouchableOpacity, ImageBackground, TextInput, StatusBar} from 'react-native';
import TaskDescriptionAndroid from 'react-native-android-taskdescription'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Status from '../components/status';

var component;

if(Platform.OS === "ios"){
	var heightScreen = Dimensions.get('window').height;
}else{
	var heightScreen = Dimensions.get('window').height - StatusBar.currentHeight;
}

var widthScreen = Dimensions.get('window').width;

export default class Login extends Component{

	constructor(props){
		super(props);
		this.state = {
			nome:"",
			email:""
		}
		component = this;
	}

	render() {
		return (
			<ScrollView style={styles.scrollView}>
				<Status backgroundColor="#f5f5f5" barStyle="dark-content" animated />
				<TaskDescriptionAndroid backgroundColor="#f5f5f5"  label="SmartCoffe"/>
				<View style={styles.container}>
					<View style={styles.containerLogo}>
						<Image  ImageResizeMode="cover" style={{width:widthScreen*0.4, height:widthScreen*0.4}} source={require('../img/coffee.png')}/>
					</View>
					<Text style={styles.label}>Nome completo</Text>
					<TextInput style={styles.input} value={this.state.nome} onChangeText={(text)=>{this.setState({nome:text})}} onBlur={()=>{
							console.log("nome:");
							console.log(this.state.nome);
						}}></TextInput>
					<Text style={styles.label}>E-mail</Text>
					<TextInput style={styles.input} value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}} onBlur={()=>{
							console.log("email:");
							console.log(this.state.email);
						}}></TextInput>
					<View style={styles.containerButton}>
						<TouchableOpacity onPress={()=>{
							if(this.state.nome && this.state.email){
								Actions.push("Cardapio");
							}else{
								alert("Preencha todos os campos antes de prosseguir.")
							}
							}} style={styles.button}>
							<Text style={[{color:"rgba(255,255,255,0.9)", textAlign:"center", fontSize:17, letterSpacing:2}]}>CADASTRAR</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		height:heightScreen,
		backgroundColor:"#f5f5f5",
		paddingLeft:30,
		paddingRight:30
	},
	container: {
		flex: 1,
		height:heightScreen,
		alignItems:"center",
		backgroundColor:"#f5f5f5"
	},
	containerButton:{
		alignItems:"flex-end",
		justifyContent:"center",
		width:"100%",
	},
	button:{
		paddingTop: 18,
		paddingBottom: 18,
		backgroundColor:"green",
		width:"65%",
		marginTop:30,
		alignItems:"center",
		justifyContent:"flex-end",
		backgroundColor:"#34495e"
	},
	input:{
		backgroundColor:"#fff",
		width:"100%",
		borderWidth:1.2,
		borderStyle:"solid",
		borderColor:"#ddd",
		borderRadius:4,
		paddingLeft:10,
		color:"#aaa"
	},
	label:{
		marginTop:10,
		marginBottom:10,
		width:"100%",
		paddingLeft:10,
		fontSize:15,
		color:"#858585"
	},
	containerLogo:{
marginTop:20,
		height:"35%",
		width:"100%",
		alignItems:"center",
		justifyContent:"center"
	}
});
