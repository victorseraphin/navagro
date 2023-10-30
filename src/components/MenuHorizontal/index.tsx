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
    MenuAntd,
    SubMenuAntd,
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
    const items: MenuProps['items'] = [
        {
            label: 'Dashboard',
            key: '/dashboard',
            icon: <MdOutlineViewKanban />,
        },
        {
            label: 'Cadastros',
            key: 'cadastro',
            icon: <MdOutlineViewList />,
            children: [
                {
                    label: (
                        <a href="cadastros.bens" rel="noopener noreferrer">
                            Bens
                        </a>
                    ),
                    key: 'cadastros.bens',
                },
                {
                    label: (
                        <a href="/cadastros/centro_custos" rel="noopener noreferrer">
                            Centro de Custos
                        </a>
                    ),
                    key: 'cadastros.centro_custos',
                },
                {
                    label: (
                        <a href="/cadastros/lucros" rel="noopener noreferrer">
                            Centro de Lucros
                        </a>
                    ),
                    key: 'cadastros.lucros',
                },
                {
                    label: (
                        <a href="/cadastros/mao_obra" rel="noopener noreferrer">
                            Funcionários
                        </a>
                    ),
                    key: 'cadastros.mao_obra',
                },
                {
                    label: (
                        <a href="/cadastros/insumos" rel="noopener noreferrer">
                            Insumos
                        </a>
                    ),
                    key: 'cadastros.insumos',
                },
                {
                    label: (
                        <a href="/cadastros/pessoas" rel="noopener noreferrer">
                            Clientes / Fornecedores
                        </a>
                    ),
                    key: 'cadastros.pessoas',
                },
                {
                    label: (
                        <a href="/cadastros/taxas" rel="noopener noreferrer">
                            Taxas
                        </a>
                    ),
                    key: 'cadastros.taxas',
                },
                {
                    label: (
                        <a href="/cadastros/unidade_negocio" rel="noopener noreferrer">
                            Unidade de negócios
                        </a>
                    ),
                    key: 'cadastros.unidade_negocio',
                },
            ],
        },
        {
            label: 'Lançamento Entrada',
            key: 'entrada',
            icon: <MdShoppingCart />,
            children: [
                {
                    label: (
                        <a href="/entradas/insumos" rel="noopener noreferrer">
                            Insumos
                        </a>
                    ),
                    key: 'entradas.insumos',
                },
                {
                    label: (
                        <a href="/entradas/mao_obra_salario" rel="noopener noreferrer">
                            Pagamento de funcionários
                        </a>
                    ),
                    key: 'entradas.mao_obra_salario',
                },
            ],
        },
        {
            label: 'Lançamento Saída',
            key: 'saida',
            icon: <MdCardGiftcard />,
            children: [
                {
                    label: (
                        <a href="/saidas/produtos" rel="noopener noreferrer">
                            Produtos
                        </a>
                    ),
                    key: 'saidas.produtos',
                },
            ],
        },
        {
            label: 'Relatório Gerenciais',
            key: 'relatorios',
            icon: <MdInsertChartOutlined />,
            children: [
                {
                    label: (
                        <a href="https://ant.design" rel="noopener noreferrer">
                            Demonstração do Resultado
                        </a>
                    ),
                    key: 'relatoriogerencial.dre',
                },
                {
                    label: (
                        <a href="https://ant.design" rel="noopener noreferrer">
                            Resumo de Entrada
                        </a>
                    ),
                    key: 'relatoriogerencial.resumo_entrada',
                },
                {
                    label: (
                        <a href="https://ant.design" rel="noopener noreferrer">
                            Resumo de Saída
                        </a>
                    ),
                    key: 'relatoriogerencial.resumo_saida',
                },
            ],
        },
    ];

    const [current, setCurrent] = useState('mail');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const { SubMenu } = MenuAntd;
    return (
        <Container menuIsOpen={toggleMenuIsOpened}>

            <Menu mode="horizontal">
                <Menu.Item>
                    <MdOutlineViewKanban />
                    <span >Dashboard</span>   
                </Menu.Item>
                <SubMenu icon={<MdOutlineViewList />} title="Cadastro">
                    <Menu.Item>SubMenuItem</Menu.Item>
                </SubMenu>
                <SubMenu icon={<MdShoppingCart />} title="Lançamento Entrada">
                    <Menu.Item>SubMenuItem</Menu.Item>
                </SubMenu>
            </Menu>
            {/*
            <MenuAntd mode="horizontal">
                <MenuAntd.Item>
                    <MdOutlineViewKanban />
                    <span >Dashboard</span>   
                </MenuAntd.Item>
                <SubMenuAntd icon={<MdOutlineViewList />} title="Cadastro">
                    <MenuAntd.Item>SubMenuItem</MenuAntd.Item>
                </SubMenuAntd>
                <SubMenuAntd icon={<MdShoppingCart />} title="Lançamento Entrada">
                    <MenuAntd.Item>SubMenuItem</MenuAntd.Item>
                </SubMenuAntd>
            </MenuAntd>
            <MenuContainer>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                
                <MenuItemLink href="/dashboard">
                    <MdOutlineViewKanban />
                    Dashboard
                </MenuItemLink>

                <Dropdown overlay={menuCadastros} trigger={["click"]} placement="bottomRight" arrow>
                    <Space>
                        <SettingFilled />
                        Cadastros
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
    
            </MenuContainer>*/}

        </Container>
    );
}

export default MenuHorizontal;