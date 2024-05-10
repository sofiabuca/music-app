import { styled } from "styled-components";

const Input = styled.input.attrs({
    className: "form-control"
})`
    margin-bottom: 5px;
`;

const UserInput = ({setValue, initialValue, type = 'text'}) =>{
    //Work with data in real time
    return (
        <Input type = {type} placeholder = {initialValue} onChange={(e) => {setValue(e.target.value)}}/> 
    
    )
}

export default UserInput;