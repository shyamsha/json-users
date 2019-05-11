import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./Home";

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then(Response => Response.json())
			.then(data => {
				this.setState(() => ({ users: data }));
			});
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<h4>User Names</h4>
					<ul>
						{this.state.users.map(user => {
							return (
								<li key={user.id}>
									<Link to={`/user/${user.id}`}>{user.name}</Link>
								</li>
							);
						})}
					</ul>
					<hr />

					<Route path="/user/:id" component={Home} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
