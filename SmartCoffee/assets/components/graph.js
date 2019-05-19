import React, { Component } from 'react';
import Svg, {Path} from 'react-native-svg';
import {Dimensions, View} from 'react-native';


var widthScreen = Dimensions.get('window').width;

var width = widthScreen*0.20;
var widthHalf = width/2;

var arc ;
var fill ;

var viewBox = "0 0 "+width+" "+width;

export default class Graph extends Component{
	constructor(props){
		super(props);
		this.state = {
			arc:describeArc(widthHalf, widthHalf, widthHalf, 0, this.props.progress),
			fill:describeArc(widthHalf, widthHalf,widthHalf, 0, 359.9)
		}
		component = this;
	}

	render(){
		return (
			<View>
				{
					this.props.background?(
						<Svg viewBox={viewBox} width={width} height={width}>
							<Path fill="#F2F2F2" d={this.state.fill}/>
							<Path fill={this.props.background?this.props.background:"transparent"} d={this.state.arc}/>
						</Svg>
					):(<View></View>)

				}
			</View>

		)
	}
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

	return {
		x: centerX + (radius * Math.cos(angleInRadians)),
		y: centerY + (radius * Math.sin(angleInRadians))
	};
}

function describeArc(x, y, radius, startAngle, endAngle){

	var start = polarToCartesian(x, y, radius, endAngle);
	var end = polarToCartesian(x, y, radius, startAngle);

	var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

	var d = [
		"M", start.x, start.y,
		"A", radius, radius, 0, arcSweep, 0, end.x, end.y,
		"L", x,y,
		"L", start.x, start.y
	].join(" ");

	return d;
}


