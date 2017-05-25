class HelloWorld extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div>Hello World!</div>
    }
}

// ReactDOM.render(
//     <HelloWorld />, //this is the name of the class
//     document.getElementById("react")
// )

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };
        this.changeMessage = this.changeMessage.bind(this);
    }
    //state is where things that change on the screen will be stored
    //bind sets the value of this inside the changeMessage function
    //after constructor this value is lost

    render() {
        return <div>
                <div className="message">
                    {this.state.text}
                </div>
                <input onChange={this.changeMessage} type="text" value={this.state.text} />
            </div>
    }
    //{} mean that this is javascript that needs to be evaluated

    changeMessage(event){
        this.setState({text: event.target.value})
    }
}

ReactDOM.render(
    <Message text = "Welcome to my site" />,
    document.getElementById("react")
)
