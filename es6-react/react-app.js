class HelloWorld extends React.Component {

	constructor() {
		super();
	}

	render() {
		return <div>Hello World!</div>
	}

}

// ReactDOM.render(
	// <HelloWorld />,
// 	document.getElementById("react")
// )



class Message extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text,
			name: this.props.name
		}

		this.changeMessage = this.changeMessage.bind(this);

	}

	render() {
		return	<div>
					<div className="message">{this.state.text}</div>
					<input onChange={this.changeMessage} type="text" value={this.state.text} />
				</div>
	}

	changeMessage(event) {
		this.setState({text: event.target.value})
	}

}

// ReactDOM.render(
// 	<Message text="Welcome to my Site." />,
// 	document.getElementById("react")
// )

// class Post extends React.Component {
//
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			title: "",
// 			content: ""
// 		}
//
// 		this.updateTitle = this.updateTitle.bind(this);
// 		this.updateContent = this.updateContent.bind(this);
// 	}
//
// 	render() {
//
// 		return 	<div>
// 					<input type="text" onChange={this.updateTitle} value={this.state.title} />
// 					<input type="text" onChange={this.updateContent} value={this.state.content} />
// 				</div>
//
// 	}
//
// 	updateTitle(event) {
// 		this.setState({title: event.target.value});
// 	}
//
// 	updateContent(event) {
// 		this.setState({content: event.target.value});
// 	}
//
// }
//
// ReactDOM.render(
// 	<Post />,
// 	document.getElementById("react")
// )




class Post extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			content: "",
			latestPost: {
				title: "",
				content: ""
			}
		}

		this.updateTitle = this.updateTitle.bind(this);
		this.updateContent = this.updateContent.bind(this);
		this.updateLatestPost = this.updateLatestPost.bind(this);
	}

	render() {

		return 	<div>
					<div>Title: {this.state.title}</div>
					<div>Content: {this.state.content}</div>
					<input onChange={this.updateTitle} value={this.state.title} />
					<input onChange={this.updateContent} value={this.state.content} />
					<button onClick={this.updateLatestPost}>Post!</button>
					<h2>Latest Post</h2>
					<div>{this.state.latestPost.title}</div>
					<div>{this.state.latestPost.content}</div>
				</div>

	}

	updateTitle(event) {
		this.setState({title: event.target.value})
	}

	updateContent(event) {
		this.setState({content: event.target.value})
	}

	updateLatestPost() {
		this.setState({
			latestPost: {title: this.state.title, content: this.state.content},
			title: "",
			content: ""
		})
	}


}


ReactDOM.render(
	<Post />,
	document.getElementById('react')
)



















//
