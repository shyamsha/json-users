import React from "react";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: {},
			user: {}
		};
	}
	componentDidUpdate() {
		fetch(
			`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
		)
			.then(Response => Response.json())
			.then(data => {
				this.setState(() => ({ user: data }));
			});
		fetch(
			`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`
		)
			.then(response => response.json())
			.then(data => {
				this.setState(() => ({ todo: data }));
			});
	}

	render() {
		return (
			<div>
				<div>
					<h6>User Information</h6>

					{/*console.log(Object.values(this.state.user)[4])*/}

					<p>userName: {this.state.user.username}</p>
					<p>email: {this.state.user.email}</p>
					<p>phone: {this.state.user.phone}</p>
					<p>
						website:{" "}
						<a href={this.state.user.website}>{this.state.user.website}</a>
					</p>

					<h6>TODO Information</h6>
					<p>Title: {this.state.todo.title}</p>
					<p>isComplete: {this.state.todo.completed ? "true" : "false"}</p>
				</div>
			</div>
		);
	}
}
export default Home;
