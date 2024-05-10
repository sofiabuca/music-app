import { Link } from "react-router-dom"; //command prompt we imported npm i react-router-dom, show as a differente pages
import {styled} from 'styled-components'; //install styde: npm install styled-components

//Create a componend
const LinkElements = styled.a`
    color:white;
    text-decoration: none;
`;

const List = styled.div.attrs({
  className: "navbar-nav me-auto"
})``;

const Links = () => {
  return (
        <>
            <Link className = "navbar-brand" as = {Link} to = "/">CWEB 602 MERN Application</Link> 
            <List>
              <Link className = "nav-link" as = {Link} to = "/music/list">List Albums</Link>
              <Link className = "nav-link" as = {Link} to = "/music/create">Create Album</Link>
            </List>
        </>
  );
};


export default Links;