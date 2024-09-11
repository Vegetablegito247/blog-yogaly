import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './dashHead.css';
import { useDispatch } from 'react-redux';
import { handleDashSide } from '../../store/dashStore';

function DashHead({ headTitle }) {
    const dispatch = useDispatch();
    return (
        <div className="dash_head">
            <div className="dash_title">
                <h3>{headTitle}</h3>
            </div>
            <div className="dash_burger" onClick={() => dispatch(handleDashSide())}>
                <GiHamburgerMenu />
            </div>
            <div className="dash_logo">
                <h3>Yogaly</h3>
                <div className="logo_container"></div>
            </div>
        </div>
    )
}

export default DashHead