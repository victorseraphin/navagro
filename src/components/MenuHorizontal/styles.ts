import styled, { css } from 'styled-components';


interface IContainerProps {
    menuIsOpen: boolean;
}


interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}


export const Container = styled.div<IContainerProps>`
    grid-area: ME;
    
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px){
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;

`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px){        
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px){
        display: none;
    }
`;


export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: line;
    width:100vh;
    height:60px;

    
`;

export const MenuItemLink = styled.a`
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
    text-decoration: none;

    padding-left:10px;
    padding-right:10px;
   
    flex-direction: column;
    display: flex;
    align-items: center;   
    justify-content: center;

    border-left:1px solid #d9d9d9;   

    transition: opacity .3s;

    &:hover {
        color:#7F8C8D;
    }

    > svg {
        font-size: 24px;
        margin-right: 5px;
    }
    
`;

export const MenuItemLinkRight = styled.a`
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
    text-decoration: none;

    padding-left:10px;
    padding-right:10px;
   
    flex-direction: column;
    display: flex;
    align-items: center;   
    justify-content: center;

    border-left:1px solid #d9d9d9;   
    border-right:1px solid #d9d9d9;   

    transition: opacity .3s;

    &:hover {
        color:#7F8C8D;
    }

    > svg {
        font-size: 24px;
        margin-right: 5px;
    }
    
`;

export const MenuItemButton = styled.button`
    font-size: 12px;
    color: ${props => props.theme.colors.gray};

    padding-left:10px;
    padding-right:10px;
    
    border: none;
    background: none;

    flex-direction: column;
    display: flex;
    align-items: center;   
    justify-content: center;

    transition: opacity .3s;


    border-right:1px solid #d9d9d9;  

    &:hover {
        color:#7F8C8D;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover{
        opacity: 0.7;
    }

    display: none;

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;
    
    @media(max-width: 470px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }

`;