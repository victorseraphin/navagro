import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import SignIn from '../pages/SignIn';
import Bens from '../pages/Cadastros/Bens';
import DRE from '../pages/Relatorios/DRE';
import Produtos from '../pages/Saidas/Produtos';
import Insumos from '../pages/Entradas/Insumos';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/cadastros/bens" exact component={Bens} />
            <Route path="/entradas/insumos" exact component={Insumos} />
            <Route path="/saidas/produtos" exact component={Produtos} />
            <Route path="/relatoriogerencial/dre" exact component={DRE} />
            <Route path="/meus_dados" exact component={SignIn} />
            <Route path="/list/:type"  component={List} />
        </Switch>
    </Layout>
);

export default AppRoutes;