import React from 'react'
import DashHead from '../../components/dashHead/DashHead'
import SubscriberDash from './SubscriberDash'

function Subscribers() {
  return (
    <div className='sub_dashboard'>
        <DashHead headTitle='Subscribers' />
        <SubscriberDash />
    </div>
  )
}

export default Subscribers