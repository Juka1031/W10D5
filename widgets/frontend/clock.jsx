
import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: new Date()
        }
        
    };

    tick(){
        this.setState({time: new Date});
    };

    componentDidMount(){
        this.timer = setInterval(this.tick.bind(this), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        return (
        <div>{hours}:{minutes}:{seconds} EST</div>
        )
    }
}

export default Clock;