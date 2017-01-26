// import React, { Component } from 'react';
import React from 'react';
import List from './list';

var FilteredList = React.createClass({
	filterList: function(event){
    	var updatedList = this.state.initialItems;
    	updatedList = updatedList.filter(function(item){
      		return item.toLowerCase().search(
        		event.target.value.toLowerCase()) !== -1;
    	});
    	this.setState({items: updatedList});
  	},

  	getInitialState: function(){
  	     return {
  	       initialItems: [
  	         "Apples",
  	         "Broccoli",
  	         "Chicken",
  	         "Duck",
  	         "Eggs",
  	         "Fish",
  	         "Granola",
  	         "Hash Browns"
  	       ],
  	       items: []
  	     }
  	  },
	componentWillMount: function(){
  	    this.setState({items: this.state.initialItems})
  	},





	render(){
		return (
			<div className="filter-list">
				<input type="text" placeholder="Search" onChange={this.filterList}/>
				<List items={this.state.items}/>
	      	</div>
		);
	}
});

export default FilteredList;