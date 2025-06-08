import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <section className="logotype">
        <a href="#" className="logo">
          <img src="/images/logotype/v-logotype.svg" alt="Ventixe Logo" />
        </a>
      </section>

      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <i className="fa-solid fa-briefcase"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <i className="fa-solid fa-handshake"></i>
          <span>Events</span>
        </NavLink>


      </nav>
    </aside>
  );
};

export default Sidebar;