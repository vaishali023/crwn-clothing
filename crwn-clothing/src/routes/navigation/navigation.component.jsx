import React from 'react';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
         <h1>I am the Navigation Bar.</h1>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation;