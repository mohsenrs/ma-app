import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarMenu } from './SidebarElements'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signnup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <Button to="/signin" variant="success" size="lg">Sign In</Button>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;