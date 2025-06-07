import React from 'react'

const EventItem = ({item}) => {
  return (
    <div className="event-card">
        <div>{item.title}</div>

    </div>
  )
}

export default EventItem