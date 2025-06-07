import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EventDetailsPage = () => {
    const {id} = useParams()

        const [event, setEvent] = useState({})
    
        const getEvents = async () => {
            const res = await fetch(`https://matteventservice-akdwdzceejhwhwct.swedencentral-01.azurewebsites.net/api/Events/${id}`)
    
            if (res.ok) {
                const response = await res.json()
                setEvent(response.result)
            }
        }
    
        useEffect(() => {
            getEvents()
    
        }, [])


  return (
    <div className="event-details">
        <h1>{event.title}</h1>
    </div>
  )
}

export default EventDetailsPage