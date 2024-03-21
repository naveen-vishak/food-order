import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About us</h1>
            <h3>This is a mimic of swiggy's website</h3>
            <UserClass name={"Naveen Vishak"} email={"react@namastedev.com"}/>
        </div>
    )
}

export default About;