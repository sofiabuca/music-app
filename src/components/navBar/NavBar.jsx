import Links from './Links.jsx';
import Logo from './Logo.jsx';
import {styled} from 'styled-components';

const Container = styled.div.attrs({
    className: "container"
})``;

const Nav = styled.div.attrs({  //type of element attrs is attributes
    className: "navbar navbar-dark navbar-expand-lg" // expand the style
})`
    background-color : #4506AF; 
    padding: 20px;
`;

const NavBar = () => {
  return (
    <Container>
        <Nav>
            <Logo />
            <Links/>
        </Nav>
    </Container>
  );
};


export default NavBar;