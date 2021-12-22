import React from 'react';
import Header from './header';
import Footer from './footer';
import BackToTop from './back-to-top';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default ({ children }: LayoutProps) => {
  return (
    <div className='container'>
      <Header />
      <main>{children}</main>
      <BackToTop />
      <Footer />
    </div>
  );
};
