// import React, { Component } from 'react';
import React from 'react';

var List = React.createClass({
	
	render(){
		return (
			<ul>
	      		{ 
	      			this.props.items.map(function(item) {
	          			return <li key={item}>{item}</li>
			        })
		       	}
			</ul>
		);
	}
});

export default List;