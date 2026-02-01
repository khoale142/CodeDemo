import { Component } from "react";
class Timer extends Component{ timerId: number | null = null;  
    
    componentDidMount() {
        this.timerId = window.setInterval(() => {}, 1000);
    }
    componentWillUnmount() {
        if (this.timerId) clearInterval(this.timerId); 
    }   
    render() {
        return <h2>Timer Component is Mounted</h2>;
    }
}