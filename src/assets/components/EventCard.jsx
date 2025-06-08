import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ id, title, eventDate, location, price = 0 }) => {
  const date = new Date(eventDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const time = new Date(eventDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Link to={`/events/${id}`} className="event-card">
      <div className="event-card-image" />
      <div className="event-card-content">
        <div className="event-card-meta">{date} — {time}</div>
        <h3 className="event-card-title">{title}</h3>
        <div className="event-card-location">📍 {location}</div>
        <div className="event-card-price">${price}</div>
      </div>
    </Link>
  );
};

export default EventCard;