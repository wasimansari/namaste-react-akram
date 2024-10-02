import React from "react";
import CardClass from "./CardClass";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        // this.setState={
        //     count:this.state.count
        // }
        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent did mount");
    }
    render(){
        console.log("parent render");
        const {name,education,address}=this.props;
        return(
            <div className="user-card">
                <h3>Name : {name}</h3>
                <h4>Education : {education}</h4>
                <h4>Address : {address}</h4>
                <span>Count : {this.state.count}</span>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increase Count</button>
                <CardClass name="card_1"/>
                <CardClass name="card_2"/>
            </div>
        )
    }
}

export default UserClass;