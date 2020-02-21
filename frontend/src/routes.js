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
import App from './App';

const user = getUser();
const home = (
  <Route Component={Home}>
    <Route Component={TagListPage} />
    <Route path="tags" Component={TagListPage} />
    <Route path="create-tag" Component={CreateTag}></Route>
    <Route path="products" Component={ProductPage}></Route>
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
