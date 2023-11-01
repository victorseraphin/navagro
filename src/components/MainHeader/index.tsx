import React, { useState } from 'react';
import Toggle from '../Toggle';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import { CaretDownOutlined, UserOutlined, SettingFilled } from '@ant-design/icons';
import { Dropdown, Space, Menu } from 'antd';

import {
    Container,
    Profile,
    Header,
    ToggleMenu,
    Title,
} from './styles';

import { MdClose, MdMenu } from 'react-icons/md';
import Link from 'antd/es/typography/Link';
import { useHistory } from 'react-router-dom';



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

    const history = useHistory();
    const menuProfile = (
        <Menu mode="inline">
            <Menu.ItemGroup >
                <Menu.Item onClick={()=>history.push("/relatoriogerencial/dre")} className="cursor-pointer p-2" key="1" >
                    Perfil
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
                <Menu.Item onClick={()=>history.push("/relatoriogerencial/dre")} className="cursor-pointer p-2" key="1" >
                    Programas
                </Menu.Item>
                <Menu.Item onClick={()=>history.push("/relatoriogerencial/dre")} className="cursor-pointer p-2" key="2">
                    Grupos
                </Menu.Item>
                <Menu.Item onClick={()=>history.push("/relatoriogerencial/dre")} className="cursor-pointer p-2" key="3">
                    Empresas
                </Menu.Item>
                <Menu.Item onClick={()=>history.push("/relatoriogerencial/dre")} className="cursor-pointer p-2" key="4">
                    Usuários
                </Menu.Item>
                <Menu.Item onClick={()=>history.push("/relatoriogerencial/dre")} className="cursor-pointer p-2" key="5">
                    Estados
                </Menu.Item>
                <Menu.Item onClick={()=>history.push("/relatoriogerencial/dre")} className="cursor-pointer p-2" key="6">
                    Cidades
                </Menu.Item>
                <Menu.Item onClick={()=>history.push("/relatoriogerencial/dre")} className="cursor-pointer p-2" key="7">
                    Endereços
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <Container>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
                <Title>NavAgro</Title>
                {<Toggle

                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
    />//*/
}
            </Header>

            <Profile>
                <Link style={{ color: 'white' }}>
                    <Dropdown overlay={menuConfig} trigger={["click"]} placement="bottomRight" arrow >
                        <Space>
                            <SettingFilled />
                            Configurações
                            <CaretDownOutlined />
                        </Space>
                    </Dropdown>
                </Link>
                <Link style={{ color: 'white' }}>
                    <Dropdown overlay={menuProfile} trigger={["click"]} placement="bottomRight" arrow >
                        <Space style={{ marginLeft: '30px' }}>
                            <UserOutlined />
                            victorseraphin@gmail.com
                            <CaretDownOutlined />
                        </Space>
                    </Dropdown>
                </Link>
            </Profile>
        </Container>
    );
}

export default MainHeader;