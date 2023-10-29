import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    
    background-color: ${props => props.theme.colors.green};
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    height:55px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.greentext};
    font-size: 12px;
    
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 55px;

`;

export const LogImg = styled.img`
    height: 30px;
    width: 30px;

    @media(max-width: 600px){        
        display: none;
    }
`;
export const ToggleMenu = styled.button`
    width: 30px;
    height: 30px;

    border-radius: 5px;
    font-size: 22px;
    
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.greentext};

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
export const Title = styled.h3`
    color: ${props => props.theme.colors.greentext};
    margin-left: 10px;
    margin-right: 40px;
    font-size: 20px;

    @media(max-width: 600px){
        display: none;
    }
`;

export const Toggle = styled.button`
    width: 30px;
`;

export const StyledLi = styled.li`
    float: right;
    height: 100%;
    padding: 10px;
    &:hover {
        background-color: ${props => props.theme.colors.green};
    }
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1000;
    right: 0;
	left: auto;

    &::before {
        content: '';
        display: inline-block;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #ccc;
        border-bottom-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: -7px;
        left: auto;
	    right: 0;
        margin-right:10px;
    }

    &::after {
        content: '';
        display: inline-block;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #ffffff;
        position: absolute;
        top: -6px;
        left: auto;
        right: 0;
        margin-right:10px;
    }

`;

export const DropdownToggle = styled.a`
    float: right;
    text-align: right;
    
`;

export const Styledb = styled.a`
    float: none;
    line-height: 19px;
    text-decoration: none;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    
`;

export const DropDown = styled(StyledLi)`
    display: inline-block;  
    
    &:active ${DropDownContent} {
        display: block;       
        float: right;
        min-width: 160px;
        padding: 4px 0;
        margin: 0;
        background-color: #ffffff;
        border-color: #ccc;
        border-color: rgba(0, 0, 0, 0.2);
        border-style: solid;
        border-width: 1px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        border-radius: 5px 5px 5px 5px;
        -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);        
        top: 45px;
        margin-right:10px;
        
    }
    
    
`;

export const SubLi = styled(Styledb)`
    text-decoration: none;
    display: block;
    text-align: left;
    color: black;
    background-color: ${props => props.theme.colors.greentext};
    padding: 5px;
    &:hover {
        color: ${props => props.theme.colors.greentext};
        background-color: ${props => props.theme.colors.green};
    }
    
`;

