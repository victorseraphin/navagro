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

import { CaretDownOutlined, UserOutlined, SettingFilled, DashboardFilled  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Menu } from 'antd';
import Link from 'antd/es/typography/Link';



const MenuHorizontal: React.FC = (props) => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);



    const menuProfile = (
        <MenuAntd mode="horizontal">
            <Menu.ItemGroup >
                <Menu.Item key="1" >
                    <a href="/meus_dados">Programas</a>
                </Menu.Item>
                <Menu.Item key="2" onClick={signOut}>
                    Empresas
                </Menu.Item>
            </Menu.ItemGroup>
        </MenuAntd>
    );
    const menuProfile2 = (
        <MenuAntd mode="horizontal">
            <Menu.ItemGroup >
                <Menu.Item key="1" >
                    <a href="/meus_dados">Perfil</a>
                </Menu.Item>
                <Menu.Item key="2" onClick={signOut}>
                    Sair
                </Menu.Item>
            </Menu.ItemGroup>
        </MenuAntd>
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

            <MenuAntd mode="horizontal" triggerSubMenuAction={"click"} activeKey={current} >
                <MenuAntd.Item key="/dashboard">
                    <MdOutlineViewKanban />
                    <span ><Link href="/dashboard">Dashboard</Link></span>
                </MenuAntd.Item>
                <SubMenuAntd icon={<MdOutlineViewList />} title="Cadastro">
                    <MenuAntd.Item key="/cadastros/bens" ><Link href="/cadastros/bens">Bens</Link></MenuAntd.Item>
                    <MenuAntd.Item>Centro de Custos</MenuAntd.Item>
                    <MenuAntd.Item>Centro de Lucros</MenuAntd.Item>
                    <MenuAntd.Item>Funcionários</MenuAntd.Item>
                    <MenuAntd.Item>Insumos</MenuAntd.Item>
                    <MenuAntd.Item>Clientes / Fornecedores</MenuAntd.Item>
                    <MenuAntd.Item>Taxas</MenuAntd.Item>
                    <MenuAntd.Item>Unidade de negócios</MenuAntd.Item>
                </SubMenuAntd>
                <SubMenuAntd icon={<MdShoppingCart />} title="Lançamento Entrada">
                    <MenuAntd.Item>Insumos</MenuAntd.Item>
                    <MenuAntd.Item>Pagamento de funcionários</MenuAntd.Item>
                </SubMenuAntd>
                <SubMenuAntd icon={<MdCardGiftcard />} title="Lançamento Saída">
                    <MenuAntd.Item>Produtos</MenuAntd.Item>
                </SubMenuAntd>
                <SubMenuAntd icon={<MdInsertChartOutlined />} title="Relatório Gerenciais" >
                    <MenuAntd.Item>Demonstração do Resultado</MenuAntd.Item>
                    <MenuAntd.Item>Resumo de Entrada</MenuAntd.Item>
                    <MenuAntd.Item>Resumo de Saída</MenuAntd.Item>
                </SubMenuAntd>
            </MenuAntd>

            

        </Container>
    );
}

export default MenuHorizontal;