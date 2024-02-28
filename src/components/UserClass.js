import { Component } from "react";
import { creator } from "../app";

class UserClass extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: props?.name,
            email: props?.email,
            age:20
        }
    }
    componentDidMount () {
        // console.log("Compinent did mount");
    }
    componentDidUpdate () {
        // console.log("Component did update");
    }
    componentWillUnmount () {
        // console.log("Component unmounted");
    }
    render() {
        return (
            <div className="user">
                <p><b>Creator :</b>{this.state.name}</p>
                <p><b>Email :</b>{this.state.email}</p>
                <creator.Consumer>
                    {({asstCreator, setAsstCreator}) => {
                        const handle = () => {
                            asstCreator.name === "Bharath Raj"
                            ? setAsstCreator({
                                name : "Srinath",
                                email : "react@namastedev.com"
                            })
                            : setAsstCreator({
                                name : "Bharath Raj",
                                email : "react@namastedev.com"
                            })
                        }
                        return (
                            <>
                            <p><b>Creator :</b>{asstCreator.name}</p>
                            <p><b>Email :</b>{asstCreator.email}</p>
                            <button className="px-2 border-2 border-black" onClick={handle}>Click</button>
                            </>
                        )
                    }}
                </creator.Consumer>
            </div>
            
        );
    }
}

export default UserClass;