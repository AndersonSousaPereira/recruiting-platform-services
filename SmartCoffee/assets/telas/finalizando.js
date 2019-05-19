import React, { Component } from 'react';
import {StyleSheet,View, Text, Image, ScrollView, Platform, Dimensions, TouchableOpacity, ImageBackground, TextInput, StatusBar, Easing, Clipboard} from 'react-native';
import TaskDescriptionAndroid from 'react-native-android-taskdescription';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Status from '../components/status';
import Header from '../components/header';
import Graph from '../components/graph';
import {changePedidoStatus} from '../actions';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

var component;

if(Platform.OS === "ios"){
	var heightScreen = Dimensions.get('window').height;
}else{
	var heightScreen = Dimensions.get('window').height - StatusBar.currentHeight;
}

var widthScreen = Dimensions.get('window').width;

class Finalizando extends Component{

	constructor(props){
		super(props);
		this.state = {
			copy:false,
			cupons:["SC123456","TBY6ZMCQ","O604L4OR","ULLZ1CHL","UN6OBK16","AB8196QU","PNC7HO1Q"],
			indexCupom:0,
			tempo:0
		}
		component = this;
	}

	componentWillMount(){
		console.log("Passei aqui")
		var aux = 0;
		this.props.setprodutos.pedido.map((item,index)=>{
			aux += item.tempo;
			item.complementos.map((item2,index2)=>{
				if(item2.status){
					aux += item2.tempo;
				}
			})
			console.log("aux2: "+aux);
		})

		component.setState({
			tempo:aux
		},()=>{
			this.circularProgress.animate(100, (component.state.tempo * 1000), Easing.quad);
			console.log("aux: "+aux)
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Status backgroundColor="#f5f5f5" barStyle="dark-content" animated />
				<TaskDescriptionAndroid backgroundColor="#f5f5f5"  label="SmartCoffe"/>
				<Header></Header>
				<ScrollView style={styles.scrollView}>
					<Text style={styles.msg}>Pedido realizado</Text>
					<Text style={[styles.msg, styles.msg2]}>com sucesso!</Text>
					<View style={styles.contentCenter}>
						<AnimatedCircularProgress
							size={190}
							rotation={0}
							width={12}
							fill={100}
							tintColor="#3dc88f"
							backgroundColor="#c6c6c6" ref={(ref) => this.circularProgress = ref}>
							{
								(fill) =>{
									console.log("fill");
									console.log(fill);
									var aux = ((fill*(component.state.tempo/1000))/100).toFixed(0);
									aux = ((+aux - this.state.tempo) * -1);
									var min = Math.floor(aux/60)
									var sec = aux%60;
									console.log(fill+" %");

									return(
										<View style={{alignItems:"center", justifyContent:"center"}}>
											<Text style={{fontSize:28, fontWeight:"600", color:"#644e37", marginBottom:5}}>
												{fill != 100?fill.toFixed(0)+" %":"	PRONTO!"}


											</Text>
											{
												fill != 100?(<Text style={{color:"#7c756d", textAlign:"center", fontSize:11, width:120}}>Tempo restante para ficar pronto</Text>):(<View></View>)
											}
										</View>
									)
								}
							}
						</AnimatedCircularProgress>
					</View>
					<View style={styles.contentCenter}>
						<TouchableOpacity style={styles.cupom}>
							<Text style={styles.cupomText}>
								{component.state.cupons[component.state.indexCupom.toFixed(0)]}
							</Text>
						</TouchableOpacity>
					</View>

					<View style={[styles.contentCenter,{flexDirection:"row", justifyContent:"center"}]}>
						<TouchableOpacity onPress={()=>{
								this.setState({copy:false});
								var aux = this.state.indexCupom;
								var aleatorio = aux;
								while(aleatorio == aux){
									aleatorio = Math.random() * (6 - 0) + 0;
								}
								console.log("aleatorio:"+aleatorio);
								this.setState({indexCupom:aleatorio});

							}} style={styles.returnButton}>
							<Image style={styles.imageReturnButton} source={require("../img/reload.png")}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{Clipboard.setString("Teste"); this.setState({copy:true})}} style={[styles.button]}>
							<Text style={[{color:"rgba(255,255,255,0.9)", textAlign:"center", fontSize:16, letterSpacing:2}]}>{!component.state.copy?"COPIAR CUPOM":"COPIADO!"}</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>

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
		width:widthScreen,
		backgroundColor:"#f5f5f5"
	},
	contentCenter:{
		width:widthScreen,
		alignItems:"center"
	},
	button:{
		height:50,
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:"#34495e",
		width:(widthScreen * 0.7) - 55
	},
	returnButton:{
		width:50,
		height:50,
		marginRight:5,
		backgroundColor:"#cacaca",
		borderColor:"#bfbfbf",
		borderWidth:2,
		borderStyle:"solid",
		alignItems:"center",
		justifyContent:"center"
	},
	imageReturnButton:{
		width:40,
		height:40,
	},
	msg:{
		fontSize:27,
		color:"#5b4631",
		marginTop:15,
		textAlign:"center"
	},
	msg2:{
		marginTop:-1,
		marginBottom:15
	},
	cupom:{
		height:70,
		width:"70%",
		padding:10,
		borderWidth: 4,
		borderRadius: 1,
		alignItems:"center",
		justifyContent:"center",
		borderStyle: 'dashed',
		borderColor: '#D1D2DE',
		alignContent: 'center',
		marginTop:15,
		marginBottom:15
	},
	cupomText:{
		color:"#766959",
		fontSize:28
	}
});



const mapStateToProps = state => {
	const {setprodutos} = state;
	return {setprodutos};
}

export default connect(mapStateToProps, {
	changePedidoStatus:changePedidoStatus
})(Finalizando);
