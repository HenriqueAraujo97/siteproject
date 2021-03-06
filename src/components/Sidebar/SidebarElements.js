import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside` 
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #e0e0e0;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out; 
    opacity: ${({ isOpen })=> (isOpen ? '100%' :'0' )};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
    
`;

export const SidebarMenu = styled.ul`
    display: grid;
    
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;

    @media screen and (max-width: 480px ){
        grid-template-rows: repeat(6, 60px)
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: black
`;
export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: black;
`;



export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover  {
        color: #ffb266;
        transition: 0.2s ease-in-out;
    }

`;

