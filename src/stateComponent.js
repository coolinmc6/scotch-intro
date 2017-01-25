import React, { Component } from 'react';

const StateComponent = React.createClass({
	getInitialState: function(){
        return {
            count: 5
        }
    },
    render: function(){
        return (
            <h1>{this.state.count}</h1>
        )
    }
})

export default StateComponent;