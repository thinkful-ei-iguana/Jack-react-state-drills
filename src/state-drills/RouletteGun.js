import React from 'react';

class RouletteGun extends React.Component{

    constructor({bulletInTheChamber = 8}){
        super({bulletInTheChamber : 8});
        console.log(bulletInTheChamber);
        this.state={chamber: null, spinningTheChamber: false, bulletInTheChamber: bulletInTheChamber};
    }



    render(){
        let display = '';
        console.log(this.state.chamber);
        console.log("bullet in chamber is " + this.state.bulletInTheChamber);
        if(this.state.spinningTheChamber){
            display = "spinning the chamber and pulling the trigger...";
        }else if (this.state.chamber === this.state.bulletInTheChamber){
            display = 'BANG';
        } else {
            display = "you're safe";
        }
        

        return (<div>
            <p>{display}</p>
            <button onClick={this.pullTrigger}>Pull the trigger!</button>
        </div>);
    }

    pullTrigger = () =>{
        this.setState({chamber: this.state.chamber, spinningTheChamber: true}, () =>{
            setTimeout( () =>{
                let ranBull = Math.ceil(Math.random() * 8);
                this.setState({chamber: ranBull, spinningTheChamber: false});
                console.log(this.state.chamber);
            }, 2000);
        });
    }


}

export default RouletteGun;