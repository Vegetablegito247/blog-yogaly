import React from 'react'
import DashHead from '../../components/dashHead/DashHead'
import { Outlet } from 'react-router-dom'

function Classes() {
  return (
    <div className="classes_dashboard">
        <DashHead headTitle='Classes' />
        <Outlet />
    </div>
  )
}

export default Classes