import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import MenuHorizontal from '../MenuHorizontal';
import Content from '../Content';

const Layout: React.FC = ({ children }) => (
    <Grid>
        <MainHeader />
        <MenuHorizontal />
        <Content>
            {children}
        </Content>
    </Grid>
);


export default Layout;