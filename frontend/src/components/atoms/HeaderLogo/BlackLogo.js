import React from 'react';
import iokLogo from '../../../img/logo--black.svg';
import { EuiIcon } from '@elastic/eui';
import { Link } from 'found';
import './HeaderLogo.scss';

export default () => (
  <div className="iokLogo--entry ">
    <Link
      to="/"
      activeClassName="active"
      className="euiHeaderLogo"
      exact
    >
      <EuiIcon type={iokLogo}></EuiIcon>
      <span className=" rabbit gray">Ikigai </span>
      <span className=" rabbit gray">OKR</span>
    </Link>
  </div>
);
