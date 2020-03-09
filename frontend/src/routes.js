import { makeRouteConfig, Route } from 'found';
import { getUser } from './utils';
import React from 'react';
import {
  CreateTag,
  TagListPage,
} from './components/compositions/Tags';

import { Entry } from './components/pages/Entry/';
import { Login } from './components/compositions/Login';
import { Home } from './components/pages/Home';
import { ProductPage } from './components/pages/Products';
import { SettingsPage } from './components/pages/Settings';
import { StaffPage } from './components/pages/Staff';
import {
  IndividualCustomerPage,
  CompanyCustomerPage,
} from './components/pages/Customers';
import StaffDetailRender from './components/compositions/Staff/StaffDetailRender';
import IndividualDetailRender from './components/compositions/Customer/IndividualDetailRender';
import CompanyDetailRender from './components/compositions/Customer/CompanyDetailRender';
import App from './App';

const user = getUser();
const home = (
  <Route Component={Home}>
    <Route Component={TagListPage} />
    <Route path="tags" Component={TagListPage} />
    <Route path="create-tag" Component={CreateTag}></Route>
    <Route path="products" Component={ProductPage} />
    <Route path="icustomers">
      <Route Component={IndividualCustomerPage} />
      <Route path="/:icId" Component={IndividualDetailRender} />
    </Route>
    <Route path="ccustomers">
      <Route Component={CompanyCustomerPage} />
      <Route path="/:ccId" Component={CompanyDetailRender} />
    </Route>
    <Route path="settings" Component={SettingsPage} />
    <Route path="staff">
      <Route Component={StaffPage} />
      <Route path=":staffId" Component={StaffDetailRender} />
    </Route>
  </Route>
);
const entry = (
  <Route Component={Entry}>
    <Route Component={Login} />
  </Route>
);
export default makeRouteConfig(
  <Route path="/" Component={App}>
    {user ? home : entry}
  </Route>,
);
