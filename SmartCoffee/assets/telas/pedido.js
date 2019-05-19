import React, { Component } from 'react';
import {StyleSheet,View, Text, Image, ScrollView, Platform, Dimensions, TouchableOpacity, ImageBackground, TextInput, StatusBar} from 'react-native';
import TaskDescriptionAndroid from 'react-native-android-taskdescription'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Status from '../components/status';
import Header from '../components/header';
import {changePedidoStatus} from '../actions';
var component;

if(Platform.OS === "ios"){
	var heightScreen = Dimensions.get('window').height;
}else{
	var heightScreen = Dimensions.get('window').height - StatusBar.currentHeight;
}

var widthScreen = Dimensions.get('window').width;

class Pedido extends Component{

	constructor(props){
		super(props);
		component = this;
	}

	render() {
		return (
			<View style={styles.container}>
				<Status backgroundColor="#f5f5f5" barStyle="dark-content" animated />
				<TaskDescriptionAndroid backgroundColor="#f5f5f5"  label="SmartCoffe"/>
				<Header></Header>
				<ScrollView style={styles.scrollView}>
					<Text style={styles.sub}>Adicione complementos ao seu pedido</Text>
					{
						this.props.setprodutos.pedido.map((item, index)=>{
							return(
								<View style={[styles.produto,!index?{marginTop:20}:{},index == this.props.setprodutos.pedido.length-1?{marginBottom:20}:{borderStyle:"solid", borderBottomColor:"#e4e4e4", borderBottomWidth:1}]}>
									<View style={styles.column}>
										<Image style={styles.produtoImage} source={item.image}/>
										<View style={styles.produtoInformation}>
											<Text style={styles.produtoName}>{item.produto}</Text>
											<View style={styles.produtoTimeContent}>
												<Image style={styles.produtoTimeImage} source={require("../img/history.png")}/>
												<Text style={styles.produtoTime}>{
														((item.tempo/60)<10?"0"+Math.floor(item.tempo/60):Math.floor(item.tempo/60))+":"+((item.tempo%60)<10?"0"+(item.tempo%60)+" min":(item.tempo%60)+" min")
													}</Text>
											</View>
										</View>
									</View>
									{
										item.complementos.map((item2,index2)=>{
											return(<View style={styles.produto}>
													<View style={styles.column}>
														<Image style={styles.complementoImage} source={item2.image}/>
														<View style={styles.produtoInformation}>
															<Text style={styles.produtoName}>{item2.produto}</Text>
															<View style={styles.produtoTimeContent}>
																<Image style={styles.produtoTimeImage} source={require("../img/history.png")}/>
																<Text style={styles.produtoTime}>
																	{
																		((item2.tempo/60)<10?"0"+Math.floor(item2.tempo/60):Math.floor(item2.tempo/60))+":"+((item2.tempo%60)<10?"0"+(item2.tempo%60)+" min":(item2.tempo%60)+" min")
																	}
																</Text>
															</View>
														</View>
													</View>
													<TouchableOpacity style={[styles.checkContent,item2.status?{backgroundColor:"#48d29f"}:{borderStyle:"solid", borderWidth:2, borderColor:"#d4d8d7"}]} onPress={()=>{
															component.props.changePedidoStatus(index,index2);
														}}>
														<Image style={{width:20, height:20}} source={require('../img/check.png')}/>

													</TouchableOpacity>
												</View>)
										})
									}
								</View>
							)
						})
					}


				</ScrollView>
				<View style={styles.contentButtons}>
					<TouchableOpacity onPress={()=>{Actions.pop();}} style={[styles.button,{backgroundColor:"#d16042"}]}>
						<Text style={[{color:"rgba(255,255,255,0.9)", textAlign:"center", fontSize:17, letterSpacing:2}]}>VOLTAR</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{Actions.push("Finalizando");}} style={[styles.button,{backgroundColor:"#3dc88f"}]}>
						<Text style={[{color:"rgba(255,255,255,0.9)", textAlign:"center", fontSize:17, letterSpacing:2}]}>FINALIZAR</Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		height:heightScreen,
		alignItems:"center",
		backgroundColor:"#f5f5f5"
	},
	scrollView: {
		flex: 1,
		height:heightScreen - 180,
		backgroundColor:"#f5f5f5",
		paddingLeft:30,
		paddingRight:30
	},
	produto:{
		flexDirection:"row",
		alignItems:"center",
		flexWrap:"wrap",
		width:"100%",
		paddingBottom:10,
		paddingTop:10

	},
	produtoImage:{
		width:70,
		height:70,
		marginRight:10
	},
	complementoImage:{
		width:50,
		height:50,
		marginRight:10,
		marginLeft:70
	},
	produtoInformation:{
		justifyContent:"center"
	},
	produtoName:{
		fontSize:15,
		color:"#8d847b"
	},
	produtoTimeContent:{
		flexDirection:"row",
		alignItems:"center",
		marginTop:5
	},
	produtoTime:{
		fontSize:12,
		color:"#8d847b"

	},
	produtoTimeImage:{
		width:14,
		height:14,
		marginRight:2
	},
	column:{
		flexDirection:"row",
		width:widthScreen - 90
	},
	contentButtons:{
		flexDirection:"row"
	},
	button:{
		height:70,
		flex:1,
		backgroundColor:"green",
		width:"100%",
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:"#34495e"
	},
	label:{
		marginTop:10,
		marginBottom:10,
		width:"100%",
		paddingLeft:10,
		fontSize:15,
		color:"#858585"
	},
	checkContent:{
		width:30,
		height:30,
		borderRadius:15,
		alignItems:"center",
		justifyContent:"center"
	},
	sub:{
		fontSize:15,
		color:"#817871",
		marginTop:22,
		width:"100%",
		textAlign:"center"
	}
});



const mapStateToProps = state => {
	const {setprodutos} = state;
	return {setprodutos};
}

export default connect(mapStateToProps, {
	changePedidoStatus:changePedidoStatus
})(Pedido);
