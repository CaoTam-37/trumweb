import React from 'react'
import Dashboard from './Dashboard'
import FooterAdmin from './FooterAdmin'
import HeaderAdmin from './HeaderAdmin'
import Menu from './Menu'

const Admin = () => {
  return (
    <div className='wrapper'>
        <HeaderAdmin />
        <Menu />
       <Dashboard/>
       <FooterAdmin/>
    </div>
  )
}

export default Admin