import React, { FunctionComponent } from 'react';
import Header from './commons/Header';
import RouterCompoment from './Router';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <RouterCompoment />
    </>
  );
};

export default Layout;
