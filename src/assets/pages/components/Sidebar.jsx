import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <section className="logotype">
        <a href="#" className="logo">
          <img src="/images/logotype/alpha-logotype-icon.svg" alt="#" />
          <span>alpha</span>
        </a>
      </section>
      <nav className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active">
          <i className="fa-solid fa-briefcase"></i>
          <span>Projects</span>
        </NavLink>
        <NavLink to="/clients" className="nav-link">
          <i className="fa-solid fa-handshake"></i>
          <span>Clients</span>
        </NavLink>
        <NavLink to="/members" className="nav-link">
          <i className="fa-solid fa-user-group"></i>
          <span>Members</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;