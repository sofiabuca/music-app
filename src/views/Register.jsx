import { useNavigate } from "react-router";

import apiCalls from "../api";
import  AuthForm  from "../components/form/AuthForm.jsx";

const Register = () =>{
    const navigate = useNavigate();

    //Register and user and create an api call
    const registerUser = async (username, password) =>{
        //apiCalls send a body, for that reason we send as an object
        apiCalls.register({username, password}).then( () =>{
            console.log("Account created");
            navigate('/');
        }).catch( (err) => {console.log(err);})
    };
    return (
        <AuthForm formType = "Register" onSubmit ={registerUser} />
        
    );
};

export default Register;