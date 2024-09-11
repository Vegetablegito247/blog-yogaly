import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../../store/blogStore';
import { fetchClass } from '../../store/classStore';

function DisplayDashboard() {
    const sideMenu = useSelector((state) => state.dashMenu.openSideMenu);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Checking for token
    const token = useSelector((state) => state.admin.admin.token);
    console.log(token)

    useEffect(() => {
        if(token === null || !token) {
            navigate('/admin');
        }
        dispatch(fetchBlog());
        dispatch(fetchClass());
    }, [dispatch, token]);

  return (
    <div className="displayBoard">
        <div className={sideMenu ? "sideMenu active" : "sideMenu"}>
            <div className="mainMenu">
                <NavLink to='/dashboard'>
                    <div className="side_icon"></div>
                    <span>Overview</span>
                </NavLink>
                <NavLink to='/dashboard/blogs'>
                    <div className="side_icon"></div>
                    <span>Blogs</span>
                </NavLink>
                <NavLink to='/dashboard/class'>
                    <div className="side_icon"></div>
                    <span>Classes</span>
                </NavLink>
                <NavLink to='/dashboard/subscribers'>
                    <div className="side_icon"></div>
                    <span>Subscribers</span>
                </NavLink>
            </div>

            <div className="account">
                <div className="acctHolder">

                </div>
                <div className="logout">
                    <div className="acctIcon"></div>
                    <span></span>
                </div>
            </div>
        </div>
        <div className="outlet">
            <Outlet />
        </div>
    </div>
  )
}

export default DisplayDashboard