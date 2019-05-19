import React, { Component } from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Login from '../telas/login';
import Cardapio from '../telas/cardapio';
import Pedido from '../telas/pedido';
import Finalizando from '../telas/finalizando';

export default class Content extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Router>
				<Scene key="root"  hideNavBar={true}>
					<Scene key="Login" component={Login} initial/>
					<Scene key="Cardapio" component={Cardapio} animationEnabled={true}/>
					<Scene key="Pedido" component={Pedido}/>
					<Scene key="Finalizando" component={Finalizando}/>
				</Scene>
			</Router>
		);
	}
}
