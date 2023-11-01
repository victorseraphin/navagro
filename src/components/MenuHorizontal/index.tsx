import React, { useState } from 'react';
import Toggle from '../Toggle';

import {
    MdOutlineViewKanban,
    MdInsertChartOutlined,
    MdCardGiftcard,
    MdOutlineViewList,
    MdShoppingCart,
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
    Container,
    MenuAntd,
    SubMenuAntd,
} from './styles';

import type { MenuProps } from 'antd';
import { useHistory } from 'react-router-dom';



const MenuHorizontal: React.FC = (props) => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const history = useHistory();

   

    const [current, setCurrent] = useState('dashboard');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Container menuIsOpen={toggleMenuIsOpened}>

            <MenuAntd mode="horizontal" triggerSubMenuAction={"click"} activeKey={current} >
                <MenuAntd.Item key="/dashboard" onClick={()=>history.push("/dashboard")}>
                    <MdOutlineViewKanban />
                    <span >Dashboard</span>
                </MenuAntd.Item>
                <SubMenuAntd icon={<MdOutlineViewList />} title="Cadastro">
                    <MenuAntd.Item key="/cadastros/bens" onClick={()=>history.push("/cadastros/bens")}>Bens</MenuAntd.Item>
                    <MenuAntd.Item key="/cadastros/centro_custos" onClick={()=>history.push("/cadastros/centro_custos")}>Centro de Custos</MenuAntd.Item>
                    <MenuAntd.Item key="/cadastros/centro_lucros" onClick={()=>history.push("/cadastros/centro_lucros")}>Centro de Lucros</MenuAntd.Item>
                    <MenuAntd.Item key="/cadastros/mao_obra" onClick={()=>history.push("/cadastros/mao_obra")}>Funcionários</MenuAntd.Item>
                    <MenuAntd.Item key="/cadastros/insumos" onClick={()=>history.push("/cadastros/insumos")}>Insumos</MenuAntd.Item>
                    <MenuAntd.Item key="/cadastros/pessoas" onClick={()=>history.push("/cadastros/pessoas")}>Clientes / Fornecedores</MenuAntd.Item>
                    <MenuAntd.Item key="/cadastros/taxas" onClick={()=>history.push("/cadastros/taxas")}>Taxas</MenuAntd.Item>
                    <MenuAntd.Item key="/cadastros/unidade_negocio" onClick={()=>history.push("/cadastros/unidade_negocio")}>Unidade de negócios</MenuAntd.Item>
                </SubMenuAntd>
                <SubMenuAntd icon={<MdShoppingCart />} title="Lançamento Débitos">
                    <MenuAntd.Item key="/entradas/insumos" onClick={()=>history.push("/entradas/insumos")}>Insumos</MenuAntd.Item>
                    <MenuAntd.Item key="/entradas/mao_de_obra" onClick={()=>history.push("/entradas/mao_de_obra")}>Pagamento de funcionários</MenuAntd.Item>
                </SubMenuAntd>
                <SubMenuAntd icon={<MdCardGiftcard />} title="Lançamento Receitas">
                    <MenuAntd.Item key="/saidas/produtos" onClick={()=>history.push("/saidas/produtos")}>Produtos</MenuAntd.Item>
                </SubMenuAntd>
                <SubMenuAntd icon={<MdInsertChartOutlined />} title="Relatório Gerenciais" >
                    <MenuAntd.Item key="/relatoriogerencial/dre" onClick={()=>history.push("/relatoriogerencial/dre")}>Demonstração do Resultado</MenuAntd.Item>
                    <MenuAntd.Item key="/relatoriogerencial/entrada" onClick={()=>history.push("/relatoriogerencial/entrada")}>Resumo de Entrada</MenuAntd.Item>
                    <MenuAntd.Item key="/relatoriogerencial/saida" onClick={()=>history.push("/relatoriogerencial/saida")}>Resumo de Saída</MenuAntd.Item>
                </SubMenuAntd>
            </MenuAntd>

            

        </Container>
    );
}

export default MenuHorizontal;