import { Component } from "react";

class CardClass extends Component{
    constructor(props){
        super(props)
        console.log("Child constructor",props.name);
    }
    componentDidMount(){
        console.log("Child did mount",this.name);
    }
    componentWillUnmount(){
        console.log("component will mount");
    }
    
    render(){
        console.log("Child render",this.name);
        return(
            <div>
                <h1>Child Class</h1>
            </div>
        )
    }
}
export default CardClass;