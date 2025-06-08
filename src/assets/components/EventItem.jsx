import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`} className="event-card">
      <div className="event-card-image"></div>

      <div className="event-card-body">
        <p className="event-card-date">
          {item.startTime
            ? new Date(item.startTime).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })
            : 'Date TBA'}
        </p>

        <h3 className="event-card-title">{item.title}</h3>

        <p className="event-card-location">
          <i className="fa-solid fa-location-dot"></i> {item.location}
        </p>

        <p className="event-card-price">
          {item.price ? `$${item.price}` : 'Free'}
        </p>
      </div>
    </Link>
  );
};

export default EventItem;
