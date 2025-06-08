import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import EventList from '../components/EventList';

const EventPage = () => {
  return (
    <div className="backoffice-wrapper">
      <Sidebar />
      <div>
        <header id="header">
          <TopBar />
        </header>
        <div id="main">
          <EventList />
        </div>
      </div>
    </div>
  );
};

export default EventPage;