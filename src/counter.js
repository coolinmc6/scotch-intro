import React, { Component } from 'react';

const Counter = React.createClass({
	incrementCount(){
		this.setState({
			count: this.state.count + 1
		});
	},

	getInitialState(){
		return {
			count: 0
		}
	},


	render(){
		return (
			<div>
				<hr />
				<h1>Count: {this.state.count}</h1>
				<button type="button" onClick={this.incrementCount}>+</button>
			</div>
		);
	}
})

export default Counter;