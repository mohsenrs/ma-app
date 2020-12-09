import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="#">prefoot</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" >about</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <Button variant="outline-success" size="sm" to="/signin">Sign In</Button>                        
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;