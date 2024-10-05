
import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           userInfo : {
            name :"Dummy",
            location:"default",
           }
        }

    }
    async componentDidMount(){
    //   const data = await fetch("https://api.github.com/users/akshaymarch7");
    //   const json =  await data.json();
    //   console.log(json);
    //   this.setState({
    //     userInfo : json,
    //   })
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }


    render(){
        const {name , location} = this.state.userInfo;
        return ( 
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>Contact</h3>
            </div>
        )
    }
}
export default UserClass;





