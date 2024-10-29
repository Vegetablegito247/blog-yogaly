import React from 'react'
import DashHead from '../../components/dashHead/DashHead'
import { Outlet } from 'react-router-dom'

function Blogs() {
  return (
    <div className="blog_dashboard">
      <DashHead headTitle='Blogs' />
      <Outlet />
    </div>
  )
}

export default Blogs