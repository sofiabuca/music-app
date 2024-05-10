import { useNavigate } from "react-router"; //Import navegate hook 

import { EditForm } from "../components";
import apiCalls from "../api"; //import api

const AlbumCreate = () =>{

    //Create a navegator
    const navigate = useNavigate();


    const handleAlbumCreate = (album, artist, year, artwork) => {
        const body = {album, artist, year, artwork};

        //Api calls
        //Insert album required a body, contact the api 
        apiCalls.insertAlbum(body).then( () => { //We don't need information back
            //If is successfull create an alert
            alert("Album successfully added");

            //Redirected to the back the "music/list"
            //Using navegate function: is part of the react book, basicially we can hook it into that
            navigate("/music/list");
        }).catch( err => {console.error(console.error());});
    };

    return (
        <EditForm formType ="Create" onSubmit={handleAlbumCreate}/>
    );
}

export default AlbumCreate;