import React, { useState } from 'react';
import Toggle from '../Toggle';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import { CaretDownOutlined, UserOutlined, SettingFilled, MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Menu } from 'antd';

import {
    Container,
    Profile,
    Welcome,
    UserName,
    Header,
    ToggleMenu,
    LogImg,
    Title,
    DropDown,
    DropDownContent,
    DropdownToggle,
    SubLi,
} from './styles';



import { MdClose, MdMenu, MdOutlineKeyboardArrowDown, MdOutlineViewKanban } from 'react-icons/md';



const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const { signOut } = useAuth();


    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    const items: MenuProps['items'] = [
        {
            label: <a href="/list/entry-balance">Perfil</a>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <a href="/list/entry-balance">Sair</a>,
            key: '1',
        },
    ];
    const menuProfile = (
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
    const menuConfig = (
        <Menu mode="inline">
            <Menu.ItemGroup >
                <Menu.Item className="cursor-pointer p-2" key="1" >
                    <a href="/list/entry-balance">Programas</a>
                </Menu.Item>
                <Menu.Item className="cursor-pointer p-2" key="2">
                    <a href="/list/entry-balance">Grupos</a>
                </Menu.Item>
                <Menu.Item className="cursor-pointer p-2" key="3">
                    <a href="/list/entry-balance">Empresas</a>
                </Menu.Item>
                <Menu.Item className="cursor-pointer p-2" key="4">
                    <a href="/list/entry-balance">Usuários</a>
                </Menu.Item>
                <Menu.Item className="cursor-pointer p-2" key="5">
                    <a href="/list/entry-balance">Estados</a>
                </Menu.Item>
                <Menu.Item className="cursor-pointer p-2" key="6">
                    <a href="/list/entry-balance">Cidades</a>
                </Menu.Item>
                <Menu.Item className="cursor-pointer p-2" key="7">
                    <a href="/list/entry-balance">Endereços</a>
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const SubMenu = Menu;

    return (
        <Container>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
                <Title>NavAgro</Title>
                <Toggle

                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </Header>

            <Profile>
                <Dropdown overlay={menuConfig} trigger={["click"]} placement="bottomRight" arrow>
                    <Space>
                        <SettingFilled />
                        Configurações
                        <CaretDownOutlined />
                    </Space>
                </Dropdown>
                <Dropdown overlay={menuProfile} trigger={["click"]} placement="bottomRight" arrow >
                    <Space style={{ marginLeft: '30px' }}>
                        <UserOutlined />
                        victorseraphin@gmail.com
                        <CaretDownOutlined />
                    </Space>
                </Dropdown>

                <Menu mode="horizontal">
                
                <Menu.SubMenu icon={<SettingFilled />} title="Configurações">
                    <Menu.Item>Programas</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu icon={<UserOutlined />} title="Lançamento Entrada">
                    <Menu.Item>victorseraphin@gmail.com</Menu.Item>
                </Menu.SubMenu>
            </Menu>

                {/*
                <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']} arrow>
                    <a onClick={(e) => e.preventDefault()} style={{ marginLeft: '30px' }}>
                        <Space>
                            <UserOutlined />
                            victorseraphin@gmail.com
                            <CaretDownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                */}
            </Profile>
        </Container>
    );
}

export default MainHeader;