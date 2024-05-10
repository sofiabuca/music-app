import {styled} from "styled-components";
import {useState} from 'react'
import UserInput from "./UserInput";
const Form = styled.div.attrs({
    className : 'form-group'
})`
    max-width:1080px;
    margin: auto;
`;

const Title = styled.h1.attrs({
    className :'h1'
})``;
const Button = styled.input.attrs({
    className: 'btn btn-primary',
    // type: button
})``;

const CancelButton  = styled.input.attrs({
    className: 'btn btn-danger'
})`
    margin-left:5px;
`;


const EditForm = ({formType, aName = "", aArtist = "", aYear ="", aArt="", onSubmit}) =>{
    const [albumName, setAlbumName] = useState();
    const [artistName, serArtistName] = useState();
    const [albumYear, setAlbumYear] = useState();
    const [albumArt, setAlbumArt] = useState();

    return(
        <Form>
            <Title>{formType} Album</Title>
            <label>Album Name</label>
            <UserInput setValue ={setAlbumName} initialValue = {aName} />
            <label>Album Artist</label>
            <UserInput setValue ={serArtistName} initialValue = {aArtist} />
            <label>Release year:</label>
            <UserInput setValue ={setAlbumYear} initialValue = {aYear} />
            <label>Artwork:</label>
            <UserInput setValue ={setAlbumArt} initialValue = {aArt} />

            <Button type="button" value ={`${formType} Album`} onClick = {() => {onSubmit(albumName, artistName, albumYear, albumArt)}}/>
            <CancelButton type = "button" value ="Cancel"/>
        </Form>
    );
}

export default EditForm;