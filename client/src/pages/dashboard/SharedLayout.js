import React from 'react'
import {Outlet, Link} from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout.js';
import {BigSidebar, SmallSidebar, Navbar} from '../../components'


function SharedLayout() {
  return (<Wrapper>
<main className='dashboard'>
  <SmallSidebar></SmallSidebar>
  <BigSidebar></BigSidebar>
  <div>
    <Navbar></Navbar>
    <div className="dashboard-page">
      <Outlet></Outlet>
    </div>
  </div>
</main>
   
  </Wrapper>
  )
}

export default SharedLayout