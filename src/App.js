import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
	state = {
		persons: [
			{ name: 'Laneal', age: 27 },
			{ name: 'Khalia', age: 22 },
			{ name: 'Gavina', age: 47 }
		]
	};

	render() {
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				>
					My hobbies: Youtube
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
		// return React.createElement(
		// 	'div',
		// 	{ className: 'App' },
		// 	React.createElement('h1', null, 'Does this work now?')
		// );
	}
}

export default App;
