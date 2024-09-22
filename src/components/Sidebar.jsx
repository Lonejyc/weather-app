import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/Logo.svg';

import menu from '../assets/images/Menu-blue.svg';
import graph from '../assets/images/Graph-blue.svg';
import location from '../assets/images/Location-blue.svg';
import list from '../assets/images/List-blue.svg';
import calendar from '../assets/images/Calendar-blue.svg';
import settings from '../assets/images/Settings-blue.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} className="logo" alt="Logo" />
      <nav className="sidebar-elements">
        <Router>
          <NavLink to="/">
            <img src={menu} alt="Menu" />
          </NavLink>
          <NavLink to="/">
            <img src={graph} alt="Graph" />
          </NavLink>
          <NavLink to="/">
            <img src={location} alt="Location" />
          </NavLink>
          <NavLink to="/">
            <img src={list} alt="List" />
          </NavLink>
          <NavLink to="/">
            <img src={calendar} alt="Calendar" />
          </NavLink>
          <NavLink to="/">
            <img src={settings} alt="Settings" />
          </NavLink>
        </Router>
      </nav>
    </div>
  );
}

export default Sidebar;
