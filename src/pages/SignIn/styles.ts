import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.tertiary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h2 {
        color: ${props => props.theme.colors.white}; 
        margin-left: 7px;
    }

    > img {
        width: 300px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 10px;

    background-color: #00ba8b30;
`;

export const FormTitle = styled.h1`
    margin-bottom: 40px;

    color: ${props => props.theme.colors.white}; 

    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid #00ba8b  
    }
`;
export const Botao = styled(Button)`
    width: 100%;
    margin: 7px 0;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    background-color: #00ba8b;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;

    
  
`;

