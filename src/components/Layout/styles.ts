import styled from 'styled-components';

/**
* Layout
* MH = Main Header
* AS = Aside
* ME = Menu Horizontal
* CT = Content    
*/

export const Grid = styled.div`
    display: grid;
    grid-template-rows: 55px auto;

    grid-template-areas:
    'AS MH'
    'AS ME'
    'AS CT';

    height: 100vh;
    min-width: 315px;

    @media(max-width: 600px){
        grid-template-columns: 100%;
        grid-template-rows: 60px auto;

        grid-template-areas:
        'MH'
        'ME'
        'CT';
    }
`;
