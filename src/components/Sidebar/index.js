import React from 'react';
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick = {toggle}>
                        Sobre
                    </SidebarLink>
                    <SidebarLink to='service' onClick = {toggle}>
                        Serviço
                    </SidebarLink>
                    <SidebarLink to='portfolio' onClick = {toggle}>
                        Assistencia
                    </SidebarLink>
                    <SidebarLink to='contact' onClick = {toggle}>
                        Contacto
                    </SidebarLink>
                </SidebarMenu>    
            </SidebarWrapper>    
        </SidebarContainer>
    );
};

export default Sidebar
