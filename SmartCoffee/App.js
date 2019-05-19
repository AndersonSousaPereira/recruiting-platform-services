import React, { Component } from 'react';
import { StyleSheet,View, ScrollView} from 'react-native';
import store from './assets/store';
import {Provider} from 'react-redux';
import Content from './assets/components/content';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<View style={styles.root}>
					<Content></Content>
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	root:{
		flex:1
	}
});
