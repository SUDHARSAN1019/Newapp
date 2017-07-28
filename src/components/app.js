import React, { Component } from 'react';
import {Paper} from 'material-ui/Paper';
import Child from './Child.js';
import Baby from './Baby.js';
//import MultiThemeProvider from 'material-ui/styles/MultiThemeProvider';
const styles ={
	paper: {
		height: 400,
		width: 660,
		marginTop: -20,
		marginRight: 130,
		marginLeft: 30
	}
};
export default class App extends Component {
	constructor(args){
		super(args);
		this.state = {
			saveText: ''

		};
	}
	buttonClick(e) {
		//this.setState({toggleSample: !this.state.toggleSample});
		console.log(e);
	}
	inputOneClick(e) {
		// alert("hallo")
		var sample = this.state.saveText;
		console.log(e.target.value);
		this.setState({sample: e.target.value});
		console.log(sample);
	}
  render() {
    return (
    	//<MultiThemeProvider>
    	<div>
      <div className="w3-col m12 w3-green w3-center">
      		<p>Form Registration</p>

      </div>

      <div className="w3-col w3-container  l12 w3-grey chatContent">
      <p>sample data</p>
      
	<form onSubmit={this.buttonClick.bind(this)}>

	<div className="w3-col l7 m3 s4 w3-red w3-center middleName">
		First name: <input type="text" name="FirstName"  onChange={this.inputOneClick.bind(this)}/><br />
		Last name: <input type="text" name="LastName"  /><br />

		<input type="submit" value="Submit" className="w3-black" />
	</div>

	</form>

      </div>

      </div>
     // </MultiThemeProvider>
    );
  }
}
