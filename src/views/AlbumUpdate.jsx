import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router"; 

import { EditForm } from "../components";
import apiCalls from "../api";

const AlbumUpdate = () =>{
    const {id} = useParams(); 

    //Keep track the value, because is going to stay
    const calledAPI = useRef(false);

    //Add navegator
    const navigate = useNavigate();

    //Variable for hold the information
    const [oldAlbum, setOldAlbum] = useState({}); //creating an empty object

    //Create a
    const updateAlbumHander = async (album, artist, year, artwork) =>{ //Contact our api
        const body = {album, artist, year, artwork};
        apiCalls.updateAlbum(id, body).then( () =>{
            alert("Album updated!");
            navigate("/music/list");
        }

        ).catch( err =>{console.log(err);})
    }; 

    useEffect( () =>{
        //Look if the api was call
        if(!calledAPI.current){
            //Import api library
            apiCalls.getAlbumById(id).then( (res) =>{
                setOldAlbum(res.data.data);
            }).catch( err => {console.log(err);});
        }
    },[]);

    return (
        <EditForm
            formType = "Update"
            aName ={oldAlbum.album}
            aArtist = {oldAlbum.artist}
            aYear = {oldAlbum.year}
            aArt = {oldAlbum.artwork}
            onSubmit = {updateAlbumHander}
        />
    );
}

export default AlbumUpdate;