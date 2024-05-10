import { useState, useEffect, useRef } from "react"; //Control when re-renders happen
import { AgGridReact } from "ag-grid-react"; 
import styled from "styled-components";

import apiCalls from "../api";


const Div = styled.div.attrs({
    className: "ag-theme-apline"
})`
    margin: 0 auto;
    width: 70vw;
    height: 70vh;
`;

const updateAlbumHandler = (e) =>{
    window.location.replace(`/music/update/${e.target.id}`);
};


//Create update and delete button styled.htmlComponent.attributes
const Update = styled.input.attrs((props) =>{
    return ({
        type: "button", 
        className: "btn btn-primary",
        id: props.value, 
        value: "Update",
        onClick : updateAlbumHandler
    })
})`
    cursor:pointer;
    text-align: center;
    padding: 0 10px;
`;


//FUNCTION FOR DELETE ALBUM
//Target of event and we are going to use the id
const deleteAlbumHandler = (e) =>{
    //Confirme if the user wants to erase the album
    if(window.confirm("Are you sure you want to delete?")){
        //Create a api call, e (album )/ target.id for get the id
        apiCalls.deleteAlbum(e.target.id).then(
            //You can't use a navegator
            //Use java script
            window.location.reload()
        ).catch( (err) => {
            console.log(err);
        });
    }
};

//Create the delete button
const Delete = styled.input.attrs((props) =>{
    return ({
        type: "button", 
        className: "btn btn-danger",
        id: props.value, 
        value: "Delete", 
        onClick: deleteAlbumHandler //call function for delete
    })
})`
    cursor:pointer;
    text-align: center;
    padding: 0 10px;
`;

//Function for obtain the album information (params the information of the row)
const getAlbumInfo = (params) =>{
    return params.data['_id']; //grab the id in the mongoose, in mongoose the id is _id
};


//Components
const Albumlist = () =>{
    const [albums, setAlbums] = useState();
    const calledAPI = useRef(false);

    const col = [
        {field: 'album'},
        {field: 'artist'},
        {field: 'year'},
        {field: 'artwork'},
        {
            cellRenderer: Update, //what compenent we want there
            width:110,
            valueGetter: getAlbumInfo //Pass a function with all the information of the row
        },
        {
            cellRenderer: Delete, //what compenent we want there
            width:110,
            valueGetter: getAlbumInfo
        }

    ];

    //For don't do in-necesaries calls
    useEffect( () => {
        if(!calledAPI.current){
            calledAPI.current = true;
            apiCalls.getAllAlbums().then( (res) =>{
                setAlbums(res.data.data);
                console.log("Api called");
            }).catch(console.error);
        }
    }, []); //empty array, not dependency that tells that you can call this code

   
    return (
        <Div>
            <AgGridReact
                rowData = {albums}
                columnDefs = {col} >
            </AgGridReact>
        </Div>
    );
}

export default Albumlist;