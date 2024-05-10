import { NavBar } from "../components"; // All the file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //import styling: npm install bootstrap@5.3.0-alpha1
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import { Albumlist, AlbumCreate, AlbumUpdate, Register, Login} from "../views";

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path ="/" element={<Login/>} /> 
                <Route path ="/register" element={<Register/>} /> 
                <Route path = "/music/list" element = {<Albumlist />}/>
                <Route path = "/music/create" element = {<AlbumCreate />}/>
                <Route path = "/music/update/:id" element = {<AlbumUpdate/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
};


export default App;
