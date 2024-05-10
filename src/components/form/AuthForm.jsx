//File for authentication and authorization
import { useState } from "react";
import { styled } from "styled-components";
import UserInput from "./UserInput";
import apiCalls from "../../api";

const Form = styled.div.attrs({
    className: 'form-group'
})`
    max-width: 1080px;
    margin: auto;
`;

const Title = styled.h1.attrs({
    className: 'h1'
})`
    text-align: center;
`;

const Button = styled.button.attrs({
    className: 'btn btn-primary'
})``;

//sent the form type
const AuthForm = ({formType, onSubmit}) =>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    return(
        <>
            <Title>Welcome! please {formType} </Title>
            <Form>
                <label>Username:</label>
                <UserInput setValue={setUsername}></UserInput>
                <label>Password:</label>
                <UserInput setValue={setPassword} type="password"></UserInput>
                <Button onClick={ () => {onSubmit(username, password)}}>{formType}</Button>
            </Form>
        </>
    );

};

export default AuthForm;