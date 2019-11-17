import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props);
        this.state= { who: "world"};
    }

    render(){
        return <div className="HW" >
            <p>Hello, {this.state.who}</p>
            <button onClick={this.HandleWorldClicked}>World</button>
            <button onClick={this.HandleFriendClicked}>Friend</button>
            <button onClick={this.HanldeReactClicked}>React</button>
        </div>;
    }

    HandleWorldClicked = () =>{
        this.setState({who: "world"});
    }

    HandleFriendClicked = () =>{
        this.setState({who: "friend"});
    }

    HanldeReactClicked = () =>{
        this.setState({who: "react"});
    }
}

export default HelloWorld;