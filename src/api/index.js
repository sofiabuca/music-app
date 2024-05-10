import axios from "axios"; //import the library npm i axios

const api = axios.create({
    baseURL: 'http://localhost:3001/api', //server lives, has to be a differente port
    'Content-Type':'application/json'
});

let header = {};

const setHeader = () =>{
    //json object
    header = {
        //key value pairs
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    };
};


//Create a function
async function getAllAlbums (){ //async asynchronized function
    return api.get('/music', header); //get request at http://localhost:3001/api append to /music
};

//2 way of create a function
const getAlbumById = async (id) =>{
    return api.get(`/music/${id}`, header);
};

//Insert an album
const insertAlbum = async function (body) {
    return api.post('/music', body, header)
};

//Update album
const updateAlbum = async function (id, body) {
    return api.put(`/music/${id}`, body);
};

//Delete
const deleteAlbum = async (id) =>{
    return api.delete(`/music/${id}`);
};


//Connect to register
const register = async (body) =>{
    //api to create a post request and sent to the body inf
    return api.post('/register', body);
};

//Connect to login -> is important the token information
//Store in a session 
const login = async (body ) =>{
    const res = await api.post('/login', body);
    console.log("login");
    sessionStorage.setItem("token", res.data.token); //send to the session store with the key token
    setHeader();
    return res;
}


const apiCalls = {
    getAllAlbums, 
    getAlbumById,
    insertAlbum, 
    updateAlbum, 
    deleteAlbum,
    register,
    login
};

export default apiCalls;