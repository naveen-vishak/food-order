import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, validateUserName } from "../utils/validateForm";

const Login = () => {
    const [signedIn, setSignedIn] = useState(false);
    const [emailMessage, setEmailMessage] = useState(null);
    const [userNameMessage, setUserNameMessage] = useState(null);
    const [passwordMessage, setPasswordMessage] = useState(null);
    const email = useRef(null);
    const userName = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const validate = () => {
        
        setEmailMessage(validateEmail(email?.current?.value));
        setUserNameMessage(validateUserName(userName?.current?.value));
        setPasswordMessage(validatePassword(password?.current?.value));

        if(emailMessage === null && userNameMessage === null && passwordMessage === null) navigate("/");
    }

    const handleSignIn = () => {
        setSignedIn(!signedIn);
    }
    
    return (
    <div className='bg-white w-[100%] h-[150%]'>
        <form onSubmit={e => e.preventDefault()} className='bg-white w-[35%] mx-auto right-0 left-0 text-black px-[100px] py-[60px] rounded-lg bg-opacity-60'>
            <h1 className="text-3xl mb-4 font-bold">
                { signedIn ? "Sign in" : "Sign up" }
            </h1>

            {!signedIn && 
            <div className="py-4">
                {userNameMessage && <p className="pb-1 text-sm text-orange-400 cursor-pointer">{userNameMessage}</p>}
                <input ref={userName} className="w-[100%] p-2 rounded-md bg-blue-50 text-black" type="text" placeholder=" Name"/>
            </div>}
            
            <div className="py-4">
                {emailMessage && <p className="pb-1 text-sm text-orange-400 cursor-pointer">{emailMessage}</p>}
                <input ref={email} className="w-[100%] p-2 rounded-md bg-blue-50 text-black" type="text" placeholder=" Email"/>
            </div>

            <div className="py-4">
                {passwordMessage && <p className="pb-1 text-sm text-orange-400 cursor-pointer">{passwordMessage}</p>}
                <input ref={password} className="w-[100%] p-2 rounded-md bg-blue-50 text-black" type="password" placeholder=" Password"/>
                {passwordMessage && !signedIn &&
                <ul className="pt-1 text-sm text-orange-400 cursor-pointer">
                    <li>Must have,</li>
                    <li> - Minimum 8 characters in length.</li>
                    <li> - At least one uppercase English letter.</li>
                    <li> - At least one lowercase English letter.</li>
                    <li> - At least one digit.</li>
                    <li> - At least one special character</li>
                </ul>}
            </div>
            
            <button 
            className="w-[100%] p-2 my-4 mt-8 rounded-md bg-orange-400 font-bold"
            onClick={validate}>
                { signedIn ? "Sign in" : "Sign up" }
            </button>
            
            <p className="text-xs my-2 text-gray-400 cursor-pointer" onClick={handleSignIn}>
                { signedIn ? "New to this place? Sign up now" : "Already have an account? Sign in" }
            </p>
        </form>
    </div>)
}

export default Login;