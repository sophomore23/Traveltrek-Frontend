import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function LocationDetails({location}) {
 
   
 
 
    return (
    <div>
     <Link
        to={`/location/${location}`}
        
        >
       <button className="btn btn-info mt-2 mb-2 card-btn-1" >More Info!</button>  
    </Link>
    </div>
  )
}
