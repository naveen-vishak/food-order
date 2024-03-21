import {creator} from "../app";
import { useContext } from "react";

const ContactUs = function() {
    const creator_ = useContext(creator);
    return (
        <div className="contact-us">
            <h1>Contact information</h1>
            <h3>Name : {creator_.asstCreator.name}</h3>
            <h3>Email : {creator_.asstCreator.email}</h3>
        </div>
    )
}

export default ContactUs;