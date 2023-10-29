import React, { useState } from 'react';
import Toggle from '../Toggle';

import {
    MdOutlineViewKanban,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdInsertChartOutlined,
    MdCardGiftcard,
    MdOutlineViewList,
    MdShoppingCart,
} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemLinkRight,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter,
} from './styles';

import { CaretDownOutlined, UserOutlined, SettingFilled, MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Menu } from 'antd';

const MenuHorizontal: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);


    
    const menuCadastros = (
        <Menu mode="inline">
            <Menu.ItemGroup >
                <Menu.Item className="cursor-pointer p-2" key="1" >
                    <a href="/meus_dados">Perfil</a>
                </Menu.Item>
                <Menu.Item className="cursor-pointer p-2" key="2" onClick={signOut}>
                    Sair
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );


    return (
        <Container menuIsOpen={toggleMenuIsOpened}>

            <MenuContainer>                
                <MenuItemLink href="/dashboard">
                    <MdOutlineViewKanban />
                    Dashboard
                </MenuItemLink>

                <Dropdown overlay={menuCadastros} trigger={["click"]} placement="bottomRight" arrow>
                    <Space>
                        <SettingFilled />
                        Cadastros
                        <CaretDownOutlined />
                    </Space>
                </Dropdown>

                <MenuItemLink href="/cadastros/bens">
                    <MdOutlineViewList />
                    Cadastros
                </MenuItemLink>

                <MenuItemLink href="/entradas/insumos">
                    <MdShoppingCart />
                    Lançamento Entrada
                </MenuItemLink>

                <MenuItemLink href="/saidas/produtos">
                    <MdCardGiftcard />
                    Lançamento Saída
                </MenuItemLink>

                <MenuItemLinkRight href="/relatoriogerencial/dre">
                    <MdInsertChartOutlined />
                    Relatório Gerenciais
                </MenuItemLinkRight>
            </MenuContainer>
            
        </Container>
    );
}

export default MenuHorizontal;