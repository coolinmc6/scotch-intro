import React, { Component } from 'react';

const MyComponent = React.createClass({
	render: function(){
		return (
			<h1>Hello, {this.props.name}!</h1>
		);
	}
})

export default MyComponent;