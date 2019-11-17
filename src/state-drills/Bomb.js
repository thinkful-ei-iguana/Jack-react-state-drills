import React from 'react';

class Bomb extends React.Component{
    constructor(props){
        super(props);
        this.state={count : 0};
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({count: this.state.count+1});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    display(num){
        if(num >= 8){
            return "boom";
        } else if( num % 2 === 0){
            return "tick";
        } else {
            return "tock";
        }
    }

    render() {
        return(
            <div className="ticker">
                <p className="noisy-boy">{this.display(this.state.count)}</p>
            </div>
        );
    }
}

export default Bomb;